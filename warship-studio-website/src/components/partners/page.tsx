// 'use client'
// import { SingleCard, StrapiImage } from '@/components'
// import { useRef, useEffect, useState } from 'react'
// import { api } from '@/lib/api'

// export default function PartnersRow() {
//     const [partners, setPartners] = useState<any[]>([])

//     useEffect(() => {
//         api.get('/home-page', { params: { populate: '*' } })
//             .then((res) => {
//                 setPartners(res.data.data.Brand_Logos)
//             })
//             .catch(console.error)
//     }, [])

//     if (!partners.length) return null

//     return (
//         <section className="overflow-x-auto whitespace-nowrap">
//             <div className="flex w-max animate-scroll">
//                 <div className="flex shrink-0 border-0 border-[#E0E0E0] [&>*]:border-t [&>*]:border-r [&>*]:border-b-1  [&>*]:border-[#E0E0E0] [&>*:last-child]:border-r-0">
//                     {partners.map((brand) => (
//                         <SingleCard
//                             key={brand.id}
//                             image={
//                                 <StrapiImage
//                                     image={brand.url}
//                                     className="w-full h-full"
//                                 />
//                             }
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

'use client'

import { SingleCard, StrapiImage } from '@/components'
import { useEffect, useMemo, useRef, useState } from 'react'
import { api } from '@/lib/api'

export default function PartnersRow() {
    const [partners, setPartners] = useState<any[]>([])
    const containerRef = useRef<HTMLDivElement | null>(null)
    const userInteracting = useRef(false)

    const DUPES = 5
    const touchOpts: AddEventListenerOptions = { passive: true }

    useEffect(() => {
        api.get('home-page', {
            params: {
                fields: ['id'],
                populate: {
                    Brand_Logos: {
                        fields: [
                            'url',
                            'formats',
                            'width',
                            'height',
                            'alternativeText',
                        ],
                    },
                },
            },
        })
            .then((res) => setPartners(res.data.data.Brand_Logos || []))
            .catch(console.error)
    }, [])

    // Duplicate enough to fill scroll and prevent jump (memoized)
    const duplicatedPartners = useMemo(() => {
        return Array.from({ length: DUPES }).flatMap(() => partners)
    }, [partners])

    useEffect(() => {
        const el = containerRef.current
        if (!el || duplicatedPartners.length === 0) return

        const speed = 0.6
        let x = el.scrollLeft
        let raf = 0
        let visible = true

        const onDown = () => (userInteracting.current = true)
        const onUp = () => (userInteracting.current = false)

        el.addEventListener('mousedown', onDown)
        el.addEventListener('mouseup', onUp)
        el.addEventListener('mouseleave', onUp)
        el.addEventListener('touchstart', onDown, touchOpts)
        el.addEventListener('touchend', onUp)

        const io = new IntersectionObserver(
            ([entry]) => {
                visible = entry.isIntersecting
            },
            { threshold: 0.01 }
        )

        io.observe(el)

        const loop = () => {
            if (visible && !userInteracting.current) {
                x += speed
                const oneSetWidth = el.scrollWidth / DUPES
                el.scrollLeft = x % oneSetWidth
            }
            raf = requestAnimationFrame(loop)
        }

        raf = requestAnimationFrame(loop)

        return () => {
            cancelAnimationFrame(raf)
            io.disconnect()

            el.removeEventListener('mousedown', onDown)
            el.removeEventListener('mouseup', onUp)
            el.removeEventListener('mouseleave', onUp)
            el.removeEventListener('touchstart', onDown, touchOpts)
            el.removeEventListener('touchend', onUp)
        }
    }, [duplicatedPartners.length])

    if (!partners.length) return null

    return (
        <section
            ref={containerRef}
            className="overflow-x-auto whitespace-nowrap w-full cursor-grab"
            style={{ scrollBehavior: 'auto' }}
        >
            <div
                className="flex shrink-0 border-0 border-[#E0E0E0]
                [&>*]:border-t [&>*]:border-r [&>*]:border-b-1
                [&>*]:border-[#E0E0E0] [&>*:last-child]:border-r-0 w-max"
            >
                {duplicatedPartners.map((brand, i) => (
                    <SingleCard
                        key={`${brand?.id ?? 'brand'}-${i}`}
                        image={
                            <StrapiImage
                                image={brand} // pass the whole object (like Hero_Image)
                                format="thumbnail"
                                className="w-full h-full"
                            />
                        }
                    />
                ))}
            </div>
        </section>
    )
}
