'use client'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Menu as MenuBar, X } from 'lucide-react'
import MenuData from './Data'
import Logo from '../Logo'
import Link from 'next/link'
import '@/styles/mobileNav.css'

const MobileNav = () => {
  const [toggled, setToggled] = useState(false)
  const [subOpen, setSubOpen] = useState('')
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
