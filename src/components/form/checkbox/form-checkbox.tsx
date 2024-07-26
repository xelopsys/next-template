import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form/form'
import { Checkbox } from '@/components/ui/checkbox/checkbox'

type TFormCheckbox = typeof FormField
type TFormCheckboxProps = React.ComponentProps<TFormCheckbox> & {
  label: string
  description?: string
}

export const FormCheckbox = ({
  label,
  description,
  ...args
}: TFormCheckboxProps) => {
  return (
    <FormField
      {...args}
      render={({ field }) => (
        <FormItem className="flex flex-col items-start space-x-0 space-y-3">
          <div className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>{label}</FormLabel>
              {description && <FormDescription>{description}</FormDescription>}
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
