import allListImage from '@/img/listImage/listImage'
import { Newspaper, Trophy, User } from 'lucide-react'
import Image from 'next/image'


const PhotoGallary = () => {
  return (
    <main className="container">
      <div className="mt-10">
        <div className='flex items-center flex-wrap gap-5 justify-center md:gap-9'>
          {data.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex items-center justify-center bg-primary rounded-full size-[80px]">
                <item.Icon size={40} />
              </div>
              <div className='flex-1'>
                <h1 className="text-4xl text-primary">{item.title}</h1>
                <p className="max-w-[90px] font-light text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-center text-4xl text-primary">Image Gallary</h1>
        <div className="flex flex-wrap my-5 gap-3 sm:gap-4 mx-2 items-center justify-center max-w-[900px]">
          {allListImage.map((url, index) => (
            <Image
              loading={index > 20 ? 'eager' : 'lazy'}
              key={index}
              src={url}
              alt="image"
              className="aspect-square size-[80px] sm:size-[130px] md:size-[200px] rounded-full object-cover"
              width={200}
              height={200}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

const data = [
  {
    title: '23',
    desc: 'TYAGI UNIT',
    Icon: Newspaper,
  },
  {
    title: '20',
    desc: 'DURONTO UNIT',
    Icon: User,
  },
  {
    title: '17k+',
    desc: 'Tree Plantation',
    Icon: Trophy,
  },
  {
    title: '13+',
    desc: 'Years of experience',
    Icon: Trophy,
  },
]



export default PhotoGallary
