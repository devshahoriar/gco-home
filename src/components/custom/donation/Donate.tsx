/* eslint-disable react/no-unescaped-entities */
'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

const Donate = () => {
  const [dfDoante, setDfDonate] = useState(1)
  return (
    <div className="w-full md:w-1/2 space-y-4">
      <div className="border-b space-y-2">
        <h1 className="text-xl">PLANT TREES WHERE THEY'RE NEEDED MOST</h1>
        <p className="text-xs">ONE DOLLAR. ONE TREE.</p>
      </div>
      <div>
        <p className="w-[90%] leading-6">
          When trees are planted in the right place, at the right time, and for
          the right reasons, they can help address many of the environmental and
          social challenges we face. Learn more
        </p>
      </div>
      <div>
        <p>With your help, we will:</p>
        <ul className="[&>li]:opacity-50 [&>li]:text-sm [&>*]:ml-2 checklist">
          <li>Plant trees that will combat climate change as they grow</li>
          <li>
            Restore critical habitat for the millions of species that depend on
            forests
          </li>
          <li>
            Engage local communities, stabilize livelihoods, and improve food
            security
          </li>
        </ul>
      </div>
      <div className="border p-3 w-[100%] md:w-[530px] space-y-3">
        <div className="flex justify-between gap-2">
          <button className="w-1/2 bg-main py-2 rounded-[2px] text-white font-semibold">
            One Time Donation
          </button>
          <button className="w-1/2 bg-main py-2 rounded-[2px] text-white font-semibold">
            Auto Donation
          </button>
        </div>
        <div>
          <p className="text-xs font-semibold">
            NUMBER OF TREES TO BE PLANTED:
          </p>
          <div className="flex justify-evenly [&>*]:flex-1 gap-3 mt-3">
            <button
              onClick={() => setDfDonate(1)}
              className={cn(
                'hover:bg-main bg-white text-black border py-2 rounded-[2px] hover:text-white font-semibold',
                dfDoante === 1 && 'bg-main text-white'
              )}
            >
              1
            </button>
            <button
              onClick={() => setDfDonate(20)}
              className={cn(
                'hover:bg-main bg-white text-black border py-2 rounded-[2px] hover:text-white font-semibold',
                dfDoante === 20 && 'bg-main text-white'
              )}
            >
              20
            </button>
            <button
              onClick={() => setDfDonate(30)}
              className={cn(
                'hover:bg-main bg-white text-black border py-2 rounded-[2px] hover:text-white font-semibold',
                dfDoante === 30 && 'bg-main text-white'
              )}
            >
              30
            </button>
            <button
              onClick={() => setDfDonate(50)}
              className={cn(
                'hover:bg-main bg-white text-black border py-2 rounded-[2px] hover:text-white font-semibold',
                dfDoante === 50 && 'bg-main text-white'
              )}
            >
              50
            </button>
            <button
              onClick={() => setDfDonate(0)}
              className={cn(
                'hover:bg-main bg-white text-black border py-2 rounded-[2px] hover:text-white font-semibold',
                dfDoante === 0 && 'bg-main text-white'
              )}
            >
              other
            </button>
          </div>
        </div>
        <div className="flex border items-center font-semibold">
          <p className="border-r p-2">$</p>
          <input
            value={dfDoante !== 0 ? dfDoante : ''}
            className="flex-1 border-none outline-none text-base mx-2"
            type="text"
          />
          <p className="border-l p-2">TAKA</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default Donate