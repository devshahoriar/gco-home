'use client'
import { cn } from '@/lib/utils'
import { Loader } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

const SubmtButton = ({
  className,
  title = 'Submit',
}: {
  className?: string
  title?: string
}) => {
  const { pending } = useFormStatus()
  return (
    <Button className={cn('w-20', className)} type="submit" disabled={pending}>
      {pending ? <Loader className="animate-spin size-5" /> : title}
    </Button>
  )
}

export default SubmtButton
