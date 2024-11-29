'use client'

import {
  SweetchLayoutContent,
  SweetchLayoutSidebar,
  Switch,
  SwitchLayoutParant,
} from '@/components/shared/SwitchLayout'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const Items = [
  {
    title: 'About GCO',
    id: 'about',
  },
  {
    title: 'Mission vision',
    id: 'mission',
  },
  {
    title: 'History of GCO',
    id: 'histry',
  },
]

const AboutClient = ({ about, histry }: any) => {
  const [active, setActive] = useState('about')

  useEffect(() => {
    window.scrollTo(0, 0)
    setActive(window.location.hash?.split('#')[1] ? window.location.hash?.split('#')[1] : 'about')
  }, [])

  return (
    <SwitchLayoutParant className="mt-5">
      <SweetchLayoutSidebar>
        {Items.map((op, key) => (
          <Switch
            key={key}
            active={active === op.id}
            onClick={() => {
              setActive(op.id)
              window.location.hash = op.id
            }}
            className="text-start"
          >
            {op.title}
          </Switch>
        ))}
      </SweetchLayoutSidebar>
      <SweetchLayoutContent className="p-0">
        {active === 'about' && (
          <div className="prose dark:prose-invert !max-w-full p-5 text-justify">
            <ReactMarkdown className="w-full">{about}</ReactMarkdown>
          </div>
        )}

        {active === 'histry' && (
          <div className="prose dark:prose-invert !max-w-full p-5 text-justify">
            <ReactMarkdown>{histry}</ReactMarkdown>
          </div>
        )}

        {active === 'mission' && (
          <div className="p-5">
            <div className="mx-3">
              <h2 className="font-bold">Mission:</h2>
              <p className="font-light mt-3">
                — To develop healthy, standardized, improved living system and
                sustainable environment is the only goal.
              </p>
            </div>
            <div className="mx-3 mt-10 mb-6">
              <h2 className="font-bold">Vision:</h2>
              <p className="font-light mt-3">
                — To self-reliance disadvantaged and backward communities and
                take necessary measures including nutrition for healthy,
                standardized and improved living system of future generations.
              </p>
              <p className="font-light mt-3">
                — To develop Global Community Organization by forming a
                non-communal, non-political social culture.
              </p>
              <p className="font-light mt-3">
                — To develop community and coordinating various social, state
                organizations which involved in social and humanitarian welfare
                and taking necessary measures to expedite their work.
              </p>
            </div>
          </div>
        )}
      </SweetchLayoutContent>
    </SwitchLayoutParant>
  )
}

export default AboutClient
