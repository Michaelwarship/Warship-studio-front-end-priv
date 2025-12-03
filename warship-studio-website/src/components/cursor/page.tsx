'use client'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'

export default function Cursor() {
    useEffect(() => {
        const colors = ['#FF3600', '#FFAA00', '#0A231D', '#07E272', '#000000']

        const randomColor = () =>
            colors[Math.floor(Math.random() * colors.length)]

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event
            gsap.to('#cursor', {
                x: clientX - 20 / 2,
                y: clientY - 20 / 2,
                duration: 1,
                delay: 0,
                ease: 'power4.out',
                backgroundColor: randomColor(),
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return (
        <div
            id="cursor"
            className="hidden lg:block fixed top-0 left-0 w-[20px] h-[20px] rounded-full pointer-events-none z-9999"
        />
    )
}
