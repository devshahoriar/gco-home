import MobileNav from '../custom/Navigation/MobileNav'
import DesktopNav from '../custom/Navigation/DesktopNav'

const Nav = () => {
  return (
    <section className='bg-main2 md:bg-bgMain md:text-white relative'>
      <MobileNav />
      <DesktopNav />
    </section>
  )
}

export default Nav
