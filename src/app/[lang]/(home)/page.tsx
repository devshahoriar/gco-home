import Carosel from '@/components/custom/home/Carosel'
import DonarAndCo from '@/components/custom/home/DonarAndCo'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = async () => {
  return (
    <div className="container">
      <Carosel />
      <DonarAndCo />
    </div>
  )
}

export default HomePage
