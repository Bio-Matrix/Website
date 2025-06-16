'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up'
  delay?: number
  duration?: number
}

const animationVariants = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  'slide-left': {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  'slide-right': {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  'scale-up': {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
}

export default function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const variant = animationVariants[animation]

  // If user prefers reduced motion, just show a simple opacity fade
  const reducedMotionVariant = {
    initial: 'opacity-0',
    animate: 'opacity-100',
  }

  const activeVariant = prefersReducedMotion ? reducedMotionVariant : variant

  return (
    <section
      ref={ref}
      className={cn(
        'transition-all ease-out motion-reduce:transition-opacity',
        isIntersecting ? activeVariant.animate : activeVariant.initial,
        className
      )}
      style={{
        transitionDuration: prefersReducedMotion ? '200ms' : `${duration}ms`,
        transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </section>
  )
} 