import type { Meta, StoryObj } from '@storybook/react'
import { RocketIcon } from 'lucide-react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert/alert'

const meta = {
  title: 'ui/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <Alert {...args}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}

export const Template: Story = {
  args: {
    variant: 'default',
  },
  render: Component,
}
