import { api } from '@/lib/axios-instance'
import { authRoutes } from '@/requests/api-routes'

interface Params {
  body: {
    refreshToken: string
  }
}

interface Response {
  token: {
    accessToken: string
    refreshToken: string
  }
}

export const refreshToken = async ({ body }: Params) => {
  const { data } = await api.post<Response>(authRoutes.refresh, body)

  return data
}
