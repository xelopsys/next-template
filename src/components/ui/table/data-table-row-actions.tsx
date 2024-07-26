'use client'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'
import { ReactElement } from 'react'

import { Button } from '@/components/ui/button/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu/dropdown-menu'

export interface ILink<TData> {
  label: string
  action: (value?: Row<TData>) => void
  icon?: ReactElement
  subLinks?: ILink<TData>[]
  separator?: boolean
}

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
  links: ILink<TData>[]
}

export function DataTableRowActions<TData>({
  row,
  links,
}: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {links.map((link, index) => {
          if (link.subLinks) {
            return (
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger>{link.label}</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {link.subLinks.map((subLink, index) => (
                    <>
                      {subLink.separator && <DropdownMenuSeparator />}
                      <DropdownMenuItem
                        key={index}
                        onClick={() =>
                          subLink.action(row.original as Row<TData>)
                        }
                      >
                        {subLink.label}
                        <DropdownMenuShortcut>
                          {subLink.icon}
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            )
          }
          return (
            <>
              {link.separator && <DropdownMenuSeparator />}
              <DropdownMenuItem
                key={index}
                onClick={() => link.action(row.original as Row<TData>)}
              >
                {link.label}
                <DropdownMenuShortcut>{link.icon}</DropdownMenuShortcut>
              </DropdownMenuItem>
            </>
          )
        })}
        {/* <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
