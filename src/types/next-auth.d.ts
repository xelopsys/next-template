import { LoginResponse } from '@/types/login'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      createdAt: string
      updatedAt: string
      accessToken: string
      refreshToken: string
      accessTokenExp: number
      error?: string
    }
  }

  interface User {
    data: LoginResponse
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    name: string
    email: string
    createdAt: string
    updatedAt: string
    accessToken: string
    refreshToken: string
    accessTokenExp: number
    error?: string
  }
}
