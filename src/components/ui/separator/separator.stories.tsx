import type { Meta, StoryObj } from '@storybook/react'

import { Separator } from '@/components/ui/separator/separator'
import { cn } from '@/utils/utils'

type SeparatorType = typeof Separator
type SeparatorStory = React.ComponentProps<SeparatorType> & {
  orientation: 'horizontal' | 'vertical'
}

const meta = {
  title: 'ui/Separator',
  component: Separator as React.FC<SeparatorStory>,
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
} satisfies Meta<SeparatorStory>

export default meta
type Story = StoryObj<SeparatorStory>

const Component = (args: SeparatorStory) => {
  return (
    <div>
      <div
        className={cn(
          'flex h-5 justify-start items-start text-sm gap-4',
          args.orientation === 'horizontal' ? 'w-40 flex-col' : 'w-max flex-row'
        )}
      >
        <div>Blog</div>
        <Separator orientation={args.orientation} />
        <div>Docs</div>
        <Separator orientation={args.orientation} />
        <div>Source</div>
      </div>
    </div>
  )
}

export const Template: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: Component,
}
