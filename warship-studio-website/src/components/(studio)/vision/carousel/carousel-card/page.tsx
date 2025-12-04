import { ReactNode } from 'react'
import { Button } from '@/components'

interface CardProps {
    image: string
    description: ReactNode
    buttonText: string
}

export default function StudioCarouselCard({
    image,
    description,
    buttonText,
}: CardProps) {
    return (
        <section>
            <div className="space-y-5">
                <div className="bg-[#D7D7D7] w-[288px] h-[288px] sm:w-[200px] sm:h-[200px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[288px] 2xl:h-[288px] rounded-[5px] overflow-hidden group">
                    <img
                        src={image}
                        alt={buttonText}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-[288px] sm:w-[200px] md:w-[180px] lg:w-[200px] xl:w-[250px] 2xl:w-[288px]">
                    <p className="hyphens-auto break-words text-[14px] lg:text-[14px] xl:text-[18px] leading-[1]">
                        {description}
                    </p>
                </div>
                <Button
                    title={buttonText}
                    className="!p-0 bg-transparent text-[#969696] !text-[9px] md:!text-[7px] lg:!text-[9px] xl:!text-[12px]"
                />
            </div>
        </section>
    )
}
