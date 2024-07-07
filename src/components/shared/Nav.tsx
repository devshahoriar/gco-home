import MobileNav from '../custom/Navigation/MobileNav'
import DesktopNav from '../custom/Navigation/DesktopNav'

const Nav = () => {
  return (
    <section className='bg-purple-700 md:bg-transparent'>
      <MobileNav />
      <DesktopNav />
    </section>
  )
}

export default Nav
