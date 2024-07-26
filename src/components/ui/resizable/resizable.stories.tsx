import type { Meta, StoryObj } from '@storybook/react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable/resizable'
import { cn } from '@/utils/utils'

type ResizableType = typeof ResizablePanelGroup
type ResizableStory = React.ComponentProps<ResizableType> & {
  direction: 'horizontal' | 'vertical'
  withHandle: boolean
}

const meta = {
  title: 'ui/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    withHandle: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<ResizableStory>

export default meta
type Story = StoryObj<ResizableStory>

const Component = (args: ResizableStory) => {
  return (
    <ResizablePanelGroup
      direction={args.direction}
      className="w-full min-h-[200px]"
    >
      <ResizablePanel>
        <div
          className={cn(
            'border w-full h-full align-middle text-center border-muted rounded-l-lg py-10 px-20'
          )}
        >
          One
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle={args.withHandle} />
      <ResizablePanel>
        <div
          className={cn(
            'border w-full h-full align-middle text-center border-muted rounded-r-lg py-10 px-20'
          )}
        >
          Two
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export const Template: Story = {
  args: {
    direction: 'horizontal',
    withHandle: true,
  },
  render: Component,
}
