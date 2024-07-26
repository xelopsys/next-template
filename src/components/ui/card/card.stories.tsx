import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card/card'

const meta = {
  title: 'ui/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const Component = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          deserunt est laborum, vel distinctio vitae. Voluptatibus, sint veniam.
          Voluptas, quod.
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Cancel</Button>
      </CardFooter>
    </Card>
  )
}

export const Template: Story = {
  render: Component,
}
