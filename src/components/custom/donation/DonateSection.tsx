import Donate from './Donate'
import DonateSlide from './DonateSlide'

const DonateSection = () => {
  return (
    <section className='container flex justify-between flex-col lg:flex-row gap-10 my-10 px-10 md:px-3'>
      <DonateSlide />
      <Donate />
    </section>
  )
}
export default DonateSection
