/* eslint-disable @next/next/no-img-element */
'use client'

import Logo from '@/components/shared/Logo'
import { cn } from '@/lib/utils'
import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'

const DesktopNav = () => {
  return (
    <nav className="md:block container hidden py-1">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center ">
          <Logo className="w-[150px]" />
          <div className="flex flex-row gap-5 ">
            <NavItem path="/" title="Home" />

            <NavItem path="#" title="About Us">
              <div className="flex justify-between">
                <div>
                  <NavListItem path="/about" title="Our Organization">
                    <LinkItem path="/about#about" title="About GCO" />
                    <LinkItem path="/about#mission" title="Mission vision" />
                    <LinkItem path="/about#histry" title="History of gco" />
                  </NavListItem>
                  <div className="mt-4" />
                  <NavListItem className="" path="/about/team" title="Our Team">
                    <LinkItem
                      path="/about/team#BOARD OF DIRECTOR"
                      title="BOARD OF DIRECTOR"
                    />
                    <LinkItem
                      path="/about/team#EXECUTIVE MEMBER"
                      title="EXECUTIVE MEMBER"
                    />
                    <LinkItem
                      path="/about/team#ADVISER COUNCIL"
                      title="ADVISER COUNCIL"
                    />
                    <LinkItem
                      path="/about/team#GCO STAFF"
                      title="GCO STAFF"
                    />
                  </NavListItem>
                </div>

                <NavListItem path="#" title="our strength">
                  <LinkItem path="#" title="tagi volunteer" />
                  <LinkItem path="#" title="tagi foundation" />
                  <LinkItem path="#" title="tagi research center" />
                  <LinkItem path="#" title="tagi enterprise" />
                  <LinkItem path="#" title="global nation" />
                  <LinkItem path="#" title="gco Nursery" />
                  <LinkItem path="#" title="treelanching" />
                </NavListItem>
                <NavListItem path="#" title="Our Impact">
                  <LinkItem path="/api/report2023" title="annual report 2023" />
                </NavListItem>
                <ImageBox
                  linkTitle="Learn More"
                  title="We make it simple for anyone to plant trees, and together we can make an incredible impact. "
                  src="https://onetreeplanted.org/cdn/shop/files/Our_Vision-megamenu_images_4500x.webp?v=1674767633"
                />
              </div>
            </NavItem>
            <NavItem path="#" title="GCO Wing">
              <div className="flex justify-between">
                <div>
                  <NavListItem path="/about" title="GCO Wing">
                    <LinkItem path="/about/videos" title="Vidios" />
                    <LinkItem path="/about/photo-gallery" title="Gallary" />
                  </NavListItem>
                </div>

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
              </div>
            </NavItem>
            <NavItem path="#" title="Get Involved">
              <div className="flex justify-between">
                <NavListItem path="#" title="Businesses">
                  <LinkItem path="#" title="Become A Partner" />
                  <LinkItem path="#" title="Partners" />
                  <LinkItem path="#" title="Cryptocurrency" />
                  <LinkItem path="#" title="Sports Sustainability" />
                </NavListItem>
                <NavListItem path="#" title="Individuals">
                  <LinkItem path="#" title="Monthly Giving" />
                  <LinkItem path="#" title="Planned Giving" />
                  <LinkItem path="#" title="Become A Tree Ambassador" />
                  <LinkItem path="#" title="Teachers & Parents" />
                </NavListItem>
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
              </div>
            </NavItem>
            <NavItem path="#" title="What we do">
              <div className="flex justify-between">
                <div className="flex flex-col gap-5">
                  <NavListItem path="/what-we-do" title="Climate action">
                    <LinkItem
                      path="/what-we-do"
                      title="One tree for one child"
                    />
                    <LinkItem
                      path="/what-we-do"
                      title="save life from thunderstorms with plants"
                    />
                    <LinkItem
                      path="/what-we-do"
                      title="sponsor a tree for future child in Bangladesh"
                    />
                    <LinkItem
                      path="/what-we-do"
                      title="Disaster Resilience and Relief Programs"
                    />
                  </NavListItem>

                  <NavListItem path="/what-we-do" title="health">
                    <LinkItem
                      path="/what-we-do"
                      title="Maternal and Child Health in Bangladesh Slums"
                    />
                    <LinkItem
                      path="/what-we-do"
                      title="Maternal & Child Nutrition in Char Land, Bangladesh"
                    />
                  </NavListItem>
                </div>
                <div className="flex flex-col gap-5">
                  <NavListItem path="/what-we-do" title="Food Security">
                    <LinkItem
                      path="/what-we-do"
                      title="Addressing Hunger Among Bangladesh's Elderly"
                    />
                    <LinkItem
                      path="/what-we-do"
                      title="Abalamban – Self-Reliance"
                    />
                    <LinkItem
                      path="/what-we-do"
                      title="Cluster Village Program"
                    />
                  </NavListItem>

                  <NavListItem path="/what-we-do" title="Human Rights">
                    <LinkItem
                      path="/what-we-do"
                      title="skill development program"
                    />
                  </NavListItem>
                  <NavListItem path="/what-we-do" title="our events">
                    <LinkItem
                      path="/what-we-do"
                      title="skill development program"
                    />
                  </NavListItem>
                </div>

                <div className="flex flex-col gap-5">
                  <NavListItem path="/what-we-do" title="campaigns">
                    <LinkItem
                      path="/what-we-do"
                      title="Nutrition and Health Awareness Campaigns"
                    />
                    <LinkItem
                      path="/what-we-do"
                      title="Hygiene and Sanitation Awareness Campaigns"
                    />
                    <LinkItem
                      path="/what-we-do"
                      title="Mobile Campaigns for Health, Hygiene, and Social Awareness"
                    />
                  </NavListItem>

                  <NavListItem path="/what-we-do" title="training">
                    <LinkItem path="/what-we-do" title="ICT training program" />
                  </NavListItem>
                </div>
                {/* <div className="flex flex-col gap-10">
                  <NavListItem path="#" title="Education">
                    <LinkItem path="#" title="Projects" />
                    <LinkItem path="#" title="Urban Forestry" />
                  </NavListItem>
                  <NavListItem path="#" title="Resources">
                    <LinkItem path="#" title="Videos" />
                    <LinkItem path="#" title="Photos" />
                    <LinkItem path="#" title="SdGS" />
                    <LinkItem path="#" title="Maps" />
                  </NavListItem>
                </div>
                <ImageBox
                  linkTitle="Learn More"
                  title="Read about stories from the field, interesting facts about trees and get your healthy dose of nature. "
                  src="https://onetreeplanted.org/cdn/shop/files/Our-Blog-megamenu-images_4000x.webp?v=1676321660"
                />
                <ImageBox
                  linkTitle="Learn More"
                  title="Comprised of lesson plans, learning modules, resources, and activities, our T.R.E.E.S. School Program is the perfect addition to your curriculum. "
                  src="https://onetreeplanted.org/cdn/shop/files/EE_megamenu_images_4500x.webp?v=1674843679"
                /> */}
              </div>
            </NavItem>
            <NavItem path="#" title="Where we do">
              <div className="flex justify-between">
                <NavListItem path="#" title="">
                  <LinkItem path="#" title="Bangladesh" />
                  <LinkItem path="#" title="Zimbabwe" />
                  <LinkItem path="#" title="Uganda" />
                </NavListItem>
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
              </div>
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
        {children && <ChevronDown className="size-4" />}
      </Link>
      {children && (
        <div className="absolute top-[80%]  bg-opacity-80 w-screen left-0 desktopLinkContent opacity-0 z-40 pointer-events-none transition-opacity duration-300 ease-in-out">
          <div className="bg-black bg-opacity-80 mt-[12px] h-[500px] overflow-x-auto">
            <div className="container px-10 pt-8 ">{children}</div>
          </div>
        </div>
      )}
    </div>
  )
}

const NavListItem = ({
  children,
  title,
  path,
  className,
}: {
  children?: React.ReactNode
  title: String
  path: string
  className?: string
}) => {
  return (
    <div>
      <Link
        className={cn(
          'text-xl underline underline-offset-[20px] capitalize  opacity-80 hover:opacity-100 hover:drop-shadow-lg hover:shadow-white',
          className
        )}
        href={path}
      >
        {title}
      </Link>
      {children && (
        <div className="flex flex-col mt-10 gap-5 ml-5">{children}</div>
      )}
    </div>
  )
}

const LinkItem = ({ path, title }: { path: string; title: string }) => {
  return (
    <Link className="opacity-80 hover:opacity-100 capitalize" href={path}>
      {title}
    </Link>
  )
}

const ImageBox = ({
  title,
  src,
  path = '#',
  linkTitle = 'this is link title',
}: any) => {
  return (
    <div className="ml-5 mt-3 w-[24vw] max-w-[300px]">
      <div className="aspect-square ">
        <img
          className="h-full w-full object-cover"
          width={500}
          height={500}
          src={src}
          alt={title}
        />
      </div>
      <h1 className="text-sm mt-3">{title}</h1>
      <Link className="text-sm underline" href={path}>
        {linkTitle}
      </Link>
    </div>
  )
}

export default DesktopNav
