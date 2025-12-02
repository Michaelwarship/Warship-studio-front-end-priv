'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
    end: number
    duration?: number
    className?: string
    as?: 'p' | 'div' | 'span'
    prefix?: string
    suffix?: string
}

export default function AnimatedCounter({
    end,
    duration = 1500,
    className = '',
    as = 'p',
    prefix = '',
    suffix = '',
}: AnimatedCounterProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        if (!inView) return

        let startTime: number | null = null

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp

            const progress = Math.min((timestamp - startTime) / duration, 1)
            const currentValue = Number((progress * end).toFixed(1))
            setValue(currentValue)

            if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
    }, [inView, end, duration])

    const Tag = as

    return (
        <Tag ref={ref} className={className}>
            {prefix}
            {value}
            {suffix}
        </Tag>
    )
}
