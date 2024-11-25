'use client'
import BlurIn from '@/components/ui/aimate/blur-in'
import ShineBorder from '@/components/ui/aimate/shine-border'
import Image from 'next/image'
import { motion } from 'framer-motion'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const ItemCard = ({ src, title }: { src: any; title: string }) => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-[calc(50%-20px)] sm:w-[calc(33%-20px)] md:w-[180px] group"
    >
      {/* <ShineBorder
        className="aspect-square !w-full relative  overflow-hidden group"
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
      > */}
       <div className='!w-full aspect-square relative'>
       <Image
          src={src}
          className="object-cover absolute top-0 left-0 bottom-0 right-0 h-full w-full p-1 rounded-sm group-hover:scale-105 transition-all duration-300 ease-in-out"
          alt="Country"
          width="400"
          height="400"
        />
        <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-10 px-3 py-2 rounded-[5px] text-white font-bold backdrop-blur-md group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          {title}
        </div>
        <div className='z-40 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
          <button className=" border-white border-2 text-white font-bold px-5 py-1 hover:bg-white hover:text-black">View all</button>
        </div>
       </div>
      {/* </ShineBorder> */}
    </motion.div>
  )
}

export const PlantTrees = () => {
  return (
    <div className="my-10 container pb-0">
      <BlurIn
        word="Where we work"
        className="text-center !text-2xl font-semibold md:!text-3xl"
      />
      <div className="flex flex-wrap md:justify-between justify-center md:flex-nowrap gap-5 mt-10 px-3">
        <ItemCard src="/treep/af.jpg" title="Bangladesh" />
        <ItemCard src="/treep/bd.jpg" title="India" />
        <ItemCard src="/treep/af.jpg" title="Bangladesh" />
        <ItemCard src="/treep/bd.jpg" title="India" />
        <ItemCard src="/treep/in.jpg" title="USA" />
        <ItemCard src="/treep/uk.jpg" title="UK" />
      </div>
    </div>
  )
}
