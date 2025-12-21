'use client'
import { Button } from '@/components'
interface CardProps {
    image: string
    name: string
    buttonText: string
    className?: string
    style?: React.CSSProperties
}

export default function StudioTeamCard({
    image,
    name,
    buttonText,
    className,
    style,
}: CardProps) {
    return (
        <section>
            <div className="flex flex-col items-center space-y-1 md:space-y-1 lg:space-y-2">
                <div className="bg-[#FAFBD4] w-full aspect-[3/3] overflow-hidden rounded-[5px] overflow-hidden group">
                    <img
                        src={image}
                        alt={name}
                        className={`${className} ${style} w-full h-full object-cover object-top grayscale `}
                    />
                </div>

                <p className="text-[#0A231D] text-[14px] md:text-[18px] ">
                    {name}
                </p>
                <Button
                    title={buttonText}
                    className="!p-0 bg-transparent text-[#969696] !text-[9px] md:!text-[7px] lg:!text-[9px] xl:!text-[12px]"
                    hoverColor="none"
                />
            </div>
        </section>
    )
}
