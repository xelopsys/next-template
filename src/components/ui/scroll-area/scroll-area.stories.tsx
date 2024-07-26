import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area/scroll-area'
import { cn } from '@/utils/utils'

type ScrollAreaType = typeof ScrollArea
type ScrollAreaStory = React.ComponentProps<ScrollAreaType> & {
  orientation: 'horizontal' | 'vertical'
}

const meta = {
  title: 'ui/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
  tags: ['autodocs'],
} satisfies Meta<ScrollAreaStory>

export default meta
type Story = StoryObj<ScrollAreaStory>

const works = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
]

const Component = (args: ScrollAreaStory) => {
  return (
    <ScrollArea className="whitespace-nowrap rounded-md border">
      <div
        className={cn(
          'flex justify-start items-start p-4',
          args.orientation === 'horizontal'
            ? 'space-x-4 flex-row w-96 h-max'
            : 'space-y-4 flex-col w-max h-80'
        )}
      >
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{' '}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation={args.orientation} />
    </ScrollArea>
  )
}

export const Template: Story = {
  render: Component,
}
