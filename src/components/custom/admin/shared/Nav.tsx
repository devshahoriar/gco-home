import Logo from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const AdminNav = ({ toggled, setToggled }: any) => {
  return (
    <nav className="h-[60px] border-b shadow-md w-full flex justify-between px-2 items-center">
      <div>
        <h1 className="font-bold">GCO Admin</h1>
      </div>
      <div className="md:hidden">
        <Button variant="outline" onClick={() => setToggled((r: any) => !r)}>
          <Menu />
        </Button>
      </div>
    </nav>
  )
}
export default AdminNav
