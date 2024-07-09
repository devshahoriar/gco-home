/* eslint-disable @next/next/no-img-element */
import BlurIn from '@/components/ui/aimate/blur-in'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tabs } from '@radix-ui/react-tabs'

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
                <TabsTrigger value="ins">Instagram</TabsTrigger>
              </TabsList>
            </div>
            <div className="w-full">
              <TabsContent value="fb">
                fb
                <SocialItem key="fb" />
              </TabsContent>
              <TabsContent value="ins">
                ins
              <SocialItem key='ins'  />
              </TabsContent>
            </div>
          </Tabs>
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
            <img className='w-full h-full object-cover' src={"https://picsum.photos/800?q="+i} alt="" />
          </div>
        ))}
    </div>
  )
}

export default Instagram
