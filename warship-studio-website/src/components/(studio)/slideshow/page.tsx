'use client'
import { SlideShowCard, StrapiVideo } from '@/components'
import { useRef, useEffect, useState } from 'react'
import { api } from '@/lib/api'

export default function SlideShow() {
    const [slideShow, setSlideShow] = useState<any[]>([])

    useEffect(() => {
        api.get('/studio', { params: { populate: '*' } })
            .then((res) => {
                setSlideShow(res.data.data.Media)
            })
            .catch(console.error)
    }, [])

    if (!slideShow.length) return null

    return (
        <section className="overflow-x-auto pause-zone whitespace-nowrap py-5">
            <div className="flex w-max animate-scroll space-x-5">
                <div className="flex shrink-0 space-x-5">
                    {slideShow.map((slide) => (
                        <SlideShowCard
                            key={slide.id}
                            videoUrl={<StrapiVideo video={slide.url} />}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
