import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '@/components/ui/badge/badge'

type BadgeStory = React.ComponentProps<typeof Badge> & {
  text: string
}

const meta = {
  title: 'ui/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<BadgeStory>

export default meta
type Story = StoryObj<BadgeStory>

const Component = ({ text, variant }: BadgeStory) => (
  <Badge variant={variant}>{text}</Badge>
)

export const Template: Story = {
  args: {
    text: 'Badge',
    variant: 'default',
  },
  render: Component,
}
