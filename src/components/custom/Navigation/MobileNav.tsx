'use client'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Menu as MenuBar, Moon, Sun, X } from 'lucide-react'
import MenuData from './Data'
import Logo from '../Logo'
import Link from 'next/link'
import '@/styles/mobileNav.css'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const MobileNav = () => {
  const [toggled, setToggled] = useState(false)
  const [subOpen, setSubOpen] = useState('')
  const { setTheme, theme } = useTheme()

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="block lg:hidden relative">
      {toggled ? (
        <button
          className="fixed !z-[1000] top-6 right-5 text-main hover:bg-main p-2 hover:text-white rounded-full transition-colors duration-300"
          onClick={() => setToggled(!toggled)}
        >
          <X />
        </button>
      ) : (
        <button
          className="mr-4  !bg-main p-2 text-white rounded-full transition-colors duration-300"
          onClick={() => setToggled(!toggled)}
        >
          <MenuBar />
        </button>
      )}
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <div className="p-2">
          <Logo />
        </div>
        <div className="mx-5 mb-1">
          <div className="flex items-center">
            <p>Theme: </p>
            <Button
              onClick={handleTheme}
              className="text-black dark:text-white flex items-center"
              variant="link"
              size="default"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
        <div className='border border-main  mb-5'/>
        <Menu>
          {MenuData.map((item) => {
            if (item?.submenu?.length) {
              return (
                <SubMenu
                  key={item.id}
                  label={item.title}
                  onClick={() => setSubOpen(item.title)}
                  open={subOpen === item.title}
                >
                  {item?.submenu?.map((subItm) => (
                    <MenuItem
                      component={<Link href={subItm.url} />}
                      key={subItm.id}
                    >
                      {' '}
                      {subItm.title}{' '}
                    </MenuItem>
                  ))}
                </SubMenu>
              )
            }

            return (
              <MenuItem component={<Link href={item.url} />} key={item.id}>
                {item.title}
              </MenuItem>
            )
          })}
        </Menu>
      </Sidebar>
    </div>
  )
}
export default MobileNav
