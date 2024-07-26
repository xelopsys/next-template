import type { Meta, StoryObj } from '@storybook/react'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu/dropdown-menu'

type BreadcrumbType = typeof Breadcrumb
type BreadcrumbStory = React.ComponentProps<BreadcrumbType> & {
  separator: string
}

const meta = {
  title: 'ui/Breadcrumb',
  component: Breadcrumb as React.FC<BreadcrumbStory>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<BreadcrumbStory>

export default meta
type Story = StoryObj<BreadcrumbStory>

const Component = ({ separator }: BreadcrumbStory) => {
  const breadseparator = separator ? (
    <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
  ) : (
    <BreadcrumbSeparator />
  )
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadseparator}
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        {breadseparator}
        <BreadcrumbItem>
          <BreadcrumbLink>Components</BreadcrumbLink>
        </BreadcrumbItem>
        {breadseparator}
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export const Template: Story = {
  args: {
    separator: '/',
  },
  render: Component,
}
