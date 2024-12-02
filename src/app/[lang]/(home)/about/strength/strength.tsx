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
    title: 'Tyagi volunteer',
    id: 'tyagiVolunteer',
  },
  {
    title: 'Tyagi foundation',
    id: 'tyagiFoundation',
  },
  {
    title: 'Tyagi research center',
    id: 'tyagiResearchCenter',
  },
  {
    title: 'Tyagi enterprise',
    id: 'tyagiEnterprise',
  },
  {
    title: 'Global nation',
    id: 'globalNation',
  },
  {
    title: 'GCO Nursery',
    id: 'gcoNursery',
  },
  {
    title: 'Treelanching',
    id: 'treelanching',
  },
]

const Strength = ({
  tyagiVolunteer,
  tyagiFoundation,
  tyagiResearchCenter,
  tyagiEnterprise,
  treelanching,
}: any) => {
  const [active, setActive] = useState('tyagiVolunteer')
  useEffect(() => {
    window.scrollTo(0, 0)
    setActive(
      window.location.hash?.split('#')[1]
        ? window.location.hash?.split('#')[1]
        : 'tyagiVolunteer'
    )
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
        {active === 'tyagiVolunteer' && (
          <div className="prose dark:prose-invert !max-w-full px-5 text-justify">
            <ReactMarkdown className="w-full">{tyagiVolunteer}</ReactMarkdown>
          </div>
        )}
        {active === 'tyagiFoundation' && (
          <div className="prose dark:prose-invert !max-w-full px-5 text-justify">
            <ReactMarkdown className="w-full">{tyagiFoundation}</ReactMarkdown>
          </div>
        )}
        {active === 'tyagiResearchCenter' && (
          <div className="prose dark:prose-invert !max-w-full px-5 text-justify">
            <ReactMarkdown className="w-full">
              {tyagiResearchCenter}
            </ReactMarkdown>
          </div>
        )}
        {active === 'tyagiEnterprise' && (
          <div className="prose dark:prose-invert !max-w-full px-5 text-justify">
            <ReactMarkdown className="w-full">{tyagiEnterprise}</ReactMarkdown>
          </div>
        )}
        {active === 'treelanching' && (
          <div className="prose dark:prose-invert !max-w-full px-5 text-justify">
            <ReactMarkdown className="w-full">{treelanching}</ReactMarkdown>
          </div>
        )}
      </SweetchLayoutContent>
    </SwitchLayoutParant>
  )
}

export default Strength
