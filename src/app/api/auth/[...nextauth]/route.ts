import NextAuth from 'next-auth'

import { auth } from '@/lib/auth'

const handlers = NextAuth(auth)

export { handlers as GET, handlers as POST }
