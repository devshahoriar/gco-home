import BlurIn from '@/components/ui/aimate/blur-in'
import { ScrollArea } from '@/components/ui/scroll-area'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const GridPattern = dynamic(
  () => import('@/components/ui/aimate/animated-grid-pattern'),
  { ssr: false }
)

const BlogSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <GridPattern
        numSquares={100}
        maxOpacity={0.5}
        duration={2}
        repeatDelay={1}
        className="opacity-20"
      />
      <div className="container px-10 pt-12 pb-20">
        <div className="mt-10">
          <BlurIn
            className="!text-2xl font-semibold md:!text-3xl !pt-10 !text-start"
            word="News and Blogs"
          />
        </div>
        <div className="mt-10 md:flex md:gap-5">
          <BigNews
            title="The best way to plant a tree"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="/img/1.jpg"
          />

          <ScrollArea className="h-[500px] w-full mt-10 md:mt-0 md:w-1/2">
            <div className="flex-col flex gap-5 ">
              <ItemNews
                title="The best way to plant a tree"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/img/1.jpg"
              />
              <ItemNews
                title="The best way to plant a tree"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/img/1.jpg"
              />
              <ItemNews
                title="The best way to plant a tree"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/img/1.jpg"
              />
              <ItemNews
                title="The best way to plant a tree"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/img/1.jpg"
              />
              <ItemNews
                title="The best way to plant a tree"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/img/1.jpg"
              />
            </div>
          </ScrollArea>
        </div>
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
    <div className="relative rounded-md p-3 overflow-hidden border  border-opacity-45 drop-shadow-xl shadow-white backdrop-blur-md md:w-1/2 ">
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
    <div className="relative rounded-md p-3 overflow-hidden border border-opacity-45 flex backdrop-blur-md">
      <p className="absolute top-2 right-3 bg-red-600 px-2 py-1 text-white rounded drop-shadow-md text-xs">
        New
      </p>
      <div className=" aspect-square h-[100px] sm:h-[150px] md:h-[100px]">
        <Image
          className="w-full h-full object-cover rounded"
          width={1000}
          height={1000}
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
