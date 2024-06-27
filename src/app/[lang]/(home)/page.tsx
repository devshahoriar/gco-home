import BlogSection from '@/components/custom/home/BlogSection'
import Carosel from '@/components/custom/home/Carosel'
import DonarAndCo from '@/components/custom/home/DonarAndCo'
import JoinOurMission from '@/components/custom/home/JoinOurMission'
import OurJob from '@/components/custom/home/OurJob'
import { PlantTrees } from '@/components/custom/home/PlantTrees'
import React from 'react'

const HomePage = async () => {
  return (
    <div className="">
      <Carosel />
      <OurJob />
      <DonarAndCo />
      <PlantTrees />
      <JoinOurMission />
      <BlogSection />
    </div>
  )
}

export default HomePage
