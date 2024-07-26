'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export default function Providers({
  children,
  session,
}: {
  children: ReactNode
  session: Session | null
}): ReactNode {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 3,
          refetchOnReconnect: true,
          refetchOnWindowFocus: false,
        },
      },
    })
  )
  return (
    <SessionProvider
      session={session}
      refetchWhenOffline={false}
      refetchOnWindowFocus={false}
    >
      <QueryClientProvider client={client}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </SessionProvider>
  )
}
