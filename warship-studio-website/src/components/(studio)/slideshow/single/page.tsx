import { VideoEmbed } from '@/components'
import React from 'react'

interface CardProps {
    videoUrl?: React.ReactNode
}

export default function SlideShowCard({ videoUrl }: CardProps) {
    return (
        <section className="flex-shrink-0">
            <div
                className="
                    relative
                    w-[400px]
                    sm:w-[400px]
                    md:w-[300px] 
                    lg:w-[404px] 
                    xl:w-[504px] 
                    2xl:w-[604px] 
                    aspect-[16/9]
                    bg-[#ffffff]
                    rounded-[5px]
                    overflow-hidden
                "
            >
                {videoUrl}
            </div>
        </section>
    )
}
