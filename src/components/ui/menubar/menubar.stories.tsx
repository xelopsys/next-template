import type { Meta, StoryObj } from '@storybook/react'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar/menubar'

type MenubarType = typeof Menubar
type MenubarStory = React.ComponentProps<MenubarType> & {
  align: 'start' | 'center' | 'end'
  sideOffset: number
}

const meta = {
  title: 'ui/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    sideOffset: {
      control: 'number',
    },
  },
  args: {
    align: 'start',
    sideOffset: 5,
  },
  tags: ['autodocs'],
} satisfies Meta<MenubarStory>

export default meta
type Story = StoryObj<MenubarStory>

const Component = (args: MenubarStory) => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent {...args}>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const Template: Story = {
  render: Component,
}
