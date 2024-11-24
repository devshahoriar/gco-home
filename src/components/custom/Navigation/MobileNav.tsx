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
      <div className="flex fixed top-0 left-0 justify-between items-center text-white h-10 w-full px-[5px] bg-bgMain !z-50">
        <button
          onClick={() => {
            setMobileNav((r) => !r)
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
        >
          {mobileNav ? <X /> : <Menu />}
        </button>
        <Logo className="w-[100px]" />
        <div className="flex items-center gap-2">
          <button>
            <Search className="size-4" />
          </button>
          <button className="flex gap-1 items-center text-xs bg-white  text-bgMain hover:bg-bgMain hover:text-white h-10 px-2">
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
                <button className="bg-white text-black uppercase font-bold w-full  rounded-[2px] py-1">
                  Donate
                </button>
              </div>
              <div className="flex mt-3 w-full flex-col gap-5 text-stone-300">
                <MobileNavItem title="Tree plant">
                  <Child path="#" title="By region">
                    <LinkItem path="#" title="North America" />
                    <LinkItem path="#" title="Latin America" />
                    <LinkItem path="#" title="Africa" />
                    <LinkItem path="#" title="Asia" />
                    <LinkItem path="#" title="Europe" />
                    <LinkItem path="#" title="The pacific" />
                    <LinkItem path="#" title="Plant trees for impact" />
                  </Child>
                  <Child path="#" title="By impact">
                    <LinkItem path="#" title="Urban forestry" />
                    <LinkItem path="#" title="Monarch" />
                    <LinkItem path="#" title="Forest fire found" />
                    <LinkItem path="#" title="Mangrovies" />
                    <LinkItem path="#" title="Watersheds" />
                    <LinkItem path="#" title="Woman" />
                  </Child>
                  <Child path="#" title="For others">
                    <LinkItem path="#" title="gift trees" />
                    <LinkItem path="#" title="gift trees is memory" />
                    <LinkItem path="#" title="How to leave a legacy" />
                  </Child>
                  <ImageBox
                    linkTitle="Plant Trees"
                    title="Plant trees for impact and help restore ecosystems around the world! "
                    src="https://onetreeplanted.org/cdn/shop/files/plant-trees-for-impact-main-img_5000x.jpg?v=1709925481"
                  />
                </MobileNavItem>
                <MobileNavItem title="About">
                  <Child path="/about" title="Our Organization">
                    <LinkItem
                      path="/about/our-missionvision"
                      title="Our Vision"
                    />
                    <LinkItem path="/about/history-of-gco" title="History" />
                    <LinkItem path="/about/videos" title="Vidios" />
                    <LinkItem path="/videos" title="Vidios" />
                  </Child>
                  <Child path="#" title="Our Team">
                    <LinkItem
                      path="/about/team/board-of-director"
                      title="Board Of Director"
                    />
                    <LinkItem
                      path="/about/team/adviser-council"
                      title="Adviser"
                    />

                    <LinkItem
                      path="/about/team/executive-member"
                      title="Exclusive Member"
                    />
                    <LinkItem
                      path="/about/team/staff-member"
                      title="Staff Member"
                    />
                    <LinkItem
                      path="/about/team/tyagi-executive"
                      title="Tyagi Exclusive"
                    />
                  </Child>
                  <Child path="#" title="Our Impact">
                    <LinkItem path="#" title="2023 recap" />
                    <LinkItem path="#" title="2022 recap" />
                    <LinkItem path="#" title="2021 recap" />
                    <LinkItem path="#" title="2020 recap" />
                    <LinkItem path="#" title="2019 recap" />
                  </Child>
                  <ImageBox
                    linkTitle="Visit our Newsroom"
                    title="Stay up to date on major announcements, exciting collaborations, and more."
                    src="https://onetreeplanted.org/cdn/shop/files/newsroom-promo_5000x.jpg?v=1690489113"
                  />
                  <ImageBox
                    linkTitle="Learn More"
                    title="We make it simple for anyone to plant trees, and together we can make an incredible impact. "
                    src="https://onetreeplanted.org/cdn/shop/files/Our_Vision-megamenu_images_4500x.webp?v=1674767633"
                  />
                </MobileNavItem>
                <MobileNavItem title="Get involbed">
                  <Child path="#" title="Businesses">
                    <LinkItem path="#" title="Become A Partner" />
                    <LinkItem path="#" title="Partners" />
                    <LinkItem path="#" title="Cryptocurrency" />
                    <LinkItem path="#" title="Sports Sustainability" />
                  </Child>
                  <Child path="#" title="Individuals">
                    <LinkItem path="#" title="Monthly Giving" />
                    <LinkItem path="#" title="Planned Giving" />
                    <LinkItem path="#" title="Become A Tree Ambassador" />
                    <LinkItem path="#" title="Teachers & Parents" />
                  </Child>
                  <ImageBox
                    linkTitle="Learn More"
                    title="Become a business partner to improve your company’s sustainability initiatives and make an impact. "
                    src="https://onetreeplanted.org/cdn/shop/files/Business_Sustainability-megamenu_images_4500x.webp?v=1674767903"
                  />
                  <ImageBox
                    linkTitle="Learn More"
                    title="See how your support and leadership can help us fund reforestation efforts across the globe. "
                    src="https://onetreeplanted.org/cdn/shop/files/philanthropic-giving_4500x.jpg?v=1689881074"
                  />
                </MobileNavItem>
                <MobileNavItem title="Learn">
                  <Child path="#" title="About Trees">
                    <LinkItem path="#" title="Why Trees?" />
                    <LinkItem path="#" title="Tree Species" />
                    <LinkItem path="#" title="Tree Facta" />
                    <div className="border-b w-[100px]" />
                    <LinkItem path="#" title="Reforestation" />
                    <LinkItem path="#" title="Deforestation" />
                    <LinkItem path="#" title="Climate Change" />
                  </Child>
                  <Child path="#" title="Our Blog">
                    <LinkItem path="#" title="Project Stories" />
                    <LinkItem path="#" title="Partner Stories" />
                  </Child>

                  <Child path="#" title="Education">
                    <LinkItem path="#" title="Projects" />
                    <LinkItem path="#" title="Urban Forestry" />
                  </Child>
                  <Child path="#" title="Resources">
                    <LinkItem path="#" title="Videos" />
                    <LinkItem path="#" title="Photos" />
                    <LinkItem path="#" title="SdGS" />
                    <LinkItem path="#" title="Maps" />
                  </Child>

                  <ImageBox
                    linkTitle="Learn More"
                    title="Read about stories from the field, interesting facts about trees and get your healthy dose of nature. "
                    src="https://onetreeplanted.org/cdn/shop/files/Our-Blog-megamenu-images_4000x.webp?v=1676321660"
                  />
                  <ImageBox
                    linkTitle="Learn More"
                    title="Comprised of lesson plans, learning modules, resources, and activities, our T.R.E.E.S. School Program is the perfect addition to your curriculum. "
                    src="https://onetreeplanted.org/cdn/shop/files/EE_megamenu_images_4500x.webp?v=1674843679"
                  />
                </MobileNavItem>
                <MobileNavItem title="Shop">
                  <Child path="#" title="By Collection">
                    <LinkItem path="#" title="Apparel" />
                    <LinkItem path="#" title="Accessories" />
                    <LinkItem path="#" title="Personalized Greeting Cards" />
                    <LinkItem path="#" title="Tree Kits" />
                  </Child>
                  <ImageBox
                    linkTitle="Shop now"
                    title="Our fan-favorite Reforestation T-Shirt. Wear it with pride to show your support of reforesting our planet, one tree at a time. "
                    src="https://onetreeplanted.org/cdn/shop/files/Mega_Menu_Image_2_1_a5088b7a-fa61-4d0b-9c6a-8a32dfb8adfd_4500x.jpg?v=1699972315"
                  />
                  <ImageBox
                    linkTitle="Gift a tree"
                    title="Give the gift that lasts a lifetime! Choose an image, write your personalized message and select a delivery date to gift a tree. "
                    src="https://onetreeplanted.org/cdn/shop/files/gift-trees-mega-menu_2x_cb75d577-44b5-4b97-9796-04c5f4d3a921_2500x.jpg?v=1681420564"
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
