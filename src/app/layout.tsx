import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '../styles/globals.css'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: 'Global Community Organization',
  description:
    'Global Community Organization · Mission · To develop healthy, standardized, improved living system and sustainable environment is the only goal.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressContentEditableWarning suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen  !bg-white dark:!bg-zinc-800 font-sans antialiased overflow-x-hidden',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
