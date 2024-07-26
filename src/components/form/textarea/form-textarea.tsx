import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form/form'
import { Textarea } from '@/components/ui/textarea/textarea'

type TFormTextArea = typeof FormField
type TFormTextAreaProps = React.ComponentProps<TFormTextArea> & {
  label: string
  placeholder: string
  description?: string
}

export const FormTextArea = ({
  label,
  placeholder,
  description,
  ...args
}: TFormTextAreaProps) => {
  return (
    <FormField
      {...args}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
