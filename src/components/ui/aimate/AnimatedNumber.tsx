'use client'

import { useEffect, useRef } from 'react'
import {
  MotionValue,
  motion,
  useInView,
  useSpring,
  useTransform,
} from 'framer-motion'
import '@/styles/animateStyles.css'

interface AnimatedNumberProps {
  value: number
  mass?: number
  stiffness?: number
  damping?: number
  precision?: number
  format?: (value: number) => string
  onAnimationStart?: () => void
  onAnimationComplete?: () => void
}

export default function AnimatedNumber({
  value,
  mass = 0.8,
  stiffness = 100,
  damping = 15,
  precision = 0,
  format = (num) => num.toLocaleString(),
  onAnimationStart,
  onAnimationComplete,
}: AnimatedNumberProps) {
  const spring = useSpring(0, { mass, stiffness, damping })
  const display: MotionValue<string> = useTransform(spring, (current) =>
    format(parseFloat(current.toFixed(precision)))
  )
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    // spring.set(value)
    if (onAnimationStart) onAnimationStart()
    const unsubscribe = spring.onChange(() => {
      if (spring.get() === value && onAnimationComplete) onAnimationComplete()
    })
    return () => unsubscribe()
  }, [spring, value, onAnimationStart, onAnimationComplete])

  useEffect(() => {
    if (isInView) spring.set(value)
    else spring.set(0)
  }, [isInView, spring, value])

  return (
    <motion.span ref={ref} className="animateNumber">
      {display}
    </motion.span>
  )
}
