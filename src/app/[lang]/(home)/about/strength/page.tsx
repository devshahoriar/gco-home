import Strength from './strength'

export const dynamic = 'force-static'

import { APP_URL } from '@/lib/utils'

const StengthPage = async () => {
  const res = await fetch(APP_URL + '/md/stength/tygi_v.md')
  const tygi_v = await res.text()
  const res2 = await fetch(APP_URL + '/md/stength/tyagiFoundation.md')
  const tyagiFoundation = await res2.text()
  const res3 = await fetch(APP_URL + '/md/stength/tyagiResearchCenter.md')
  const tyagiResearchCenter = await res3.text()
  const res4 = await fetch(APP_URL + '/md/stength/tyagiEnterprise.md')
  const tyagiEnterprise = await res4.text()
  const res5 = await fetch(APP_URL + '/md/stength/treelanching.md')
  const treelanching = await res5.text()

  return (
    <section className="container">
      <Strength
        tyagiVolunteer={tygi_v}
        tyagiFoundation={tyagiFoundation}
        tyagiResearchCenter={tyagiResearchCenter}
        tyagiEnterprise={tyagiEnterprise}
        treelanching={treelanching}
      />
    </section>
  )
}

export default StengthPage
