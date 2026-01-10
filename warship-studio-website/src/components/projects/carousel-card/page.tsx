import { Button, AnimateText } from '@/components'
import React from 'react'

interface Cardprops {
    title: string
    description: string
    image: React.ReactNode
}

export default function CarouselCard({ title, image, description }: Cardprops) {
    return (
        <section className="relative">
            <div className="z-0 w-[300px] sm:w-[400px] md:w-[300px] h-[250px] lg:w-[404px] lg:h-[350px] xl:w-[504px] xl:h-[400px] 2xl:w-[604px] 2xl:h-[450px] ">
                {image}
            </div>

            <div className="absolute top-40 left-5 sm:top-55 sm:left-5 md:top-48 md:left-5 lg:top-65 lg:left-8 xl:top-80 xl:left-10 2xl:top-90 2xl:left-10">
                <Button
                    title={description}
                    className="!px-0 !py-0 bg-transparent text-white"
                />

                <AnimateText>
                    <p className="text-[20px] md:text-[20px] sm:text-[29px] text-white">
                        {title}
                    </p>
                </AnimateText>
            </div>
        </section>
    )
}
