import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait<T>({ ms, data }: { ms: number; data: T }): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}
