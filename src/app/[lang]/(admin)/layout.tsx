'use client'
import AdminNav from '@/components/custom/admin/shared/Nav'
import AdminSideBar from '@/components/custom/admin/shared/SideBar'
import { useState, type ReactElement } from 'react'
import ThemeProviderClient from "@/components/shared/theme-provider";

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
