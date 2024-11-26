'use client'
import {
  SweetchLayoutContent,
  SweetchLayoutSidebar,
  Switch,
  SwitchLayoutParant,
} from '@/components/shared/SwitchLayout'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

const View = ({ data }: any) => {
  const keys = Object.keys(data)
  const [active, setActive] = useState(keys[0])
  const curentItem = data[active]

  return (
    <SwitchLayoutParant className="mt-5">
      <SweetchLayoutSidebar>
        {keys.map((key: any) => (
          <Switch
            className="capitalize text-start"
            key={key}
            active={active === key}
            onClick={() => setActive(key)}
          >
            {key}
          </Switch>
        ))}
      </SweetchLayoutSidebar>
      <SweetchLayoutContent>
        <div className="m-5">
          {curentItem.map((item: any, index: number) => (
            <div key={index} className="mb-10">
              <DilogView
                fileName={item?.desc}
                slogan={item?.slogan}
                title={item?.title}
              />
              <p className='font-light'>{item.slogan}</p>
            </div>
          ))}
        </div>
      </SweetchLayoutContent>
    </SwitchLayoutParant>
  )
}

const DilogView = ({
  fileName,
  title,
  slogan,
}: {
  title: string
  fileName: string
  slogan: string
}) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/api/markdown?file=${fileName}`)
        const data = await response.json()
        if (data.content) {
          setContent(data.content)
        }
      } catch (error) {
        console.error('Error fetching markdown:', error)
      }
    }

    fetchMarkdown()
  }, [fileName])

  return (
    <Dialog>
      <DialogTrigger>
        <h2 className="text-2xl font-semibold capitalize hover:underline text-start">{title}</h2>
      </DialogTrigger>
      <DialogContent className="md:w-[90vw] max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{slogan}</DialogDescription>
        </DialogHeader>
        <div className="prose dark:prose-invert max-w-none overflow-y-auto max-h-[70vh] p-4">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default View
