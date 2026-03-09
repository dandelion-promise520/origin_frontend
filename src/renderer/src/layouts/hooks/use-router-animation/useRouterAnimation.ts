import gsap from 'gsap'
import { useCallback } from 'react'
import { useNavigate } from 'react-router'

import { UseRouterAnimationProps } from './types'

export const useRouterAnimation = (): {
  slider: ({ AnimationRef, navigateTo }: UseRouterAnimationProps) => void
} => {
  const navigate = useNavigate()

  const slider = useCallback(
    ({ AnimationRef, navigateTo }: UseRouterAnimationProps): void => {
      gsap.to(AnimationRef, {
        duration: 0.4,
        opacity: 0,
        x: 50,
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        onComplete: () => {
          navigate(navigateTo)

          gsap.set(AnimationRef, {
            opacity: 0,
            x: -50
          })

          gsap.to(AnimationRef, {
            duration: 0.4,
            opacity: 1,
            x: 0,
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
          })
        }
      })
    },
    [navigate]
  )

  return { slider }
}
