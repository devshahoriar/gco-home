/* eslint-disable @next/next/no-img-element */

import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tabs } from '@radix-ui/react-tabs'
import Image from 'next/image'
import FbTab from './FbTab'
import XTab from './TwTab'

const Instagram = ({fb,x}:any) => {
  return (
    <section>
      <div className="container px-3 py-5">
        <div className="mt-5">
          <h1 className="!text-2xl font-semibold md:!text-3xl !py-5 text-center">
            We are in Social Media
          </h1>
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
          
                <FbTab fb={fb}/>
              </TabsContent>
              <TabsContent value="ins">
                <XTab x={x}/>
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
    <div className="flex flex-wrap justify-center gap-4">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="w-[calc(50%-20px)] sm:w-[calc(33%-20px)] lg:w-[calc(25%-20px)]"
          >
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover"
              src={'https://picsum.photos/200?q=' + i}
              alt=""
            />
          </div>
        ))}
    </div>
  )
}

export default Instagram
