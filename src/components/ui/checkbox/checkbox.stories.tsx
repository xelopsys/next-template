import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

type CheckboxType = typeof Checkbox
type CheckboxStory = React.ComponentProps<CheckboxType> & {
  withText: boolean
}

const meta = {
  title: 'ui/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    withText: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<CheckboxStory>

export default meta
type Story = StoryObj<CheckboxStory>

const Component = (args: CheckboxStory) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      {args.withText && (
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      )}
    </div>
  )
}

export const Template: Story = {
  args: {
    withText: true,
  },
  render: Component,
}
