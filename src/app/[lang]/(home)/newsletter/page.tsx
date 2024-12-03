import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

const NewsletterPage = () => {
  return (
    <div className="h-[90vh] relative w-full flex justify-center items-center">
      <Image
        height={1080}
        className="h-full w-full object-cover brightness-75 absolute top-0 bottom-0 left-0 right-0"
        width={1920}
        alt="bg"
        src="/b/b4.jpg"
      />
      <div className="z-10 relative w-[95%] md:w-[650px] backdrop-blur-md text-white bg-black bg-opacity-30 rounded-md shadow-lg md:ml-[200px]  xl:ml-[600px] 2xl:ml-[800px]">
        <div className='m-3md
        m-5'>
          <h1 className='text-2xl md:text-4xl font-semibold pt-3'>Get Our Emails</h1>
          <p className='text-sm md:text-base font-light mt-3'>
            Enter your email to get exciting news, fun facts & positive
            environmental stories!
          </p>
          <div className='mt-5 flex flex-col md:flex-row gap-3 md:gap-5 md:items-end'>
            <div className="flex-1">
              <Label>Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="flex-1">
              <Label>Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <Button variant='outline' className="mt-3 text-black dark:text-white">Subscribe</Button>
          </div>
          <p className='text-sm font-light mt-3'>*By completing this form you are signing up to receive our emails and can unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  )
}

export default NewsletterPage
