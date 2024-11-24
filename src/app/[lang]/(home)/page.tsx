import BlogSection from '@/components/custom/home/BlogSection'
import Carosel from '@/components/custom/home/Carosel'
import ChildAbouse from '@/components/custom/home/ChildAbouse'
import Donate from '@/components/custom/home/Donate'
import Instagram from '@/components/custom/home/Instagram'
import MiniWOrdlMap from '@/components/custom/home/MiniWOrdlMap'
import OurJob from '@/components/custom/home/OurJob'
import OurProgram from '@/components/custom/home/OurProgram'
import { PlantTrees } from '@/components/custom/home/PlantTrees'
import ProgramOverview from '@/components/custom/home/programs-overview'


const HomePage = async () => {
  return (
    <>
      <div className='md:h-[550px]'>
      <Carosel />
      </div>
      <OurJob />
      <OurProgram />
      <PlantTrees />
      <ProgramOverview />
      <BlogSection />
      <MiniWOrdlMap />
      <ChildAbouse />
      <Donate />
      <Instagram />
    </>
  )
}

export default HomePage
