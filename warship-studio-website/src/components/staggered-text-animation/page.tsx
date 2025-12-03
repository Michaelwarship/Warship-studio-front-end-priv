'use client'

import React, { useRef } from 'react'
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

export default function StaggeredTextContainer({
    children,
    className,
    disabled = false,
    exclude,
}: Props) {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (disabled) return
        if (!containerRef.current) return

        const items = containerRef.current.querySelectorAll(
            ':scope > :not([data-no-anim])'
        )

        gsap.from(items, {
            y: 80,
            opacity: 0,
            stagger: 0.4,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                once: true,
            },
        })
    }, [disabled])

    return (
        <div
            ref={containerRef}
            className={className}
            data-exclude={exclude ? 'true' : undefined}
        >
            {children}
        </div>
    )
}
