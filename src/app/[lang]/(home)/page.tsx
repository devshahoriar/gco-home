import BlogSection from '@/components/custom/home/BlogSection'
import Carosel from '@/components/custom/home/Carosel'
import ChildAbouse from '@/components/custom/home/ChildAbouse'
import DonarAndCo from '@/components/custom/home/DonarAndCo'
import Donate from '@/components/custom/home/Donate'
import Instagram from '@/components/custom/home/Instagram'
import JoinOurMission from '@/components/custom/home/JoinOurMission'
import MiniWOrdlMap from '@/components/custom/home/MiniWOrdlMap'
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
      <MiniWOrdlMap />
      <ChildAbouse />
      <Donate />
      <Instagram />
    </div>
  )
}

export default HomePage
