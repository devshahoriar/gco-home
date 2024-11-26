import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ReactElement } from 'react'

export const SweetchLayoutSidebar = ({
  children,
  className,
}: {
  children: ReactElement[] | ReactElement
  className?: string
}) => {
  return (
    <div className="flex justify-center items-center  md:items-start md:h-full">
      <ArrowLeft className="size-7 text-green-600 block md:hidden" />
      <div
        className={cn(
          'flex gap-4 max-w-[80%] overflow-auto scrollbar-none md:flex-col md:w-[300px] border-r dark:border-r-zinc-700',
          className
        )}
      >
        {children}
      </div>
      <ArrowRight className="size-7 text-green-600 block md:hidden" />
    </div>
  )
}

export const SweetchLayoutContent = ({
  children,
  className,
}: {
  children: ReactElement
  className?: string
}) => {
  return (
    <div
      className={cn(
        'border border-zinc-100 dark:border-zinc-700 shadow-md rounded mt-5 md:flex-1 md:mr-6 md:mt-2 p-2',
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
