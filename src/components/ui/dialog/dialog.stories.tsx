import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'

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

const meta = {
  title: 'ui/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
  args: {
    open: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (args?.open !== undefined) setOpen(args?.open)
  }, [args?.open])
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button>
              <span>Cancel</span>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export const Template: Story = {
  decorators: [
    (Story) => (
      <div className="w-full ml-auto">
        <Story />
      </div>
    ),
  ],
  render: Component,
}
