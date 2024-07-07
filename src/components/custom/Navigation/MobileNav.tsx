/* eslint-disable @next/next/no-img-element */
'use client'

import Logo from '@/components/shared/Logo'
import { cn } from '@/lib/utils'
import { ChevronDown, Menu, Search, ShoppingBag, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNav = () => {
  const [mobileNav, setMobileNav] = useState(false)
  return (
    <nav className="md:hidden container flex justify-between items-center text-white h-10 relative">
      <div className="flex fixed top-0 left-0 justify-between items-center text-white h-10 w-full px-[5px] bg-purple-700 !z-50">
        <button onClick={() => setMobileNav((r) => !r)}>
          {mobileNav ? <X /> : <Menu />}
        </button>
        <Logo className="w-[100px]" />
        <div className="flex items-center gap-2">
          <button>
            <Search className="size-4" />
          </button>
          <button className="flex gap-1 items-center text-xs bg-red-600 h-10 px-2">
            <ShoppingBag className="size-4" />0
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
            initial={{
              opacity: 0,
            }}
            className="absolute top-full left-0 right-0 w-full bg-black bg-opacity-80 z-50 h-[calc(100vh-50px)] overflow-x-auto"
          >
            <div className="px-[20px] pb-10">
              <div className="flex justify-center mt-3">
                <button className="bg-pink-700 uppercase font-bold w-full  rounded-[2px] py-1">
                  Donate
                </button>
              </div>
              <div className="flex mt-3 w-full flex-col gap-5 text-stone-300">
                <MobileNavItem title="Tree plant">
                  <Child title="by region">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <Child title="by Impact">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <Child title="For others">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </MobileNavItem>
                <MobileNavItem title="About">
                  <Child title="Our organization">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <Child title="Our impact">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </MobileNavItem>
                <MobileNavItem title="Get involbed">
                  <Child title="Our organization">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <Child title="Our impact">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </MobileNavItem>
                <MobileNavItem title="Learn">
                  <Child title="Our organization">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <Child title="Our impact">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </MobileNavItem>
                <MobileNavItem title="Shop">
                  <Child title="Our organization">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <Child title="Our impact">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LinkItem key={i} title={'link ' + i} path="#" />
                    ))}
                  </Child>
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <ImageBox
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </MobileNavItem>
                <LinkIndItem title="Contact" path="#" />
                <LinkIndItem title="Login" path="#" />
                <LinkIndItem title="018-2487-8880" path="#" />
                <LinkIndItem title="Newsleter" path="#" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const LinkIndItem = ({ path, title }: { path: string; title: string }) => {
  return (
    <Link
      className="font-normal w-[80%] hover:opacity-65 text-lg uppercase"
      href={path}
    >
      {title}
    </Link>
  )
}

const MobileNavItem = ({ children, title = 'link 1', path = '#' }: any) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col items-center gap-1 w-ful mt-2">
      <div className="flex justify-between w-full ">
        <Link
          className="font-normal w-[80%] hover:opacity-65 text-lg uppercase"
          href={path}
        >
          {title}
        </Link>
        <button
          onClick={() => setOpen((r) => !r)}
          className="flex items-center"
        >
          <ChevronDown
            className={cn(
              'size-4 opacity-80 transition-transform',
              open && 'rotate-180'
            )}
          />
        </button>
      </div>
      {open && children}
    </div>
  )
}

const Child = ({ children, title = 'asda', path = '#' }: any) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full px-5">
      <div className="flex justify-between w-full">
        <Link
          className="font-normal w-[80%] hover:opacity-65 text-base uppercase mt-4"
          href={path}
        >
          {title}
        </Link>
        <button
          onClick={() => setOpen((r) => !r)}
          className="flex items-center"
        >
          <ChevronDown
            className={cn(
              'size-4 opacity-80 transition-transform',
              open && 'rotate-180'
            )}
          />
        </button>
      </div>
      {open && <div className="flex flex-col gap-2 mt-3 ml-4">{children}</div>}
    </div>
  )
}

const LinkItem = ({
  title = 'Link 1',
  path = '#',
}: {
  title: string
  path: string
}) => {
  return <Link href={path}>{title}</Link>
}

const ImageBox = ({
  title,
  src,
  path = '#',
  linkTitle = 'this is link title',
}: any) => {
  return (
    <div className="ml-5 mt-3">
      <div>
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

export default MobileNav
