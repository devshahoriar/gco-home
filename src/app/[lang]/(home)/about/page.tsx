
import AboutClient from './AboutClient'
export const dynamic = 'force-static'
const APP_URL = process.env.NEXT_PUBLIC_URL
const AboutPage = async () => {
  const res = await fetch(APP_URL + '/md/about/gco.md')
  const about = await res.text()
  const res2 = await fetch(APP_URL + '/md/about/histry.md')
  const histry = await res2.text()

  return (
    <main className="container mt-5">
      <AboutClient about={about} histry={histry} />
    </main>
  )
}
export default AboutPage
