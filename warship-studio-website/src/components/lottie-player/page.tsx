'use client'

import Lottie from 'lottie-react'

type Props = {
    animationPath: string
    className?: string
}

export default function LottiePlayer({ animationPath, className }: Props) {
    return (
        <Lottie
            animationData={require(`@/public/${animationPath}`)}
            loop
            autoplay
            className={className}
        />
    )
}
