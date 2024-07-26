import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form/form'
import { Button } from '@/components/ui/button/button'
import { Calendar } from '@/components/ui/calendar/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover/popover'
import { cn } from '@/utils/utils'

type TFormDate = typeof FormField
type TFormDateProps = React.ComponentProps<TFormDate> & {
  label: string
  description?: string
  mode: 'single' | 'range' | 'multiple'
}

export const FormDate = ({
  label,
  description,
  mode,
  ...args
}: TFormDateProps) => {
  return (
    <FormField
      {...args}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date of birth</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[240px] pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>{label}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode={mode}
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
