import { PaginationState } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import ReactPaginate from 'react-paginate'

import { Button, buttonVariants } from '@/components/ui/button/button'
import { cn } from '@/utils/utils'

interface Props {
  pageCount: number
  pagination: PaginationState
  isPrevDisabled?: boolean
  isNextDisabled?: boolean
  setPagination: (pg: PaginationState) => void
}

export const Pagination: React.FC<Props> = ({
  pageCount,
  pagination,
  isNextDisabled,
  isPrevDisabled,
  setPagination,
}) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
      containerClassName="flex items-center gap-x-0.5"
      activeLinkClassName={buttonVariants({
        variant: 'outline',
        size: 'sm',
      })}
      pageLinkClassName={buttonVariants({ variant: 'ghost', size: 'sm' })}
      forcePage={!pageCount ? undefined : pagination.pageIndex}
      onPageChange={(selectedPage) => {
        setPagination({
          pageIndex: selectedPage.selected,
          pageSize: pagination.pageSize,
        })
      }}
      breakLabel={
        <span
          aria-hidden
          className={cn('flex h-9 w-9 items-center justify-center')}
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">More pages</span>
        </span>
      }
      previousLabel={
        <Button
          size="sm"
          variant="ghost"
          className={cn('gap-1 pr-2.5')}
          aria-label="Go to previous page"
          disabled={isPrevDisabled}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
      }
      nextLabel={
        <Button
          size="sm"
          variant="ghost"
          className={cn('gap-1 pr-2.5')}
          aria-label="Go to next page"
          disabled={isNextDisabled}
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      }
    />
  )
}
