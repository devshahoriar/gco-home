import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const APP_URL = process.env.NODE_ENV === 'production' ? "https://globalcommunityorganization.org" : "http://localhost:3000"