import { LucideIcon } from 'lucide-react'

export interface IRoute {
  path: string
  name: string
  Icon: LucideIcon
  sub?: IRoute[]
}
