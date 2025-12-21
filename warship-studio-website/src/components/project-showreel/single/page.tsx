import { Button, VideoEmbed } from '@/components'

interface CardProps {
    tagLine: string
    videoUrl?: string
    title: string
}

export default function ProjectReelCard({
    tagLine,
    videoUrl,
    title,
}: CardProps) {
    return (
        <section>
            <div className="space-y-5">
                <div className="relative w-[300px] sm:w-[350px] md:w-[300px] lg:w-[200px] xl:w-[250px] 2xl:w-[303px] aspect-[6/6] md:aspect-[10/12] lg:aspect-[10/12] xl:aspect-[10/12] 2xl:aspect-[10/12] bg-[#999999] rounded-[5px] overflow-hidden">
                    <VideoEmbed
                        src={videoUrl}
                        className="scale-200 md:scale-250 lg:scale-250"
                    />
                </div>

                <div className="space-y-2">
                    <p className="uppercase text-[12px] md:text-[14px] font-geistMono text-[#969696]">
                        {tagLine}
                    </p>
                    <p className="text-[28px] md:text-[28px] lg:text-[20px] xl:text-[28px] text-[#0A231D]">
                        {title}
                    </p>
                    {/* <Button
                        title={buttonText}
                        className="bg-transparent !p-0"
                    /> */}
                </div>
            </div>
        </section>
    )
}
