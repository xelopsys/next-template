import { IRoute } from '@/types/common'
import { UserIcon, CogIcon } from 'lucide-react'

export const ROUTE_LOGIN = '/login'

export const routes: IRoute[] = [
  {
    path: '/user',
    name: 'User',
    Icon: UserIcon,
    sub: [
      {
        path: '/teams',
        name: 'User Teams',
        Icon: UserIcon,
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    Icon: CogIcon,
  },
]
