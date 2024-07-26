import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar/avatar'
import { Button } from '@/components/ui/button/button'
import { Toaster } from '@/components/ui/sonner/sonner'
import { wait } from '@/utils/utils'

const meta = {
  title: 'ui/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
    },
  },
  args: {
    position: 'top-center',
    richColors: true,
    closeButton: false,
  },
  decorators: [
    (Story, { args }) => (
      <div>
        <Story />
        <Toaster {...args} />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

const DefaultComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() => toast('Event has been created')}
    >
      Show Toast
    </Button>
  )
}

const DescriptionComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() =>
        toast('Toast title info', {
          description: 'Toast description info here ...',
        })
      }
    >
      Show Toast
    </Button>
  )
}

const SuccessComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() => toast.success('Toast success notification')}
    >
      Show Toast
    </Button>
  )
}

const InfoComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() => toast.info('Toast info notification')}
    >
      Show Toast
    </Button>
  )
}

const WarningComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() => toast.info('Toast warning notification')}
    >
      Show Toast
    </Button>
  )
}

const ErrorComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() => toast.info('Toast error notification')}
    >
      Show Toast
    </Button>
  )
}

const ActionComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() =>
        toast('Toast action notification', {
          action: {
            label: 'Close',
            onClick: () => {},
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}

const PromiseComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() =>
        toast.promise(wait({ ms: 2000, data: { name: 'Sample name' } }), {
          loading: 'Loading...',
          success: (data) => {
            return `'${data?.name}' toast has been added`
          },
          error: 'Error',
        })
      }
    >
      Show Toast
    </Button>
  )
}

const CustomComponent = (args: Story['args']) => {
  return (
    <Button
      {...args}
      variant="outline"
      onClick={() =>
        toast(
          <div className="w-full flex flex-row justify-start items-start gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-lg font-semibold leading-6">Custom</h1>
              <p className="text-sm text-gray-500">Toast custom content</p>
            </div>
          </div>
        )
      }
    >
      Show Toast
    </Button>
  )
}

export const Default: Story = {
  render: DefaultComponent,
}

export const Description: Story = {
  render: DescriptionComponent,
}

export const Success: Story = {
  render: SuccessComponent,
}

export const Info: Story = {
  render: InfoComponent,
}

export const Warning: Story = {
  render: WarningComponent,
}

export const Error: Story = {
  render: ErrorComponent,
}

export const Action: Story = {
  render: ActionComponent,
}

export const Loader: Story = {
  render: PromiseComponent,
}

export const Custom: Story = {
  render: CustomComponent,
}
