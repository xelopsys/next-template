import type { Meta, StoryObj } from '@storybook/react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible/collapsible'

const meta = {
  title: 'ui/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <Collapsible {...args} className="w-[350px] space-y-2 p-5">
      <CollapsibleTrigger asChild>
        <div className="border border-muted rounded-lg w-ful p-3 cursor-pointer">
          This is a trigger
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="gap-2 flex flex-col">
        <div className="p-3 border border-muted rounded-lg w-ful">
          This is content that is collapsible
        </div>
        <div className="p-3 border border-muted rounded-lg w-ful">
          This is another content that is collapsible
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const Template: Story = {
  render: Component,
}
