import type { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'

import { Card, CardContent } from '@/components/ui/card/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel/carousel'

type CarouselType = typeof Carousel
type CarouselStory = React.ComponentProps<CarouselType> & {
  loop: boolean
  active: boolean
  align: 'start' | 'center' | 'end'
}

const meta = {
  title: 'ui/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },

    loop: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<CarouselStory>

export default meta
type Story = StoryObj<CarouselStory>

const Component = (args: CarouselStory) => {
  return (
    <Carousel
      {...args}
      opts={{
        loop: args.loop,
        active: args.active,
      }}
      className="w-full h-full max-w-80"
    >
      <CarouselContent
        className={clsx(
          'max-h-80',
          args?.orientation === 'horizontal' ? 'w-max' : 'w-40'
        )}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-5">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export const Template: Story = {
  args: {
    orientation: 'horizontal',
    active: true,
    loop: false,
  },
  render: Component,
}
