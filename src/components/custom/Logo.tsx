import Link from 'next/link'
import logo from '../../../public/logo.png'
import Image from 'next/image'
import { cn } from '@/lib/utils'
const Logo = ({ className }: { className?: String }) => {
  return (
    <Link href="/" className={cn('w-[200px] xl:w-[300px] block', className)}>
      <Image src={logo} alt="logo" width={300} height={300} className='h-full w-full object-cover' />
    </Link>
  )
}
export default Logo
