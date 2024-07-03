'use client'
import Logo from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  ChevronLeft,
  LogOut,
  Notebook,
  NotebookPen,
  Warehouse,
} from 'lucide-react'
import { useState } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import '@/styles/adminSideBar.css'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const AdminSideBar = ({ toggled, setToggled }: any) => {
  const path = usePathname()

  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sidebar
      rootStyles={{
        height: '100vh',
      }}
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="md"
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute right-1 top-4  p-2 rounded-full flex dark:bg-black justify-center items-center hover:shadow-lg active:scale-95 bg-white"
      >
        <ChevronLeft />
      </button>
      <Logo className="xl:!w-[200px]" />
      <div className="mt-10 flex flex-col justify-between h-[calc(100vh-120px)] px-2">
        <ScrollArea>
          <div className="flex-col flex gap-2">
            <SideBarLinkButton
              setToggled={setToggled}
              link="/admin"
              active={'/admin' === path}
            >
              {!collapsed && 'Home'}
              <Warehouse className="size-5" />
            </SideBarLinkButton>
            <SideBarLinkButton
              setToggled={setToggled}
              link="/admin/blogs"
              active={'/admin/blogs' === path}
            >
              {!collapsed && 'Blogs'}

              <Notebook className="size-5" />
            </SideBarLinkButton>
            <SideBarLinkButton
              setToggled={setToggled}
              link="/admin/addblog"
              active={'/admin/addblog' === path}
            >
              {!collapsed && 'Add Blog'}

              <NotebookPen className="size-5" />
            </SideBarLinkButton>
          </div>
        </ScrollArea>
        <div className="px-2">
          <Button
            variant="outline"
            className="w-full flex justify-center gap-4 items-center"
          >
            {!collapsed && 'Logout'}
            <LogOut className="size-4" />
          </Button>
        </div>
      </div>
    </Sidebar>
  )
}

const SideBarLinkButton = ({ children, active, link, setToggled }: any) => {
  const navigation = useRouter()
  return (
    <Button
      onClick={() => {
        navigation.push(link)
        setToggled(false)
      }}
      className={cn(
        'flex items-center w-full gap-3 text',
        !active && 'bg-zinc-600'
      )}
    >
      {children}
    </Button>
  )
}

export default AdminSideBar
