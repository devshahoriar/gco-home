import React from 'react'
import Logo from '../custom/Logo'
import DesktopNav from '../custom/Navigation/DesktopNav'
import dynamic from 'next/dynamic'

const MoNav = dynamic(() => import('../custom/Navigation/MobileNav'),{
  ssr: false
})

const Nav = () => {
  return (
    <nav className="container flex items-center justify-between md:mt-5">
      <Logo />
      <DesktopNav />
      <MoNav />
    </nav>
  )
}

export default Nav
