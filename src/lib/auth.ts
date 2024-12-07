import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import db from '@/lib/db'
import { APP_URL } from './utils'

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'mysql',
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  user: {
    additionalFields: {
      type: {
        type: 'string',
        defaultValue: 'USER',
        required: true,
        fieldName: 'type',
      },
    },
  },
  session: {
    cookieCache: {
      enabled: true,
    },
  },
  advanced: {
    cookiePrefix: 'token',
  },
  baseURL: APP_URL
})
