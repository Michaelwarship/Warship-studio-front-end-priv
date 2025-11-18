import { ReactNode } from 'react'
import Button from '@/components/button/page'

interface LearnMoreCardProps {
    subText: string
    title: ReactNode
    buttonText: string
}

export default function LearnMoreCard({
    subText,
    title,
    buttonText,
}: LearnMoreCardProps) {
    return (
        <section>
            <div className=" pl-5 pr-10 sm:pl-10 md:w-55 md:pr-0 md:py-2 lg:w-80 lg:pr-10 lg:py-5 xl:w-90 xl:py-5 2xl:w-115 2xl:py-10">
                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-geistMono md:mb-10 md:mt-10 lg:mb-30 lg:mt-10 text-[#969696]">
                    {subText}
                </p>
                <p className="font-satoshi text-[25px] sm:text-[50px] lg:text-[55px] md:text-[30px] md:leading-10 lg:leading-14 text-[#0A231D] md:mt-3">
                    {title}
                </p>
                <Button
                    title={buttonText}
                    className="bg-transparent !px-0 !py-0 text-[12px] text-black mt-4 md:mt-5 lg:mt-5"
                />
            </div>
        </section>
    )
}
