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
            <div>
                <p className="text-[16px] font-geistMono">{subText}</p>
                <p className="font-satoshi text-[55px]">{title}</p>
                <Button
                    title={buttonText}
                    className={`bg-none text-[12px] text-black`}
                />
            </div>
        </section>
    )
}
