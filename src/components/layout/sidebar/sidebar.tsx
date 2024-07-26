'use client'

import { signOut, useSession } from 'next-auth/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover/popover'
import Link from 'next/link'
import clsx from 'clsx'
import { routes } from '@/res/routes'
import { usePathname } from 'next/navigation'
import {
  ArrowRightFromLineIcon,
  ChevronDownIcon,
  ChevronRightCircleIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog/dialog'
import { useState } from 'react'
import { Separator } from '@/components/ui/separator/separator'

export const Sidebar = () => {
  const { data: session } = useSession()
  const [open, setopen] = useState(true)
  const path = usePathname()

  // css for the sidebar links
  const linkcss = (active: boolean) =>
    clsx(
      'group relative flex justify-center rounded px-2 py-1.5 w-full hover:bg-accent',
      'hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      {
        'bg-accent text-accent-foreground': active,
      }
    )

  const hoveritemcss =
    'invisible absolute z-10 start-full top-1/2 ms-4 -translate-y-1/2 transition duration-150 ease-out rounded bg-muted px-2 py-1.5 text-xs font-medium text-muted-foreground group-hover:visible group-data-[state=open]:group-hover:invisible group-data-[open=false]:group-hover:invisible'

  return (
    <div className="flex relative bg-background">
      <div className="flex h-screen w-16 flex-col justify-between border-e">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-secondary text-accent-foreground">
              {session?.user?.name?.charAt(0)} l
            </span>
          </div>

          <div className="border-t border-primary-foreground">
            <div className="px-2">
              <ul className="space-y-1 pt-4">
                {routes.map((route) => {
                  const isActive = route.path === path
                  return route.sub ? (
                    <li key={route.name}>
                      <Popover>
                        <PopoverTrigger
                          data-open={open}
                          className={linkcss(isActive)}
                        >
                          <route.Icon size={20} />
                          <span className={hoveritemcss}>{route.name}</span>
                        </PopoverTrigger>
                        {route.sub.map((sub) => (
                          <PopoverContent
                            key={sub.name}
                            data-open={open}
                            align="start"
                            side="right"
                            alignOffset={10}
                            sideOffset={10}
                            className="data-[open=false]:opacity-0 opacity-100 transition-all duration-300 ease-in-out"
                          >
                            <div className="flex flex-col gap-2">
                              <Link
                                href={sub.path}
                                className="hover:bg-secondary hover:text-secondary-foreground py-2 px-3 rounded-md"
                              >
                                {sub.name}
                              </Link>
                            </div>
                          </PopoverContent>
                        ))}
                      </Popover>
                    </li>
                  ) : (
                    <Link
                      href={route.path}
                      data-open={open}
                      className={linkcss(isActive)}
                    >
                      <route.Icon size={20} />

                      <span className={hoveritemcss}>{route.name}</span>
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* sign out button  */}
        <div className="sticky inset-x-0 bottom-0 border-t border-primary-foreground p-2">
          <SignOut {...{ hoveritemcss }} />
        </div>
      </div>

      {/* sidebar with a toggle button */}
      <div
        data-open={open}
        className={clsx(
          'flex w-60 h-screen bg-inherit flex-1 flex-col justify-between border-e absolute z-[999] data-[open=true]:w-0 data-[open=true]:-translate-x-60 translate-x-16 transition-all duration-300 ease-in-out data-[open=true]:opacity-0 opacity-100'
        )}
      >
        <div className="px-4 py-6">
          <ul className="mt-14 space-y-1 py-0.5">
            {routes.map((route) => {
              return route.sub ? (
                <li key={route.name} className="">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-1.5 hover:bg-accent hover:text-accent-foreground">
                      <span className="text-sm font-medium">{route.name}</span>

                      <ChevronDownIcon
                        size={18}
                        className="shrink-0 transition duration-300 group-open:-rotate-180"
                      />
                    </summary>

                    <ul className=" space-y-1 px-4 relative">
                      {route.sub.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.path}
                            className="block rounded-lg ml-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                      <Separator
                        orientation="vertical"
                        className="absolute h-full -top-1"
                      />
                    </ul>
                  </details>
                </li>
              ) : (
                <li>
                  <Link
                    href={route.path}
                    className="block rounded-lg px-4 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    {route.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <span
        data-open={open}
        onClick={() => setopen(!open)}
        className="absolute z-[999] top-4 -right-4 text-primary bg-primary-foreground rounded-full p-1 cursor-pointer transition duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground data-[open=false]:rotate-180"
      >
        <ChevronRightCircleIcon size={20} />
      </span>
    </div>
  )
}

const SignOut = ({ hoveritemcss }: { hoveritemcss: string }) => {
  return (
    <Dialog>
      <DialogTrigger className="group relative">
        <Button variant="ghost">
          <ArrowRightFromLineIcon className="size-5 opacity-75" />
        </Button>
        <span className={hoveritemcss}>Logout</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will sign out your account
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button>
              <span>Cancel</span>
            </Button>
          </DialogClose>
          <Button variant="destructive" onClick={() => signOut()}>
            Sign out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
