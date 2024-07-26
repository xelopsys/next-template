import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form/form'
import { Input } from '@/components/form/input'

type TFormInput = typeof FormField
type TFormInputProps = React.ComponentProps<TFormInput> & {
  label: string
  placeholder: string
  description?: string
}

export const FormInput = ({
  label,
  placeholder,
  description,
  ...args
}: TFormInputProps) => {
  return (
    <FormField
      {...args}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
