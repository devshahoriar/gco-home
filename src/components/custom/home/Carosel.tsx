'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import img1 from '@/img/carosel/1 (1).jpg'
import img2 from '@/img/carosel/1 (2).jpg'
import img3 from '@/img/carosel/1 (3).jpg'
import { useState } from 'react'

const SlideItem = ({ src, inview }: any) => {
  return (
    <div className="h-[30vh] md:h-[40vh] xl:h-[60vh] rounded-md overflow-hidden">
      <Image
        className={`h-full w-full object-cover rounded-md transition-all ease-in-out duration-1000 ${inview ? 'scale-110' : 'scale-100'}`}
        src={src}
        alt="Picture of the author"
        width={500}
        height={500}
        placeholder="blur"
        loading="lazy"
      />
    </div>
  )
}

function SimpleSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const [currentPos, setCurrentPos] = useState(0)
  return (
    <div className="slider-container">
      <Slider {...settings} afterChange={(x) => setCurrentPos(x)}>
        <SlideItem src={img1} inview={currentPos === 0} />
        <SlideItem src={img2} inview={currentPos === 1} />
        <SlideItem src={img3} inview={currentPos === 2} />
      </Slider>
    </div>
  )
}

export default SimpleSlider
