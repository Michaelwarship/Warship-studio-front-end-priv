import { ReactNode } from 'react'
import Button from '@/components/button/page'

interface CardProps {
    buttonText: string
    description: ReactNode
}

export default function StudioVisionCard({
    description,
    buttonText,
}: CardProps) {
    return (
        <section>
            <div className="flex flex-col space-y-5 md:w-55 lg:w-80 xl:w-90 2xl:w-115 pl-5 pr-10 sm:pl-10 md:pr-5 md:py-1 md:pb-5 lg:pr-10 lg:py-5 xl:py-5 2xl:py-10 ">
                <Button
                    title={buttonText}
                    className="bg-transparent !px-0 !py-0 text-[12px] !text-[#969696] text-black mt-4 md:mt-5 lg:mt-5"
                />

                <p className="hyphens-auto break-words text-[#0A231D] text-[20px] leading-[20px] sm:text-[40px] sm:leading-[35px] md:leading-[25px] lg:leading-[30px] xl:leading-[35px] 2xl:leading-[25px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[28px]">
                    {description}
                </p>
            </div>
        </section>
    )
}
