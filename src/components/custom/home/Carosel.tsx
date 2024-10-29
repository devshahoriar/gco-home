'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import img1 from '@/img/carosel/1 (1).jpg'
import img2 from '@/img/carosel/cus (1).jpg'
import img3 from '@/img/carosel/cus (2).jpg'
import { useState } from 'react'
import { TextAnimate } from '@/components/ui/aimate/TextAnimate'

const typs = [
  'fadeIn',
  'fadeInUp',
  'popIn',
  'shiftInUp',
  'rollIn',
  'whipIn',
  'whipInUp',
  'calmInUp',
]




const SlideItem = ({ src, inview }: any) => {
  
    
  return (
    <div className="h-[300px] sm:h-[350px] md:h-[500px] xl:h-[550px] overflow-hidden relative md:mt-1">
      {inview && (
        <section className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <TextAnimate
            text="This is the test text that will be animated"
            type={typs[Math.floor(Math.random() * typs.length)] as any}
          />
        </section>
      )}
      <Image
        className={`h-full w-full object-cover transition-all duration-2500 ease-in-out  ${
          inview ? 'scale-110' : 'scale-100'
        }`}
        src={src}
        alt="Picture of the author"
        width={1000}
        height={1000}
        placeholder="blur"
      />
    </div>
  )
}

function SimpleSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const [currentPos, setCurrentPos] = useState(0)
  return (
    <div className="slider-container container !p-0">
      <Slider {...settings} afterChange={(x) => setCurrentPos(x)}>
        {/* <SlideItem src={img1} inview={currentPos === 0} /> */}
        <SlideItem src={img2} inview={currentPos === 0} />
        <SlideItem src={img3} inview={currentPos === 1} />
      </Slider>
    </div>
  )
}

export default SimpleSlider
