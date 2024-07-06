import Image from 'next/image'
import DonationBottomTab from './DonationBottomTab'

const DonateBottom = () => {
  return (
    <section className='dark:bg-zinc-600 dark:bg-opacity-20 bg-black bg-opacity-30'>
      <div className="container px-5 md:px-3 py-24 overflow-hidden">
        <div className='relative md:flex md:items-center'>
          <DonationBottomTab />
          <div className='size-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] md:relative md:size-fit md:translate-x-0 md:translate-y-0 md:z-0 md:top-0 md:left-0 md:w-1/2 md:h-[400px]'>
            <Image className='h-full w-full object-cover md:object-contain' alt="art tree" width={500} height={500} src="/treeart.png" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default DonateBottom
