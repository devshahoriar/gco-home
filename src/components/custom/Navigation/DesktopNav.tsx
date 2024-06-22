'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import MenuData from './Data'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import ModeToggle from '@/components/shared/ThemToggole'

export default function NavigationMenuDemo() {
  return (
    <div className="hidden lg:flex items-center">
      <Menubar className="border-none shadow-none dark:bg-transparent ">
        {MenuData.map((item) => {
          if (item?.submenu?.length) {
            return (
              <MenubarMenu key={item.id}>
                <MenubarTrigger className="hover:!bg-black hover:!bg-opacity-5 !px-2 !py-1 !rounded-md">
                  {item.title}
                  <ChevronDown className="size-4" />
                </MenubarTrigger>
                <MenubarContent>
                  {item?.submenu?.map((subItm) => (
                    <MenubarItem key={subItm.id}>
                      <Link
                        className=""
                        href={subItm.url}
                      >
                        {subItm.title}
                      </Link>
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            )
          }

          return (
            <MenubarMenu key={item.id}>
              <Link
                className="hover:bg-black hover:bg-opacity-5 px-2 py-1 rounded-md"
                href={item.url}
              >
                {item.title}
              </Link>
            </MenubarMenu>
          )
        })}
      </Menubar>
      <ModeToggle />
    </div>
  )
}
