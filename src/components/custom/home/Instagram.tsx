/* eslint-disable @next/next/no-img-element */
import BlurIn from '@/components/ui/aimate/blur-in'
import SiteButton from '@/components/ui/SiteButton'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tabs } from '@radix-ui/react-tabs'
import Image from 'next/image'

const Instagram = () => {
  return (
    <section>
      <div className="container px-3 py-5">
        <div className="mt-5">
          <BlurIn
            className="!text-2xl font-semibold md:!text-3xl !py-5 text-center"
            word="We are in Social Media"
          />
        </div>
        <div>
          <Tabs defaultValue="fb">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="fb">Facebook</TabsTrigger>
                <TabsTrigger value="ins">X Twitter</TabsTrigger>
              </TabsList>
            </div>
            <div className="w-full">
              <TabsContent value="fb">
                fb
                <SocialItem key="fb" />
              </TabsContent>
              <TabsContent value="ins">
                x
              <SocialItem key='ins'  />
              </TabsContent>
            </div>
          </Tabs>
        </div>
        <div className="flex justify-center pb-2 mt-5">
          <SiteButton
            className=" px-6"
          >
            Show More
          </SiteButton>
        </div>
      </div>
    </section>
  )
}

const SocialItem = () => {

  
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="w-[calc(50%-20px)] sm:w-[calc(33%-20px)] lg:w-[calc(25%-20px)]"
          >
            <Image width={200} height={200} className='w-full h-full object-cover' src={"https://picsum.photos/200?q="+i} alt="" />
          </div>
        ))}
    </div>
  )
}

export default Instagram
