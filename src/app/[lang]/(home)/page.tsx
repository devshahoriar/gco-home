import Carosel from '@/components/custom/home/Carosel'
import DonarAndCo from '@/components/custom/home/DonarAndCo'
import AnimatedNumber from '@/components/ui/aimate/AnimatedNumber'
import React from 'react'

const HomePage = async () => {
  return (
    <div className="container">
      <Carosel />
      <DonarAndCo />
      <AnimatedNumber damping={50}  value={1200} />
    </div>
  )
}

export default HomePage
