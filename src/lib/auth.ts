import { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'
import type { AuthOptions } from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { login } from '@/requests/auth/login'
import { refreshToken } from '@/requests/auth/refresh-token'
import { ROUTE_LOGIN } from '@/res/routes'

export const auth = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID as string,
      clientSecret: process.env.APPLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'test@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null
        }
        const body = {
          email: credentials.email,
          password: credentials.password,
        }

        try {
          const response = await login(body)

          return {
            data: response,
            id: 'credentials',
          }
        } catch (err: any) {
          const error = err as AxiosError<{ errors: { message: string } }>
          return Promise.reject(
            new Error(error?.response?.data?.errors.message)
          )
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ account, token, user }) => {
      if (account && user) {
        const { token, ...otherUserData } = user.data
        const decodedToken = jwtDecode(token.accessToken) as any

        return {
          ...otherUserData.user,
          accessToken: token.accessToken,
          accessTokenExp: decodedToken.exp as number,
          refreshToken: token.refreshToken,
        }
      }

      if (Date.now() < token.accessTokenExp * 1000 - 60 * 1000 * 5) {
        return token
      }

      try {
        const response = await refreshToken({
          body: { refreshToken: token.refreshToken },
        })

        const decodedToken = jwtDecode(response.token.accessToken) as any

        return {
          ...token,
          accessToken: response.token.accessToken,
          accessTokenExp: decodedToken.exp as number,
          refreshToken: response.token.refreshToken,
        }
      } catch {
        return { ...token, error: 'token_expired' }
      }
    },
    session({ session, token }) {
      if (session.user && token) {
        session.user = token
      }

      return session
    },
  },
  session: { strategy: 'jwt' },
  pages: {
    signIn: ROUTE_LOGIN,
  },
} satisfies AuthOptions
