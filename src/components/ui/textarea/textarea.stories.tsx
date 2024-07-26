import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '@/components/form/label'
import { Textarea } from '@/components/ui/textarea/textarea'

const meta = {
  title: 'ui/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your Message</Label>
      <Textarea {...args} placeholder="Type your message here." id="message" />
      <p className="text-sm text-muted-foreground">
        Description of the textarea field.
      </p>
    </div>
  )
}

export const Template: Story = {
  render: Component,
}
