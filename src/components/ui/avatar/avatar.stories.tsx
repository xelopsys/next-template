import type { Meta, StoryObj } from '@storybook/react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar/avatar'

type AvatarType = typeof Avatar
type AvatarStory = React.ComponentProps<AvatarType> & {
  file: string[]
  fallback: string
}

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    file: {
      control: 'file',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<AvatarStory>

export default meta
type Story = StoryObj<AvatarStory>

const Component = ({ file, fallback }: AvatarStory) => {
  const fileString = file && Array.isArray(file) ? file[0] : file
  return (
    <Avatar>
      <AvatarImage src={fileString} alt="avatar" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}

export const Template: Story = {
  args: {
    file: [],
    fallback: 'FB',
  },
  render: Component,
}
