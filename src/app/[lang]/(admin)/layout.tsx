'use client'
import AdminNav from '@/components/custom/admin/shared/Nav'
import { useState, type ReactElement } from 'react'
import ThemeProviderClient from "@/components/shared/theme-provider";
import dynamic from 'next/dynamic'

const AdminSideBar = dynamic(()=> import('@/components/custom/admin/shared/SideBar'),{ssr: false})

const AdminLayout = ({
  params: { lang },
  children,
}: {
  params: { lang: string }
  children: ReactElement
}) => {
  const [toggled, setToggled] = useState(false)
  return (
    <ThemeProviderClient
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
    <div className="flex">
      <AdminSideBar toggled={toggled} setToggled={setToggled} />
      <main className="w-full">
        <AdminNav toggled={toggled} setToggled={setToggled} />
        {children}
      </main>
    </div>
    </ThemeProviderClient>
  )
}
export default AdminLayout
