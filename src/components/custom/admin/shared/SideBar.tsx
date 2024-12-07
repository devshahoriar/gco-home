'use client'
import Logo from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import '@/styles/adminSideBar.css'
import {
  ChevronLeft,
  Globe,
  Home,
  LogOut,
  Moon,
  Notebook,
  NotebookPen,
  Sun
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Sidebar } from 'react-pro-sidebar'

const AdminSideBar = ({ toggled, setToggled }: any) => {
  const path = usePathname()
  const router = useRouter()
  const { setTheme, themes, theme } = useTheme()

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
              <Home className="size-5" />
            </SideBarLinkButton>
            <SideBarLinkButton
              setToggled={setToggled}
              link="/admin/blogs"
              active={'/admin/blogs' === path}
            >
              {!collapsed && 'Blogs'}

              <Notebook className="size-5" />
            </SideBarLinkButton>
            {/* <SideBarLinkButton
              setToggled={setToggled}
              link="/admin/addblog"
              active={'/admin/addblog' === path}
            >
              {!collapsed && 'Add Blog'}

              <NotebookPen className="size-5" />
            </SideBarLinkButton> */}
            <Button
              variant="outline"
              className="w-full flex justify-center gap-4 items-center bg-red-500 text-white"
            >
              {!collapsed && 'Logout'}
              <LogOut className="size-4" />
            </Button>
          </div>
        </ScrollArea>
        <div className="px-2 space-y-2">
          <Button
            variant="outline"
            className="w-full flex justify-center gap-4 items-center"
            onClick={() => router.push('/')}
          >
            {!collapsed && 'Back to site'}
            <Globe className={cn('size-5')} />
          </Button>
          <Button
            variant="outline"
            className="w-full flex justify-center gap-4 items-center"
            onClick={() => setCollapsed(!collapsed)}
          >
            {!collapsed && 'Collaps'}
            <ChevronLeft
              className={cn(
                'size-5 transition-transform',
                collapsed && 'rotate-180'
              )}
            />
          </Button>
          <Button
            variant="outline"
            className="w-full flex justify-center gap-4 items-center"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {!collapsed && theme}
            {theme === 'light' ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
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
        !active && 'bg-zinc-600 dark:text-white'
      )}
    >
      {children}
    </Button>
  )
}

export default AdminSideBar
