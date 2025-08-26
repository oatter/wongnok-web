import axios from 'axios'
import { getServerSession } from 'next-auth'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_PATH,
})

api.interceptors.request.use(async (config) => {
  const session = await getServerSession()
  config.headers.Authorization = `Bearer ${session?.accessToken || ''}`
  return config
})
