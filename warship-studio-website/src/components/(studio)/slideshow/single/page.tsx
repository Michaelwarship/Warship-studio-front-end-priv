import { VideoEmbed } from '@/components'

interface CardProps {
    videoUrl?: string
}

export default function SlideShowCard({ videoUrl }: CardProps) {
    return (
        <section className="flex-shrink-0">
            <div
                className="
                    relative
                    w-[300px]
                    sm:w-[400px]
                    md:w-[300px] 
                    lg:w-[404px] 
                    xl:w-[504px] 
                    2xl:w-[604px] 
                    aspect-[16/9]
                    bg-[#999999]
                    rounded-[5px]
                    overflow-hidden
                "
            >
                <VideoEmbed src={videoUrl} />
            </div>
        </section>
    )
}
