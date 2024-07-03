import Donate from './Donate'
import DonateSlide from './DonateSlide'

const DonateSection = () => {
  return (
    <section className='container flex justify-between flex-col md:flex-row gap-10 my-10 px-10 md:px-0'>
      <DonateSlide />
      <Donate />
    </section>
  )
}
export default DonateSection
