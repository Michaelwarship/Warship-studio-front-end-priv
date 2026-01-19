'use client'

import Lottie from 'lottie-react'

type Props = {
    animationData: object
    className?: string
}

export default function LottiePlayer({ animationData, className }: Props) {
    return (
        <Lottie
            animationData={animationData}
            loop
            autoplay
            className={className}
        />
    )
}
