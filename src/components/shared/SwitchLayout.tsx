import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ReactElement, ReactNode, useRef } from 'react'

export const SweetchLayoutSidebar = ({
  children,
  className,
}: {
  children: ReactElement[] | ReactElement
  className?: string
}) => {
  const prentRef = useRef<HTMLDivElement>(null)
  const scrollLeft = () => {
    prentRef.current?.scrollTo({
      left: prentRef?.current?.scrollLeft + 200,
      behavior: 'smooth',
    })
  }
  const scrollRight = () => {
    prentRef.current?.scrollTo({
      left: prentRef?.current?.scrollLeft - 200,
      behavior: 'smooth',
    })
  }
  return (
    <div className="flex justify-center items-center  md:items-start md:h-full">
      <ArrowLeft
        onClick={scrollLeft}
        className="size-5 text-green-600 block md:hidden"
      />
      <div
        ref={prentRef}
        className={cn(
          'flex gap-4 max-w-[80%] overflow-auto scrollbar-none md:flex-col md:w-[300px] border-r dark:border-r-zinc-700',
          className
        )}
      >
        {children}
      </div>
      <ArrowRight onClick={scrollRight} className="size-5 text-green-600 block md:hidden" />
    </div>
  )
}

export const SweetchLayoutContent = ({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'border border-zinc-100 dark:border-zinc-700 shadow-md rounded md:flex-1 mt-10 md:mt-0',
        className
      )}
    >
      {children}
    </div>
  )
}

export const SwitchLayoutParant = ({
  children,
  className,
}: {
  children: ReactElement[]
  className?: string
}) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row my-10 md:items-start',
        className
      )}
    >
      {children}
    </div>
  )
}

export const Switch = ({
  children,
  active,
  className,
  onClick,
}: {
  children: ReactElement | string
  active?: boolean
  className?: string
  onClick?: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-2 whitespace-nowrap py-2 text-lg hover:font-semibold opacity-80 hover:opacity-100',
        active &&
          'border-b-2 border-b-green-500 md:border-b-0 md:border-r-2 md:border-r-green-500 font-semibold opacity-100',
        className
      )}
    >
      {children}
    </button>
  )
}
