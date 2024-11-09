import DotPattern from '@/components/ui/aimate/dot-pattern'
import SiteButton from '@/components/ui/SiteButton'
import { cn } from '@/lib/utils'
import { HeartPulse, PersonStanding, TentTree, Vegan } from 'lucide-react'
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
        <SiteButton className="px-6">Read More</SiteButton>
      </div>
    </div>
  )
}

const OurJob = () => {
  return (
    <div className="container flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center  md:pb-10 -mt-[100px] md:-mt-[120px]">
      <CardItem
        icon={<TentTree />}
        description="Planting trees is a powerful climate action—each tree absorbs carbon dioxide, improves air quality, and supports biodiversity. Together, we can create greener cities and a healthier planet for future generations."
        title="Climate action"
      />
      <CardItem
        icon={<HeartPulse />}
        description="Trees improve air quality by absorbing pollutants, releasing oxygen, and reducing respiratory issues. They also create calming environments, which help reduce stress and support mental health."
        title="Health"
      />
      <CardItem
        icon={<Vegan />}
        description="Tree planting enhances food security by providing fruits, nuts, and leaves, which serve as direct food sources. Trees also improve soil fertility, supporting crop growth and increasing agricultural yields. Additionally, they offer shade, which helps to protect crops and preserve water resources."
        title="Food Security"
      />
      <CardItem
        icon={<PersonStanding />}
        description="Trees provide essential benefits to humans by purifying the air, absorbing carbon dioxide, and releasing oxygen, which improves air quality. They also help in reducing heat, conserving water, and supporting biodiversity, making the environment healthier and more sustainable."
        title="Human writes"
      />
    </div>
  )
}
export default OurJob
