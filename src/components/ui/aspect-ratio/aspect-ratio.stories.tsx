import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio/aspect-ratio'

const meta = {
  title: 'ui/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <div className="w-[450px]">
      <AspectRatio {...args} className="bg-muted">
        <Image
          src="/image.jpeg"
          alt="one piece"
          fill
          unoptimized
          loading="eager"
          priority={false}
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}

export const Template: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: Component,
}
