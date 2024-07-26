import '../src/styles/globals.css'
import type { Preview } from '@storybook/react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import * as React from 'react'

export const globalTypes = {
  backgroundColor: {
    name: 'Background color',
    description: 'Background color for components',
    defaultValue: '#ffffff',
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'sun',
      items: [
        {
          value: 'light',
          title: 'Light',
          icon: 'sun',
        },
        {
          value: 'dark',
          title: 'Dark',
          icon: 'moon',
        },
        {
          value: 'system',
          title: 'System',
          icon: 'circlehollow',
        },
      ],
    },
  },
}

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: ['ui', 'app'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const { setTheme } = useTheme()
      React.useEffect(() => {
        setTheme(context.globals.theme)
        window.localStorage.setItem('theme', context.globals.theme)
      }, [context.globals.theme])
      return (
        <NextThemesProvider
          enableSystem
          attribute="class"
          disableTransitionOnChange
          forcedTheme={
            context.globals.theme as ThemeProviderProps['forcedTheme']
          }
          defaultTheme={
            context.globals.theme as ThemeProviderProps['defaultTheme']
          }
        >
          <Story />
        </NextThemesProvider>
      )
    },
  ],
}

export default preview
