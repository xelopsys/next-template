import { api } from '@/lib/axios-instance'
import { authRoutes } from '@/requests/api-routes'
import { LoginResponse } from '@/types/login'

interface Body {
  email: string
  password: string
}

export const login = async (body: Body) => {
  const { data } = await api.post<LoginResponse>(authRoutes.login, body)

  return data
}
