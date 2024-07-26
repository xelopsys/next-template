import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from '@radix-ui/react-icons'
import type { Meta, StoryObj } from '@storybook/react'

import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group/toggle-group'

const meta = {
  title: 'ui/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FontBoldIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FontItalicIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <UnderlineIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export const Template: Story = {
  args: {
    type: 'multiple',
  },
  render: Component,
}
