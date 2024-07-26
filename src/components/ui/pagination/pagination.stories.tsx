import type { Meta, StoryObj } from '@storybook/react'
import { PaginationState } from '@tanstack/react-table'
import { useEffect, useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination'

type PaginationType = typeof Pagination
type PaginationStory = React.ComponentProps<PaginationType> & {
  pageSize: number
  pageIndex: number
  totalItems: number
}

const meta = {
  title: 'ui/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    pageSize: {
      control: 'number',
    },
    pageIndex: {
      control: 'number',
    },
    totalItems: {
      control: 'number',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<PaginationStory>

export default meta
type Story = StoryObj<PaginationStory>

const Component = (args: PaginationStory) => {
  const [currentPage, setCurrentPage] = useState<PaginationState>({
    pageIndex: args.pageIndex,
    pageSize: args.pageSize || 1,
  })

  useEffect(() => {
    setCurrentPage({
      pageIndex: args.pageIndex,
      pageSize: args.pageSize || 1,
    })
  }, [args.pageIndex, args.pageSize])

  return (
    <Pagination
      pageCount={args.totalItems / currentPage.pageSize}
      pagination={currentPage}
      setPagination={setCurrentPage}
    />
  )
}

export const Template: Story = {
  args: {
    pageSize: 10,
    pageIndex: 0,
    totalItems: 100,
  },
  decorators: [
    (Story: React.FC) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  render: Component,
}
