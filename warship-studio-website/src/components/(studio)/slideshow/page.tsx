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
//         <section className="overflow-x-auto whitespace-nowrap py-5">
//             <div className="flex w-max space-x-5">
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

import { SlideShowCard } from '@/components'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { StrapiVideo, LottiePlayer } from '@/components'
import {
    useEffect as useReactEffect,
    useRef,
    useState as useReactState,
} from 'react'
import mouseScrollDown from '@/lottie/mouse-scroll-down.json'

function LazyVideo({ src }: { src: string }) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [show, setShow] = useReactState(false)

    useReactEffect(() => {
        if (!ref.current) return

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true)
                    obs.disconnect()
                }
            },
            { rootMargin: '200px', threshold: 0.01 }
        )

        obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        <div ref={ref} className="w-full h-full">
            {show ? (
                <StrapiVideo
                    video={src}
                    preload="metadata"
                    muted
                    playsInline
                    loop
                    autoPlay
                />
            ) : (
                <div className="w-full h-full bg-neutral-800" />
            )}
        </div>
    )
}

export default function SlideShow() {
    const [slideShow, setSlideShow] = useState<any[]>([])

    useEffect(() => {
        api.get('studio', {
            params: {
                fields: ['id'],
                populate: {
                    Media: { fields: ['id', 'url'] },
                },
            },
        })
            .then((res) => setSlideShow(res.data.data.Media || []))
            .catch(console.error)
    }, [])

    if (!slideShow.length) return null

    return (
        <section>
            <LottiePlayer
                animationData={mouseScrollDown}
                className="w-10 h-10 lg:w-20 top-61 right-2 lg:h-20 rotate-90 absolute md:top-68 lg:top-82 lg:right-5"
            />

            <div className="overflow-x-auto whitespace-nowrap mt-10 py-5">
                <div className="flex w-max space-x-5">
                    <div className="flex shrink-0 space-x-5">
                        {slideShow.map((slide) => (
                            <SlideShowCard
                                key={slide.id}
                                videoUrl={<LazyVideo src={slide.url} />}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
