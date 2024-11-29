const appUrl = process.env.APP_URL!
import AboutClient from './AboutClient'
export const dynamic = 'force-static'
const AboutPage = async () => {
  const res = await fetch(appUrl + '/md/about/gco.md')
  const about = await res.text()
  const res2 = await fetch(appUrl + '/md/about/histry.md')
  const histry = await res2.text()

  return (
    <main className="container mt-5">
      <AboutClient about={about} histry={histry} />
    </main>
  )
}
export default AboutPage
