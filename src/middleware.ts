import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/',
    signOut: '/',
  },
  callbacks: {
    authorized: ({ token }) => {
      if (!token?.accessToken) {
        return false
      }

      return true
    },
  },
})

export const config = {
  matcher: ['/', '/admin/:path*'],
}
