import { Button } from '@/components'
import { ReactNode } from 'react'

interface CardProps {
    number: string
    title: ReactNode
    description: ReactNode
    serviceOne: ReactNode
    serviceTwo: ReactNode
    serviceThree: ReactNode
    serviceFour: ReactNode
    buttonText: string
}

export default function ServiceCard({
    number,
    title,
    description,
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    buttonText,
}: CardProps) {
    return (
        <section className=" [&>*]:border-[#E0E0E0] [&>*]:border-b-1 ">
            <div className="space-y-10 md:space-y-7 lg:space-y-0 lg:flex justify-between px-5 py-15 lg:px-20 md:py-30">
                <div className="space-y-5 flex-1">
                    <p className="text-[14px] text-[#969696]">{number}</p>
                    <p className="text-[50px] md:text-[60px] lg:text-[35px] xl:text-[55px] text-[#AEAEAE] leading-[1]">
                        {title}
                    </p>
                </div>

                <div className="space-y-7 flex-1">
                    <p className="hyphens-auto break-words text-[25px] leading-[1] md:text-[30px] lg:text-[25px] xl:text-[30px] text-[#0A231D]">
                        {description}
                    </p>

                    <div className="space-y-2 md:space-y-7 md:space-y-0">
                        <div className="space-y-2 md:flex md:space-x-5 md:space-y-0">
                            <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                {serviceOne}
                            </p>
                            <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                {serviceTwo}
                            </p>
                        </div>

                        <div className="space-y-2 md:flex md:space-x-5 md:space-y-0">
                            <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                {serviceThree}
                            </p>
                            <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                {serviceFour}
                            </p>
                        </div>
                    </div>
                    <Button
                        title={buttonText}
                        className="text-[#0A231D] bg-transparent !p-0"
                    />
                </div>
            </div>
        </section>
    )
}
