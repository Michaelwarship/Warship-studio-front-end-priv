'use client'
import { SlideShowCard } from '@/components'
import { useRef, useEffect } from 'react'

export default function SlideShow() {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect((): (() => void) | void => {
        const el = containerRef.current
        if (!el) return

        const handleScroll = (): void => {
            const half = el.scrollWidth / 2

            if (el.scrollLeft >= half) {
                el.scrollLeft -= half
            }

            if (el.scrollLeft <= 0) {
                el.scrollLeft += half
            }
        }

        el.addEventListener('scroll', handleScroll)

        return (): void => {
            el.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <section
            ref={containerRef}
            className="overflow-x-auto pause-zone whitespace-nowrap py-5"
        >
            <div className="flex w-max animate-scroll space-x-5">
                <div className="flex shrink-0 space-x-5">
                    <SlideShowCard videoUrl="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec" />
                    <SlideShowCard videoUrl="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec" />
                    <SlideShowCard videoUrl="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec" />
                    <SlideShowCard videoUrl="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec" />
                </div>

                <div className="flex shrink-0 space-x-5">
                    <SlideShowCard videoUrl="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec" />
                    <SlideShowCard videoUrl="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec" />
                    <SlideShowCard videoUrl="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec" />
                    <SlideShowCard videoUrl="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec" />
                </div>
            </div>
        </section>
    )
}
