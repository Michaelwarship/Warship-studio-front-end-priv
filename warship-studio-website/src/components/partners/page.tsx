'use client'
import { SingleCard } from '@/components'
import { useRef, useEffect } from 'react'

export default function PartnersRow() {
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
            className="overflow-x-auto whitespace-nowrap"
        >
            <div className="flex w-max animate-scroll">
                <div className="flex shrink-0 border-0 border-[#E0E0E0] [&>*]:border-t [&>*]:border-r [&>*]:border-b-1  [&>*]:border-[#E0E0E0] [&>*:last-child]:border-r-0">
                    <SingleCard image="/partners/optimum.svg" />
                    <SingleCard image="/partners/climaqx.svg" />
                    <SingleCard image="/partners/deterrence.svg" />
                    <SingleCard image="/partners/dope.svg" />
                    <SingleCard image="/partners/kuipers.svg" />
                    <SingleCard image="/partners/mainland.svg" />
                    <SingleCard image="/partners/micheal-warship.svg" />
                    <SingleCard image="/partners/my-area.svg" />
                    <SingleCard image="/partners/onoya.svg" />
                    <SingleCard image="/partners/subtract.svg" />
                    <SingleCard image="/partners/trust-bank.svg" />
                    <SingleCard image="/partners/turing-heights.svg" />
                    <SingleCard image="/partners/chowsafari.svg" />
                </div>

                <div className="flex shrink-0 border-0 border-[#E0E0E0] [&>*]:border-t [&>*]:border-r [&>*]:border-b-1 [&>*]:border-[#E0E0E0] [&>*:last-child]:border-r-0 [&>*:first-child]:border-l-1">
                    <SingleCard image="/partners/optimum.svg" />
                    <SingleCard image="/partners/climaqx.svg" />
                    <SingleCard image="/partners/deterrence.svg" />
                    <SingleCard image="/partners/dope.svg" />
                    <SingleCard image="/partners/kuipers.svg" />
                    <SingleCard image="/partners/mainland.svg" />
                    <SingleCard image="/partners/micheal-warship.svg" />
                    <SingleCard image="/partners/my-area.svg" />
                    <SingleCard image="/partners/onoya.svg" />
                    <SingleCard image="/partners/subtract.svg" />
                    <SingleCard image="/partners/trust-bank.svg" />
                    <SingleCard image="/partners/turing-heights.svg" />
                    <SingleCard image="/partners/chowsafari.svg" />
                </div>
            </div>
        </section>
    )
}
