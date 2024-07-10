import { AnimatButton } from '@/components/ui/aimate/AnimateButton'
import AnimatedNumber from '@/components/ui/aimate/AnimatedNumber'
import BlurIn from '@/components/ui/aimate/blur-in'
import { BorderBeam } from '@/components/ui/aimate/border-beam'
import Meteors from '@/components/ui/aimate/meteors'
import ShinyButton from '@/components/ui/aimate/shiny-button'
import SiteButton from '@/components/ui/SiteButton'
import { Coins } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const ItemCard = ({
  title,
  description,
  image,
  progress = 20,
}: {
  title: string
  description: string
  image: string
  progress: number
}) => {
  return (
    <div className="relative rounded-md p-3 overflow-hidden border border-main border-opacity-45 w-[95%] md:w-[250px]">
      <BorderBeam className="-z-10" />
      <div className="h-[150px] w-full md:h-[160px] ">
        <Image
          className="w-full h-full object-cover rounded-t-md"
          width={1000}
          height={1000}
          src={image}
          alt={title}
        />
      </div>
      <div
        className="mt-5 flex flex-col gap-5 p-3
      "
      >
        <h2 className="line-clamp-3 text-2xl font-semibold relative after:absolute after:left-0 w-fit  after:bg-primary after:bottom-1 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">
          {title}
        </h2>
        <p className="line-clamp-4 text-sm">{description}</p>
        <div className="w-full bg-gray-600 h-3 bg-opacity-20 overflow-hidden rounded-md">
          <div className="h-full bg-main" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between text-center -mt-2 items-center">
          <div className="">
            <AnimatedNumber
              className="text-base font-bold"
              damping={50}
              value={progress}
            />
            <p className="text-xs">Complate</p>
          </div>
          <div className="flex items-center">
            <ShinyButton className="!scale-75 ">
              <div className="flex gap-2">
                <p>donation</p>
                <Coins className="size-5 text-main2" />
              </div>
            </ShinyButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const JoinOurMission = () => {
  return (
    <section className="w-full bg-bgMain bg-opacity-10 py-10 relative overflow-hidden">
      <Meteors />
      <div className="container z-30 relative">
        <BlurIn
          className="text-center !text-2xl font-semibold md:!text-3xl !pt-10"
          word="Join Our mission"
        />
        <div className="flex flex-col gap-8 mt-10 md:mt-14 mx-10 sm:flex-wrap sm:flex-row justify-center items-center">
          <ItemCard
            title="Plant Trees "
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
            image="/progress/p1.jpg"
            progress={80} // 80%
          />
          <ItemCard
            title="Plant Trees"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
            image="/progress/p2.jpg"
            progress={70} // 80%
          />
          <ItemCard
            title="Plant Trees"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
            image="/progress/p3.jpg"
            progress={30} // 80%
          />
          <ItemCard
            title="Plant Trees"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
            image="/progress/p4.jpg"
            progress={10} // 80%
          />
        </div>
        
      </div>
    </section>
  )
}
export default JoinOurMission
