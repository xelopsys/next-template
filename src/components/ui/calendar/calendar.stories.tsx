import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar/calendar'

const meta = {
  title: 'ui/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

const SingleComponent = (args: Story['args']) => {
  const [date, setDate] = useState<Date | undefined>()
  return <Calendar {...args} mode="single" selected={date} onSelect={setDate} />
}
const MultipleComponent = (args: Story['args']) => {
  const [date, setDate] = useState<Date[] | undefined>()
  return (
    <Calendar {...args} mode="multiple" selected={date} onSelect={setDate} />
  )
}

const RangeComponent = (args: Story['args']) => {
  const [date, setDate] = useState<DateRange | undefined>()
  return <Calendar {...args} mode="range" selected={date} onSelect={setDate} />
}

export const Single: Story = {
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    showOutsideDays: true,
  },
  render: SingleComponent,
}

export const Multiple: Story = {
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    showOutsideDays: true,
  },
  render: MultipleComponent,
}

export const Range: Story = {
  decorators: [
    (Story) => (
      <div className="w-full ml-auto">
        <Story />
      </div>
    ),
  ],
  args: {
    showOutsideDays: true,
    numberOfMonths: 2,
    reverseMonths: false,
  },
  render: RangeComponent,
}
