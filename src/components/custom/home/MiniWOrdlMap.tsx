/* eslint-disable react/no-unescaped-entities */
import GaugeCircle from '@/components/ui/aimate/gauge-circle'
import Map from './Map'

const MiniWOrdlMap = () => {
  return (
    <section className="my-10 md:my-20 container px-3">
      <div className="md:flex md:items-center">
        <div className="flex flex-col items-center md:items-start md:w-[40%]">
          <h1 className="text-center w-[80%] text-main font-bold text-2xl md:text-start">
            Social impact from our program
          </h1>
          <p className="text-center w-[80%] font-thin text-sm mt-5 md:text-start">
            Our "One Tree, One Child" program fosters a strong environmental
            connection in children, empowering them to actively combat climate
            change. By planting trees, each child contributes to a greener
            planet, enhancing community health and inspiring lifelong
            stewardship of nature.
          </p>
          <div className="flex flex-col gap-10 items-start mt-10 sm:flex-row justify-between">
            <div className="flex flex-col items-center ">
              <GaugeCircle
                max={100000}
                min={0}
                value={94109}
                gaugePrimaryColor="rgb(92 176 47)"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                className="md:size-24"
              />
              <p className="text-center font-thin text-sm md:mt-3 md:w-[60%]">
                Tree Plant
              </p>
            </div>
            <div className="flex flex-col items-center">
              <GaugeCircle
                max={30000}
                min={0}
                value={25232}
                gaugePrimaryColor="rgb(92 176 47)"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                className="md:size-24"
              />
              <p className="text-center font-thin text-sm md:mt-3 md:w-[60%]">
                Clild
              </p>
            </div>
            <div className="flex flex-col items-center">
              <GaugeCircle
                max={100}
                min={0}
                value={60}
                gaugePrimaryColor="rgb(92 176 47)"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                className="md:size-24"
              />
              <p className="text-center font-thin text-sm md:mt-3 md:w-[60%]">
                Lorem ipsum
              </p>
            </div>
          </div>
          <p className="text-center w-[80%] text-sm mt-5 md:text-start md:text-base font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
            minima!
          </p>
        </div>
        <div className="flex justify-center md:items-center md:w-[60%]">
          <div className="mt-10 md:mt-0 w-[90%] md:w-full h-[400px]">
            <Map />
          </div>
        </div>
      </div>
    </section>
  )
}
export default MiniWOrdlMap
