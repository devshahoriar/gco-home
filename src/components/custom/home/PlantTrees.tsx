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
    >
      <ShineBorder
      className="aspect-square !w-[200px] md:!w-[200px] relative  overflow-hidden group"
      color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
    >
      <Image
        src={src}
        className="object-cover absolute top-0 left-0 bottom-0 right-0 h-full w-full p-1 rounded-sm group-hover:scale-105 transition-all duration-300 ease-in-out"
        alt="Country"
        width="400"
        height="400"
      />
      <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main2 px-3 py-2 rounded-[5px] text-white font-bold opacity-100 md:opacity-0 md:blur-lg blur-0 group-hover:opacity-100 group-hover:blur-none transition-all duration-300 ease-in-out bg-opacity-20 backdrop-blur-xl border border-main">
        {title}
      </div>
    </ShineBorder>
    </motion.div>
  )
}

export const PlantTrees = () => {
  return (
    <div className="my-10 container pb-10">
      <BlurIn
        word="Where we work"
        className="text-center !text-2xl font-semibold md:!text-3xl"
      />
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <ItemCard src="/treep/af.jpg" title="Bangladesh" />
        <ItemCard src="/treep/bd.jpg" title="India" />
        <ItemCard src="/treep/in.jpg" title="USA" />
        <ItemCard src="/treep/uk.jpg" title="UK" />
      </div>
    </div>
  )
}
