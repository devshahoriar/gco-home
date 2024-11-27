const appUrl = process.env.APP_URL!
import ReactMarkdown from 'react-markdown'
const AboutPage = async () => {
  const res = await fetch(appUrl + '/md/about/gco.md')
  const md = await res.text()

  return (
    <main className="container mt-5">
      <div className="prose dark:prose-invert max-w-[700px] mx-auto my-10">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </main>
  )
}

export default AboutPage

// import AboutImage from '@/img/pagesImage/50K-Tree-Plantation.png'
{
  /* <div className="flex justify-center m-2">
        <Image height={500} alt="About" src={AboutImage} />
      </div>
      <div className='flex justify-center flex-col items-center'>
        <h1 className='text-center text-3xl my-5'>About GCO</h1>
        <p className='w-[800px] text-justify'>
          The Global Community Organization was established in 2008 in Bagha
          Upazila, Rajshahi District, Bangladesh. In 2023, the Global Community
          Organization was registered by the NGO Affairs Bureau, Prime
          Minister’s Office of the Government of the People’s Republic of
          Bangladesh (Reg. No: 3388). In 2014 the Global Community Organization
          was registered by the Directorate of Social Services under the
          Ministry of Social Welfare of the Government of the People’s Republic
          of Bangladesh (Reg No: Rajshahi-975/14). Global Community Organization
          registered with National Board of Revenue of Government of People’s
          Republic of Bangladesh in 2023 (TAX ID #463673947101). It is a
          non-political, non-profit, developmental and philanthropic voluntary
          organization. The child and environment friendly organization was
          established on 1st June, 2008 with a group of confident, brave,
          conscious and enterprising youth. For 16 long years, a group of
          confident, young, experienced members and some expert advisory council
          of international standards have been running the government
          successfully, with domestic and foreign donor agencies and
          self-initiatives. By agreeing to the various development initiatives
          of the government and taking effective steps, the organization is
          afforestation, sustainable self-reliance program, mother and child
          nutrition awareness program, primary education, sub-formal education,
          vocational training, handicrafts, water supply and hygiene, drug
          prevention, assistance to the disabled, women’s legal Support,
          anti-dowry, housing etc. Making the children of the local community go
          to school, recreation centers for the elderly, distribution of
          children’s clothes, de-addiction of the youth, making adequate
          provision of clean water, reducing child marriage and dowry trends,
          understanding the importance of higher education, solving the
          employment problem of unemployed youth, creating awareness among
          farmers in agricultural work, improving primary health care, promoting
          women entrepreneurship and ensuring empowerment. The organization
          continues to work tirelessly to take appropriate and effective steps
          to resolve the issues. The Global Community Organization’s sole
          mission is to build a healthy, quality, improved living system and
          sustainable environment.
        </p>
        <p className='w-[800px] text-justify mt-6 mb-6'>2033 is the Silver Jubilee of the Global Community Organization. On the occasion of the Silver Jubilee celebrations, Global Community Organization has taken up a long-term action plan by coordinating the child ‍ and environment. We firmly believe that our <b>“One Tree For One Child”</b> is a timely and groundbreaking activity.</p>
      </div> */
}
