// import { Button } from '@/components'

// interface CardProps {
//     title: string
//     buttonText: string
//     image: string
//     imageWidth?: string
// }

// export default function PortfolioCardSingle({
//     title,
//     image,
//     buttonText,
//     imageWidth,
// }: CardProps) {
//     return (
//         <div className="cursor-pointer">
//             <div
//                 className={`${imageWidth} overflow-hidden bg-[#999999] sm:w-70 md:w-88 md:h-60 lg:w-105 lg:h-70 xl:w-135 xl:h-80 2xl:w-165 2xl:h-100 rounded-[5px]`}
//             >
//                 <img
//                     src={image}
//                     alt={title}
//                     className="object-cover w-full h-full"
//                 />
//             </div>

//             <div className="mt-3">
//                 <p className="text-[#0A231D] md:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
//                     {title}
//                 </p>

//                 <Button
//                     hoverColor="bg-none"
//                     title={buttonText}
//                     className="!p-0 text-[#969696] !bg-transparent"
//                 />
//             </div>
//         </div>
//     )
// }

import { Button, AnimateText, StaggeredTextContainer } from '@/components'
import Link from 'next/link'
import React from 'react'

interface CardProps {
    title: string
    buttonText: string
    image: React.ReactNode
}

export default function PortfolioCardSingle({
    title,
    image,
    buttonText,
}: CardProps) {
    return (
        <div className="cursor-pointer w-full">
            <div className="w-full aspect-[6/3] overflow-hidden bg-[#999999] rounded-[5px]">
                {image}
            </div>

            <div className="mt-3">
                <p className="text-[#0A231D] text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    {title}
                </p>

                <Button
                    hoverColor="bg-none"
                    title={buttonText}
                    className="!p-0 text-[#969696] !bg-transparent"
                />
            </div>
        </div>
    )
}
