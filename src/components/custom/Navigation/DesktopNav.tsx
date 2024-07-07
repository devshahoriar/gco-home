/* eslint-disable @next/next/no-img-element */
'use client'

import Logo from '@/components/shared/Logo'
import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'

const DesktopNav = () => {
  return (
    <nav className="md:block container hidden py-1">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center ">
          <Logo className="w-[150px]" />
          <div className="flex flex-row gap-5 ">
            <NavItem path="#" title="This is link 1">
              <div className="flex justify-between">
                <NavListItem path="#" title="This is link 1">
                  <LinkItem path="#" title="Link 1" />
                  <LinkItem path="#" title="Link 1" />
                  <LinkItem path="#" title="Link 1" />
                  <LinkItem path="#" title="Link 1" />
                </NavListItem>
                <NavListItem path="#" title="This is link 1">
                  Shuvo
                </NavListItem>
                <NavListItem path="#" title="This is link 1">
                  Shuvo
                </NavListItem>
                <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
              </div>
            </NavItem>
            <NavItem path="#" title="This is link 1">
              Shuvo2
            </NavItem>
          </div>
        </div>
        <div>
          <div className="flex border py-2 px-3 items-center rounded-[2px]">
            <input
              className="w-[150px] outline-none border-none appearance-none bg-transparent placeholder:text-sm"
              placeholder="Search..."
              type="text"
            />
            <Search className="size-4" />
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavItem = ({
  children,
  title,
  path,
}: {
  children?: React.ReactNode
  title: String
  path: string
}) => {
  return (
    <div className="desktopLink">
      <Link
        className="flex gap-1 items-center uppercase h-12 border-b border-b-transparent hover:border-b-white z-50 relative opacity-90 hover:opacity-100 font-light"
        href={path}
      >
        {title}
        <ChevronDown className="size-4" />
      </Link>
      <div className="absolute top-[80%]  bg-opacity-80 w-screen left-0 desktopLinkContent opacity-0 z-40 pointer-events-none transition-opacity duration-300 ease-in-out">
        <div className="bg-black bg-opacity-80 mt-[12px] h-[500px]">
          <div className="container px-10 pt-8">{children}</div>
        </div>
      </div>
    </div>
  )
}

const NavListItem = ({
  children,
  title,
  path,
}: {
  children: React.ReactNode
  title: String
  path: string
}) => {
  return (
    <div>
      <Link className='text-xl underline underline-offset-[20px] opacity-80 hover:opacity-100 hover:drop-shadow-lg hover:shadow-white' href={path}>{title}</Link>
      <div className='flex flex-col mt-10 gap-5 ml-5'>{children}</div>
    </div>
  )
}

const LinkItem = ({ path, title }: { path: string; title: string }) => {
  return <Link className='opacity-80 hover:opacity-100' href={path}>{title}</Link>
}

const ImageBox = ({
  title,
  src,
  path = '#',
  linkTitle = 'this is link title',
}: any) => {
  return (
    <div className="ml-5 mt-3 w-[24vw]">
      <div className='aspect-square '>
        <img
          className="h-full w-full object-cover"
          width={500}
          height={500}
          src={src}
          alt={title}
        />
      </div>
      <h1 className="text-sm">{title}</h1>
      <Link className="text-sm underline" href={path}>
        {linkTitle}
      </Link>
    </div>
  )
}

export default DesktopNav
