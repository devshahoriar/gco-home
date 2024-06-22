'use client'
import Nav from '@/components/shared/Nav'
import { I18nProviderClient } from '@/locales/client'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import Marquee from 'react-fast-marquee'

const ThemeProviderClient = dynamic(
  () => import('@/components/shared/theme-provider'),
  {
    ssr: false,
  }
)

const SubLayout = ({
  params: { lang },
  children,
}: {
  params: { lang: string }
  children: ReactElement
}) => {
  return (
    <ThemeProviderClient
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProviderClient locale={lang}>
        <Marquee
          className="text-red-500 container bg-red-50 dark:bg-opacity-10"
          pauseOnHover
          autoFill
        >
          any notice here -
        </Marquee>
        <Nav />
        <main>{children}</main>
      </I18nProviderClient>
    </ThemeProviderClient>
  )
}

export default SubLayout
