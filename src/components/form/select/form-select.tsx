import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select/select'

type TSelect = {
  label: string
  value: string
}
type TFormSelect = typeof FormField
type TFormSelectProps = React.ComponentProps<TFormSelect> & {
  label: string
  placeholder: string
  options: TSelect[]
  description?: string
}

export const FormSelect = ({
  label,
  options,
  placeholder,
  description,
  ...args
}: TFormSelectProps) => {
  return (
    <FormField
      {...args}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
