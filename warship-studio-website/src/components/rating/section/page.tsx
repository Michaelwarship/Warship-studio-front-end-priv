import { ReactNode } from 'react'
import { Button, AnimateText } from '@/components'

interface CardProps {
    buttonText: string
    description: ReactNode
    image: React.ReactNode
    title: ReactNode
    name: string
}

export default function RatingCard({
    title,
    description,
    image,
    buttonText,
    name,
}: CardProps) {
    return (
        <section>
            <div className="flex flex-col space-y-5 md:w-90 lg:w-110 xl:w-150 2xl:w-115 pl-5 pr-10 sm:pl-10 md:pr-5 md:py-1 md:pb-5 lg:pr-10 lg:py-5 xl:py-5 2xl:py-10 ">
                <Button
                    title={buttonText}
                    className="bg-transparent !px-0 !py-0 text-[12px] !text-[#969696] text-black mt-4 md:mt-5 lg:mt-5"
                    hoverColor="bg-none"
                />

                <AnimateText>
                    <p className="hyphens-auto break-words text-[#0A231D] text-[#0A231D] text-[20px] leading-[25px] sm:text-[40px] sm:leading-[45px] md:leading-[25px] lg:leading-[30px] xl:leading-[45px] 2xl:leading-[30px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[28px]">
                        {description}
                    </p>
                </AnimateText>

                <div className="flex space-x-3 md:flex-col md:space-y-5 md:space-x-0">
                    <AnimateText>
                        <div className="w-12 h-12 md:w-15 md:h-15 rounded-[50px] overflow-hidden">
                            {image}
                        </div>
                    </AnimateText>

                    <AnimateText>
                        <p className=" lg:text-[22px] text-[#0A231D]">{name}</p>
                        <p className=" lg:text-[22px] text-[#AFAFAF]">
                            {title}
                        </p>
                    </AnimateText>
                </div>
            </div>
        </section>
    )
}
