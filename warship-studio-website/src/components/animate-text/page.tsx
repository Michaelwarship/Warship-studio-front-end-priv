'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'

interface AnimateTextProps {
    children: React.ReactNode
    className?: string
    disabled?: boolean
}

export default function AnimateText({
    children,
    className,
    disabled = false,
}: AnimateTextProps) {
    const textRef = useRef<HTMLParagraphElement | null>(null)

    useGSAP(() => {
        if (disabled) return

        const split = new SplitText(textRef.current, {
            type: 'lines, words, chars',
        })

        gsap.from(split.lines, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 90%',
                once: true,
            },
        })
    }, [disabled])

    return (
        <div ref={textRef} className={className}>
            {children}
        </div>
    )
}
