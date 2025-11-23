import { ReactNode } from 'react'
import Button from '@/components/button/page'

interface CardProps {
    buttonText: string
    description: ReactNode
    image: string
    title: ReactNode
}

export default function RatingCard({
    title,
    description,
    image,
    buttonText,
}: CardProps) {
    return (
        <section>
            <div className="flex flex-col space-y-5 md:w-55 lg:w-80 xl:w-90 2xl:w-115 pl-5 pr-10 sm:pl-10 md:pr-5 md:py-1 md:pb-5 lg:pr-10 lg:py-5 xl:py-5 2xl:py-10 ">
                <Button
                    title={buttonText}
                    className="bg-transparent !px-0 !py-0 text-[12px] !text-[#969696] text-black mt-4 md:mt-5 lg:mt-5"
                />

                <p className="text-[#0A231D] text-[20px] leading-[20px] sm:text-[40px] sm:leading-[35px] md:leading-[25px] lg:leading-[30px] xl:leading-[45px] 2xl:leading-[25px] md:text-[20px] lg:text-[30px] xl:text-[45px] 2xl:text-[28px]">
                    {description}
                </p>

                <div className="flex space-x-3 md:flex-col md:space-y-5 md:space-x-0">
                    <div className="w-12 h-12 md:w-15 md:h-15 rounded-[50px] overflow-hidden">
                        <img
                            src={image}
                            alt={buttonText}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p className=" lg:text-[22px] text-[#0A231D]">{title}</p>
                </div>
            </div>
        </section>
    )
}
