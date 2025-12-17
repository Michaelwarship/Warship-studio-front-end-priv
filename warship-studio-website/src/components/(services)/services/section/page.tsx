import { Button, AnimateText, StaggeredTextContainer } from '@/components'
import { ReactNode } from 'react'
// import Link from 'next/link'

interface CardProps {
    number: string
    title: ReactNode
    description: ReactNode
    serviceOne: ReactNode
    serviceTwo: ReactNode
    serviceThree: ReactNode
    serviceFour: ReactNode
    serviceFive?: ReactNode
    serviceSix?: ReactNode
    buttonText: string
    // path: string
}

export default function ServiceCard({
    number,
    title,
    description,
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    serviceFive,
    serviceSix,
    buttonText,
    // path,
}: CardProps) {
    return (
        <section className=" [&>*]:border-[#E0E0E0] [&>*]:border-b-1 ">
            <StaggeredTextContainer className="space-y-10 md:space-y-7 lg:space-y-0 lg:flex justify-between px-5 py-15 sm:px-10 md:px-15 lg:px-20 xl:px-30 2xl:px-40 md:py-30">
                <div className="space-y-5 flex-1">
                    <AnimateText>
                        <p className="text-[14px] text-[#969696]">{number}</p>
                    </AnimateText>
                    <AnimateText>
                        <p className="text-[50px] md:text-[60px] lg:text-[35px] xl:text-[55px] text-[#AEAEAE] leading-[1]">
                            {title}
                        </p>
                    </AnimateText>
                </div>

                <div className="space-y-7 flex-1">
                    <AnimateText>
                        <p className="hyphens-auto break-words text-[25px] sm:leading-[35px] md:leading-[35px] lg:leading-[30px] xl:leading-[40px] 2xl:leading-[40px] md:text-[30px] lg:text-[25px] xl:text-[30px] text-[#0A231D]">
                            {description}
                        </p>
                    </AnimateText>

                    <div className="space-y-2 md:space-y-7 md:space-y-0">
                        <div className="space-y-2 md:flex md:space-x-5 md:space-y-0">
                            <AnimateText>
                                <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                    {serviceOne}
                                </p>
                            </AnimateText>
                            <AnimateText>
                                <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                    {serviceTwo}
                                </p>
                            </AnimateText>
                        </div>

                        <div className="space-y-2 md:flex md:space-x-5 md:space-y-0">
                            <AnimateText>
                                <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                    {serviceThree}
                                </p>
                            </AnimateText>
                            <AnimateText>
                                <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                    {serviceFour}
                                </p>
                            </AnimateText>
                        </div>

                        <div className="space-y-2 md:flex md:space-x-5 md:space-y-0">
                            <AnimateText>
                                <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                    {serviceFive}
                                </p>
                            </AnimateText>
                            <AnimateText>
                                <p className="text-[14px] md:text-[20px] font-geistMono text-[#969696]">
                                    {serviceSix}
                                </p>
                            </AnimateText>
                        </div>
                    </div>

                    <Button
                        title={buttonText}
                        className="text-[#0A231D] bg-transparent !p-0"
                    />
                </div>
            </StaggeredTextContainer>
        </section>
    )
}
