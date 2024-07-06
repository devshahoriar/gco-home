'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

const DonationBottomTab = () => {
  const [activeTab, setActiveTab] = useState('Overview')
  return (
    <div className='md:w-1/2'>
      <div className="[&>button]:uppercase w-full flex justify-between border-b-slate-300 border-b-[1px]">
        <button
          onClick={() => setActiveTab('Overview')}
          className={cn(
            'border-b-[4px] border-transparent text-xs md:text-sm',
            activeTab === 'Overview' && '!border-slate-300'
          )}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('Impact')}
          className={cn(
            'border-b-[4px] border-transparent text-xs md:text-sm',
            activeTab === 'Impact' && '!border-slate-300'
          )}
        >
          Impact
        </button>
        <button
          onClick={() => setActiveTab('WHAT YOU GET')}
          className={cn(
            'border-b-[4px] border-transparent text-xs md:text-sm',
            activeTab === 'WHAT YOU GET' && '!border-slate-300'
          )}
        >
          WHAT YOU GET
        </button>
        <button
          onClick={() => setActiveTab('TREE SPECIES')}
          className={cn(
            'border-b-[4px] border-transparent text-xs md:text-sm',
            activeTab === 'TREE SPECIES' && '!border-slate-300'
          )}
        >
          TREE SPECIES
        </button>
      </div>
      <div className='mt-5 h-[150px]'>
        {activeTab === 'Overview' && (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            pariatur accusantium quaerat, sint explicabo adipisci doloribus
            porro error optio ipsa.
          </p>
        )}
        {activeTab === 'Impact' && (
          <p>
            Lorem ipsum dolor sit😊😊😊😊😊 amet consectetur, adipisicing elit.
            Inventore expedita ipsam, iure ducimus libero odio! Consequatur
            architecto esse adipisci tenetur.
          </p>
        )}
        {activeTab === 'WHAT YOU GET' && (
          <p>
            Lorem ipsum dolor sit😊😊😊😊😊 amet consectetur, adipisicing elit.
            Inventore expedita ipsam, iure
          </p>
        )}
        {activeTab === 'TREE SPECIES' && (
          <p>
            Lorem ipsum dolor sit😊😊😊😊😊💕💕💕💕😂😐😐 amet consectetur, adipisicing elit.
            Inventore expedita ipsam, iure
          </p>
        )}
      </div>
    </div>
  )
}
export default DonationBottomTab
