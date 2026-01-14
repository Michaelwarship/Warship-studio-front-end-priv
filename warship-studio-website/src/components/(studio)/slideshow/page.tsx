// 'use client'
// import { SlideShowCard, StrapiVideo } from '@/components'
// import { useRef, useEffect, useState } from 'react'
// import { api } from '@/lib/api'

// export default function SlideShow() {
//     const [slideShow, setSlideShow] = useState<any[]>([])

//     useEffect(() => {
//         api.get('/studio', { params: { populate: '*' } })
//             .then((res) => {
//                 setSlideShow(res.data.data.Media)
//             })
//             .catch(console.error)
//     }, [])

//     if (!slideShow.length) return null

//     return (
//         <section className="overflow-x-auto pause-zone whitespace-nowrap py-5">
//             <div className="flex w-max animate-scroll space-x-5">
//                 <div className="flex shrink-0 space-x-5">
//                     {slideShow.map((slide) => (
//                         <SlideShowCard
//                             key={slide.id}
//                             videoUrl={<StrapiVideo video={slide.url} />}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

'use client'
import { SlideShowCard, StrapiVideo } from '@/components'
import { useEffect, useRef, useState } from 'react'
import { api } from '@/lib/api'

export default function SlideShow() {
    const [slideShow, setSlideShow] = useState<any[]>([])
    const containerRef = useRef<HTMLDivElement | null>(null)
    const userInteracting = useRef(false)

    useEffect(() => {
        api.get('/studio', { params: { populate: '*' } })
            .then((res) => setSlideShow(res.data.data.Media))
            .catch(console.error)
    }, [])

    // duplicate enough to fill scroll area for seamless loop
    const duplicatedSlides = Array.from({ length: 5 }).flatMap(() => slideShow)

    useEffect(() => {
        const el = containerRef.current
        if (!el || duplicatedSlides.length === 0) return

        const speed = 1.7
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
                // modulus keeps scroll smooth and infinite
                el.scrollLeft = x % (el.scrollWidth / 5)
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
    }, [duplicatedSlides])

    if (!slideShow.length) return null

    return (
        <section
            ref={containerRef}
            className="overflow-x-auto whitespace-nowrap py-5 cursor-grab"
            style={{ scrollBehavior: 'auto' }}
        >
            <div className="flex w-max space-x-5">
                {duplicatedSlides.map((slide, i) => (
                    <SlideShowCard
                        key={i}
                        videoUrl={<StrapiVideo video={slide.url} />}
                    />
                ))}
            </div>
        </section>
    )
}
