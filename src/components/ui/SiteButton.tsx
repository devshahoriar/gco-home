import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
  'border border-white text-black bg-white px rounded-[2px] px-2 py-2 hover:scale-105 z-20 uppercase font-medium',
  {
    variants: {
      variant: {
        default:
          '',
          bordered: "bg-opacity-0"
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const SiteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

SiteButton.displayName = 'SiteButton'
export default SiteButton
