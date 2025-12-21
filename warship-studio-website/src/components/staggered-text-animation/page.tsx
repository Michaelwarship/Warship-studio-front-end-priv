'use client'

import React, { useRef, forwardRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    exclude?: boolean
}

const StaggeredTextContainer = forwardRef<HTMLDivElement, Props>(
    ({ children, className, disabled = false, exclude }, ref) => {
        const internalRef = useRef<HTMLDivElement>(null)
        const resolvedRef =
            (ref as React.RefObject<HTMLDivElement>) || internalRef

        useGSAP(() => {
            if (disabled) return
            if (!resolvedRef.current) return

            const items = resolvedRef.current.querySelectorAll(
                ':scope > :not([data-no-anim])'
            )

            gsap.from(items, {
                y: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: resolvedRef.current,
                    start: 'top 80%',
                    once: true,
                },
            })
        }, [disabled])

        return (
            <div
                ref={resolvedRef}
                className={className}
                data-exclude={exclude ? 'true' : undefined}
            >
                {children}
            </div>
        )
    }
)

StaggeredTextContainer.displayName = 'StaggeredTextContainer'
export default StaggeredTextContainer
