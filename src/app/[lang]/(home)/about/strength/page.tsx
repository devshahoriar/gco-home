import Strength from "./strength"

export const dynamic = 'force-static'

import { APP_URL } from '@/lib/utils'


const StengthPage =async () => {
  
  const res = await fetch(APP_URL + '/md/stength/tygi_v.md')
  const tygi_v = await res.text()
  const res2 = await fetch(APP_URL + '/md/stength/tyagiFoundation.md')
  const tyagiFoundation = await res2.text()
  const res3 = await fetch(APP_URL + '/md/stength/tyagiResearchCenter.md')
  const tyagiResearchCenter = await res3.text()
  
  return (
    <section className="container">
      <Strength tyagiVolunteer={tygi_v} tyagiFoundation={tyagiFoundation} tyagiResearchCenter={tyagiResearchCenter}  />
    </section>
  )
}

export default StengthPage