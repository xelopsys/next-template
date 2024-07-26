import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer/drawer'

const meta = {
  title: 'ui/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    shouldScaleBackground: {
      control: 'boolean',
    },
    dismissible: {
      control: 'boolean',
    },
    direction: {
      control: 'select',
      description: 'The direction from which the drawer animation will appear.',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  args: {
    shouldScaleBackground: true,
    direction: 'bottom',
    dismissible: true,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  return (
    <div className="flex items-center space-x-2">
      <Drawer {...args}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export const Template: Story = {
  render: Component,
}
