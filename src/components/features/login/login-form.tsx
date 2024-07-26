'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card/card'

export const LoginForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Sign in with your Google or Apple account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() =>
            signIn('google', { redirect: true, callbackUrl: '/user' })
          }
          className="flex flex-row justify-center items-center gap-3 w-full"
        >
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            loading="eager"
            width={20}
            height={20}
          />
          Sign in with Google
        </Button>
        <Button
          onClick={() =>
            signIn('apple', { redirect: true, callbackUrl: '/user' })
          }
          className="flex flex-row justify-center items-center gap-3 mt-4 w-full"
        >
          <Image
            src="https://authjs.dev/img/providers/apple.svg"
            alt="Apple logo"
            loading="eager"
            width={20}
            height={20}
            className="invert dark:invert-0"
          />
          Sign in with Apple
        </Button>
      </CardContent>
    </Card>
  )
}
