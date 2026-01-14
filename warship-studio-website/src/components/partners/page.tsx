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
import { useEffect, useRef, useState } from 'react'
import { api } from '@/lib/api'

export default function PartnersRow() {
    const [partners, setPartners] = useState<any[]>([])
    const containerRef = useRef<HTMLDivElement | null>(null)
    const userInteracting = useRef(false)

    useEffect(() => {
        api.get('/home-page', { params: { populate: '*' } })
            .then((res) => setPartners(res.data.data.Brand_Logos))
            .catch(console.error)
    }, [])

    // duplicate enough to fill scroll and prevent jump
    const duplicatedPartners = Array.from({ length: 5 }).flatMap(() => partners)

    useEffect(() => {
        const el = containerRef.current
        if (!el || duplicatedPartners.length === 0) return

        const speed = 1
        let x = 0
        let raf: number

        const onMouseDown = () => (userInteracting.current = true)
        const onMouseUp = () => (userInteracting.current = false)
        el.addEventListener('mousedown', onMouseDown)
        el.addEventListener('mouseup', onMouseUp)
        el.addEventListener('mouseleave', onMouseUp)
        el.addEventListener('touchstart', onMouseDown)
        el.addEventListener('touchend', onMouseUp)

        const loop = () => {
            if (!userInteracting.current) {
                x += speed
                // modulus trick ensures smooth wrap-around
                el.scrollLeft = x % (el.scrollWidth / 5) // total width of one set
            }
            raf = requestAnimationFrame(loop)
        }

        raf = requestAnimationFrame(loop)

        return () => {
            cancelAnimationFrame(raf)
            el.removeEventListener('mousedown', onMouseDown)
            el.removeEventListener('mouseup', onMouseUp)
            el.removeEventListener('mouseleave', onMouseUp)
            el.removeEventListener('touchstart', onMouseDown)
            el.removeEventListener('touchend', onMouseUp)
        }
    }, [duplicatedPartners])

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
                        key={i}
                        image={
                            <StrapiImage
                                image={brand.url}
                                className="w-full h-full"
                            />
                        }
                    />
                ))}
            </div>
        </section>
    )
}
