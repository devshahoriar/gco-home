'use client'
import Image from 'next/image'
import img1 from '../../../../public/donatetree/pexels-felixmittermeier-1080401.jpg'
import img2 from '../../../../public/donatetree/pexels-felixmittermeier-1459495.jpg'
import img3 from '../../../../public/donatetree/pexels-felixmittermeier-1459497.jpg'
import img4 from '../../../../public/donatetree/pexels-jplenio-1146706.jpg'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const trees = [img1, img2, img3, img4]

const DonateSlide = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="w-full lg:w-1/2">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="h-[450px] xl:h-[580px]"
      >
        <Image
          className="object-cover h-full w-full"
          src={trees[index]}
          alt="trees"
          height={1000}
          width={1000}
        />
      </motion.div>
      <div className="flex gap-4 mt-5">
        {trees.map((tree, i) => (
          <div key={i}>
            <Image
              className={cn(
                'object-cover h-20 w-20 transition-opacity cursor-pointer',
                i !== index && 'opacity-50'
              )}
              src={tree}
              alt="trees"
              height={100}
              width={100}
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default DonateSlide
