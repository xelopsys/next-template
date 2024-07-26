import type { Meta, StoryObj } from '@storybook/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion/accordion'

const meta = {
  title: 'ui/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <Accordion {...args} className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <button>Toggle 1</button>
        </AccordionTrigger>
        <AccordionContent>
          <p>Content 2</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <button>Toggle 2</button>
        </AccordionTrigger>
        <AccordionContent>
          <p>Content 2</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export const Template: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: Component,
}
