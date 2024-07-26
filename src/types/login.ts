export interface LoginResponse {
  user: {
    id: string
    name: string
    email: string
    createdAt: string
    updatedAt: string
    accessToken: string
    refreshToken: string
    accessTokenExp: number
    error?: string
  }
  token: {
    accessToken: string
    refreshToken: string
  }
}
