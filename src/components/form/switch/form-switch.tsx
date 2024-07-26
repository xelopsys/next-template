import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/form/form'
import { Switch } from '@/components/ui/switch/switch'

type TFormSwitch = typeof FormField
type TFormSwitchProps = React.ComponentProps<TFormSwitch> & {
  label: string
  description?: string
}

export const FormSwitch = ({
  label,
  description,
  ...args
}: TFormSwitchProps) => {
  return (
    <FormField
      {...args}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between">
          <div className="space-y-0.5">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
