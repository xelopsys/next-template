import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form/form'
import { Button } from '@/components/ui/button/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover/popover'
import { cn } from '@/utils/utils'

type TSelect = {
  label: string
  value: string
}

type TFormCombobox = typeof FormField
type TFormComboboxProps = React.ComponentProps<TFormCombobox> & {
  label: string
  placeholder: string
  options: TSelect[]
  description?: string
  Icon?: typeof CaretSortIcon
}

export const FormCombobox = ({
  Icon,
  label,
  options,
  placeholder,
  description,
  ...args
}: TFormComboboxProps) => {
  return (
    <FormField
      {...args}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'w-full justify-between',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? options.find((item) => item.value === field.value)?.label
                    : placeholder}
                  {Icon && (
                    <Icon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  )}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full h-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search..." className="h-9" />
                <CommandEmpty>No item found.</CommandEmpty>
                <CommandGroup>
                  {options.map((item) => (
                    <CommandItem
                      value={item.label}
                      key={item.value}
                      onSelect={field.onChange}
                    >
                      {item.label}
                      <CheckIcon
                        className={cn(
                          'ml-auto h-4 w-4',
                          item.value === field.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
