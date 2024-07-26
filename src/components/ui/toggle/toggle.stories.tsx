import { FontBoldIcon } from '@radix-ui/react-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from '@/components/ui/toggle/toggle'

const meta = {
  title: 'ui/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <Toggle {...args} aria-label="Toggle bold">
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  )
}

export const Template: Story = {
  render: Component,
}
