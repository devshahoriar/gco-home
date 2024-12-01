'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import SiteButton from '@/components/ui/SiteButton'

import Image from 'next/image'
// const GridPattern = dynamic(
//   () => import('@/components/ui/aimate/animated-grid-pattern'),
//   { ssr: false }
// )

const ListBlog = [
  {
    title: 'Donate One Tree🌱',
    img: '/b/b2.png',
    desc: `🌻 Garden Adventures: Explore the world of gardening with children, teaching them about the growth of plants, flowers, and the importance of pollinators.
🌊 Ocean Odyssey: Extend their environmental knowledge beyond forests by sharing insights into the importance of oceans and marine life conservation.
🌸 Nature Scavenger Hunts: Organize fun scavenger hunts in natural settings, fostering curiosity and connection to the environment.
📚 Eco-Library: Share recommendations for children’s books that promote eco-awareness and environmental stewardship.`,
  },
  {
    title: 'Safe life from the thunderstorms with plants',
    img: '/b/b3.jpg',
    desc: 'Many people lost their lives due to lightning. Due to which the Global Community Organization launched a project called Safe. Aminul Islam, Founder President, Global Community Organization at the inauguration. He started a safe zone by planting palm trees in the vacant plot.\n Persawta Binodpur, Bagha, Rajshahi.',
  },
  {
    title: 'The “Shadow” Project !',
    img: '/b/b4.jpg',
    desc: 'The “Shadow” project initiated and funded by the Global Community Organization was inaugurated. A RadhaChura tree is planted in Keshabpur market. The plant that will fill the oxygen deficiency by providing beauty enhancement shade in the market. The inauguration was attended by Mr. Aminul Islam , Founder President, Global Community Organization, Bagha, Rajshahi-Bangladesh. Local people and TYAGI Volunteer volunteers were also present.',
  },
  {
    title: 'BRAC ‘s Ultra-Poor Graduation (UPG) program',
    img: '/b/b5.jpg',
    desc: 'BRAC ‘s Ultra-Poor Graduation (UPG) program organized a tree sapling distribution campaign in 2024 for the members of Mirganj, Bagha, Rajshahi. The campaign was supported by the Global Community Organization , Bagha, Rajshahi.',
  },
  {
    title: 'Achievements of Global Community Organization🎉',
    img: '/b/6.png',
    desc: `অ‌ভিনন্দন Microsoft 365

এটা এক‌টি অ‌বিশ্বাস্য ও অসম্ভব প্রা‌প্তি।
আমরা অত্যন্ত আনন্দের স‌হিত জানা‌চ্ছি যে, গ্লোবাল ক‌মিউ‌নিটি অরগানাই‌জেশন ও মাই‌ক্রোসফট অ‌ফি‌সিয়া‌লি পার্টনার হি‌সে‌বে যাত্রা শুরু ক‌রেছে । এই যাত্রা শুভ‌হোক ও টেকশই বন্ধন অটুট থাকুক। বাংলা‌দেশের গ‌র্বিত সংস্থা গ্লোবাল ক‌মিউ‌নি‌টি অরগানাই‌জেশন এর পক্ষ থে‌কে Microsoft ও Bill Gates কে অ‌ভিনন্দন ও কৃতজ্ঞতা ।

It is an incredible and impossible achievement. It is with great pleasure that we announce that Global Community Organization and Microsoft have officially started their journey as partners. May this journey be blessed and may the bonds remain strong. Congratulations to Microsoft and Bill Gates on behalf of Global Community Organization, the proud organization of Bangladesh.`,
  },
]

const BlogSection = () => {
  return (
    <section className="w-full relative overflow-hidden border-b border-zinc-600 border-t">
      {/* <GridPattern
        numSquares={100}
        maxOpacity={0.5}
        duration={2}
        repeatDelay={1}
        className="opacity-50"
      /> */}
      <div className="container px-10 pt-12 pb-20">
        <div className="mt-10">
          <h1
            className="!text-2xl font-semibold md:!text-3xl !pt-10 !text-start"
          >News and Blogs</h1>
        </div>
        <div className="mt-10 md:flex md:gap-5">
          <BigNews
            title="A tree can be especially helpful for a child’s healthy development."
            description="A tree can be especially helpful for a child’s healthy development.
It teaches the child about the natural environment and encourages his scientific invention.
It can make medicinal preparations from its health and nutritional point of view, clean and oxygenate its environment, and stimulate further environmental improvement."
            image="/b/blog1.jpg"
          />

          <ScrollArea className="h-[500px] w-full mt-10 md:mt-0 md:w-1/2 shadow-xl">
            <div className="flex-col flex gap-5 ">
              {ListBlog.map((item, index) => (
                <ItemNews
                  key={index}
                  title={item.title}
                  description={item.desc}
                  image={item.img}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <SiteButton className=" px-6">View all</SiteButton>
      </div>
    </section>
  )
}
export default BlogSection

const BigNews = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => {
  return (
    <div className="relative rounded-md p-3 overflow-hidden border  border-opacity-45 shadow-xl backdrop-blur-md md:w-1/2 ">
      <p className="absolute top-4 left-4 bg-red-600 px-5 py-1 text-white rounded drop-shadow-md">
        Trend
      </p>
      <div className="h-[200px] sm:h-[300px] w-full ">
        <Image
          className="w-full h-full object-cover rounded"
          width={1000}
          height={1000}
          src={image}
          alt={title}
        />
      </div>
      <div
        className="mt-5 flex flex-col gap-5 p-3
      "
      >
        <h2 className="line-clamp-3 text-2xl font-semibold relative after:absolute after:left-0 w-fit  after:bg-primary after:bottom-1 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">
          {title}
        </h2>
        <p className="line-clamp-4 text-sm font-light">{description}</p>
      </div>
    </div>
  )
}

const ItemNews = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => {
  return (
    <div className="relative rounded-md p-3 overflow-hidden border border-opacity-45 flex backdrop-blur-md shadow-lg">
      <p className="absolute top-2 right-3 bg-red-600 px-2 py-1 text-white rounded drop-shadow-md text-xs z-10">
        New
      </p>
      <div className=" aspect-square h-[100px] sm:h-[150px] md:h-[100px]">
        <Image
          className="w-full h-full object-cover rounded"
          width={200}
          height={200}
          src={image}
          alt={title}
        />
      </div>
      <div
        className="flex flex-col gap-2 ml-3
      "
      >
        <h2 className="line-clamp-2 text-base sm:text-xl font-semibold relative after:absolute after:left-0 w-fit  after:bg-primary after:bottom-1 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">
          {title}
        </h2>
        <p className="line-clamp-3 text-xs sm:text-base md:text-sm font-light">
          {description}
        </p>
      </div>
    </div>
  )
}
