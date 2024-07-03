'use client'
import { TreePalm, Coins, Facebook, Instagram, Youtube } from 'lucide-react'
import ShinyButton from '../ui/aimate/shiny-button'
import ShimmerButton from '../ui/aimate/shimmer-button'
import SocialIcon from './SocialIcon'
import { useRouter } from 'next/navigation'

const TopBar = () => {
  const router = useRouter()
  return (
    <div className="container hidden md:flex justify-between my-3 px-10 items-center">
      <div>
        <ShimmerButton className="flex gap-2 font-semibold items-center  !text-white  px-3 py-1 rounded-2xl">
          Treelanching
          <TreePalm className="size-5 text-main" />
        </ShimmerButton>
      </div>
      <div className="hidden xl:block">
        <p className="select-all text-sm">
          hello@globalcommunityorganization.org
        </p>
      </div>
      <div className="flex gap-3">
        <SocialIcon className="bg-blue-600 text-white">
          <Facebook />
        </SocialIcon>
        <SocialIcon className="bg-red-500 text-white">
          <Instagram />
        </SocialIcon>
        <SocialIcon className="bg-red-600 text-white">
          <Youtube />
        </SocialIcon>
      </div>
      <div>
        <ShinyButton onClick={() => router.push('/donation')}>
          <div className="flex gap-2">
            <p>donation</p>
            <Coins className="size-5 text-main2" />
          </div>
        </ShinyButton>
      </div>
    </div>
  )
}
export default TopBar
