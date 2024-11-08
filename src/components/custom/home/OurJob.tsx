import { AnimatButton } from '@/components/ui/aimate/AnimateButton'
import DotPattern from '@/components/ui/aimate/dot-pattern'
import SiteButton from '@/components/ui/SiteButton'
import { cn } from '@/lib/utils'
import { ScanEye, TvMinimal, icons } from 'lucide-react'
import { ReactNode } from 'react'

const CardItem = ({
  description,
  icon,
  title,
}: {
  icon: ReactNode
  title: String
  description: String
}) => {
  return (
    <div className="flex flex-col items-center w-[80%] sm:w-[200px] md:w-[250px] ">
      <div className="bg-main size-10 md:size-14 flex justify-center items-center text-white rounded-sm z-20">
        {icon}
      </div>
      <div className="flex flex-col items-center bg-slate-300  dark:bg-slate-800 bg-opacity-70 dark:bg-opacity-40 gap-5 py-10 -mt-5 rounded-md relative overflow-hidden">
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]'
          )}
        />
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <p className="line-clamp-4 text-center text-sm w-[80%] ">
          {description}
        </p>
        <SiteButton className='px-6'>Read More</SiteButton>
      </div>
    </div>
  )
}

const OurJob = () => {
  return (
    <div className="container flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center  md:pb-10 -mt-[100px] md:-mt-[120px]">
      <CardItem
        icon={<ScanEye />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
        title="Mission"
      />
      <CardItem
        icon={<TvMinimal />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
        title="Our progrma"
      />
      <CardItem
        icon={<ScanEye />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
        title="Mission"
      />
      <CardItem
        icon={<TvMinimal />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
        title="Our progrma"
      />
    </div>
  )
}
export default OurJob
