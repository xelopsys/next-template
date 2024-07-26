import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from '@/components/ui/switch/switch'

const meta = {
  title: 'ui/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-4">
      <label htmlFor="switch" className="text-base">
        <div className="space-y-0.5">
          Marketing emails
          <div>Receive emails about new products, features, and more.</div>
        </div>
      </label>
      <Switch id="switch" {...args} />
    </div>
  )
}

export const Template: Story = {
  render: Component,
}
