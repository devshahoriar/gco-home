import GaugeCircle from '@/components/ui/aimate/gauge-circle'
import Image from 'next/image'

const MiniWOrdlMap = () => {
  return (
    <section className="my-10 md:my-20 container">
      <div className='md:flex md:items-center'>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-center w-[80%] text-main font-bold text-2xl md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            aperiam!
          </h1>
          <p className="text-center w-[80%] font-thin text-sm mt-5 md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            placeat?
          </p>
          <div className="flex flex-col gap-10 items-center mt-10 sm:flex-row">
            <div className="flex flex-col items-center ">
              <GaugeCircle
                max={100}
                min={0}
                value={80}
                gaugePrimaryColor="rgb(92 176 47)"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                className='md:size-32'
              />
              <p className="text-center font-thin text-sm md:mt-3">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <GaugeCircle
                max={100}
                min={0}
                value={40}
                gaugePrimaryColor="rgb(92 176 47)"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                className='md:size-32'
              />
              <p className="text-center font-thin text-sm md:mt-3">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <GaugeCircle
                max={100}
                min={0}
                value={60}
                gaugePrimaryColor="rgb(92 176 47)"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                className='md:size-32'
              />
              <p className="text-center font-thin text-sm md:mt-3">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <p className="text-center w-[80%] text-sm mt-5 md:text-start md:text-base font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
            minima!
          </p>
        </div>
        <div className="flex justify-center md:items-center md:w-[40%]">
          <div className="mt-10 md:mt-0 w-[90%] md:w-full">
            <Image
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
              alt="mini world"
              src="/worldmap.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default MiniWOrdlMap
