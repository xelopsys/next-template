import type { Meta } from '@storybook/react'
import {
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination'
import { DataTable } from '@/components/ui/table/data-table'
import { columns } from '@/components/ui/table/stories/column'
import data from '@/components/ui/table/stories/data.json'

const meta = {
  title: 'ui/Table',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DataTable>

export default meta

const Component = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [tdata, settData] = useState(data?.slice(0, 10) ?? [])
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: 10,
    pageIndex: 0,
  })

  const handlePaginationChange = (page: PaginationState) => {
    setPagination((prevState) => ({
      ...prevState,
      pageIndex: page.pageIndex,
    }))

    const start = page.pageIndex * pagination.pageSize
    const end = start + pagination.pageSize
    settData(data.slice(start, end))
  }

  const table = useReactTable({
    columns,
    data: tdata,
    manualPagination: true,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    pageCount: data.length / pagination.pageSize,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      rowSelection,
      pagination,
    },
  })

  return (
    <div className="h-full flex flex-col justify-start items-center gap-5">
      <div className="h-[80dvh] rounded-md border flex flex-col justify-start items-center">
        <DataTable table={table} />
      </div>
      <Pagination
        pageCount={data.length / pagination.pageSize}
        pagination={pagination}
        setPagination={handlePaginationChange}
      />
    </div>
  )
}

export const Template = {
  decorators: [(Story: any) => <Story />],
  render: Component,
}
