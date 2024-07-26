import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select/select'

const meta = {
  title: 'ui/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  { value: 'est', label: 'Eastern Standard Time (EST)' },
  { value: 'cst', label: 'Central Standard Time (CST)' },
  { value: 'mst', label: 'Mountain Standard Time (MST)' },
  { value: 'pst', label: 'Pacific Standard Time (PST)' },
  { value: 'akst', label: 'Alaska Standard Time (AKST)' },
  { value: 'hst', label: 'Hawaii Standard Time (HST)' },
  { value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
  { value: 'cet', label: 'Central European Time (CET)' },
  { value: 'eet', label: 'Eastern European Time (EET)' },
  { value: 'west', label: 'Western European Summer Time (WEST)' },
  { value: 'cat', label: 'Central Africa Time (CAT)' },
  { value: 'eat', label: 'East Africa Time (EAT)' },
  { value: 'msk', label: 'Moscow Time (MSK)' },
  { value: 'ist', label: 'India Standard Time (IST)' },
  { value: 'cst_china', label: 'China Standard Time (CST)' },
  { value: 'jst', label: 'Japan Standard Time (JST)' },
  { value: 'kst', label: 'Korea Standard Time (KST)' },
  { value: 'ist_indonesia', label: 'Indonesia Central Standard Time (WITA)' },
  { value: 'awst', label: 'Australian Western Standard Time (AWST)' },
  { value: 'acst', label: 'Australian Central Standard Time (ACST)' },
  { value: 'aest', label: 'Australian Eastern Standard Time (AEST)' },
  { value: 'nzst', label: 'New Zealand Standard Time (NZST)' },
  { value: 'fjt', label: 'Fiji Time (FJT)' },
  { value: 'art', label: 'Argentina Time (ART)' },
  { value: 'bot', label: 'Bolivia Time (BOT)' },
  { value: 'brt', label: 'Brasilia Time (BRT)' },
  { value: 'clt', label: 'Chile Standard Time (CLT)' },
]

const Component = (args: Story['args']) => {
  return (
    <Select {...args}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent className="h-80">
        <SelectGroup>
          <SelectLabel>Time zones</SelectLabel>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export const Template: Story = {
  render: Component,
}
