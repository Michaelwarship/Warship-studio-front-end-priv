'use client'
import { useRef } from 'react'
import {
    StudioCarouselCard,
    Button,
    StaggeredTextContainer,
} from '@/components'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

export default function StudioCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null)

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return

        const scrollAmount = 310

        carouselRef.current.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    }
    return (
        <section className="px-5 py-10 lg:px-20 lg:py-20">
            <div className="flex flex-col sm:flex-row md:justify-center sm:items-center sm:space-x-5">
                <div className="flex flex-col space-y-10">
                    <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                        INSIDE THE NEW
                    </p>

                    <StaggeredTextContainer
                        ref={carouselRef}
                        className="flex space-x-5 xl:space-x-10 overflow-x-auto w-73 sm:w-107 md:w-97 lg:w-161 xl:w-208 2xl:w-237 "
                    >
                        <StudioCarouselCard
                            image="carousel/carousel-1.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />

                        <StudioCarouselCard
                            image="carousel/carousel-2.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />

                        <StudioCarouselCard
                            image="carousel/carousel-3.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />

                        <StudioCarouselCard
                            image="carousel/carousel-1.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />

                        <StudioCarouselCard
                            image="carousel/carousel-2.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />

                        <StudioCarouselCard
                            image="carousel/carousel-3.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />

                        <StudioCarouselCard
                            image="carousel/carousel-1.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />

                        <StudioCarouselCard
                            image="carousel/carousel-2.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />

                        <StudioCarouselCard
                            image="carousel/carousel-3.png"
                            description={
                                <>
                                    Warship studio leads the market in 3D design
                                    & animation in africa
                                </>
                            }
                            buttonText="[ Techcabal ]"
                        />
                    </StaggeredTextContainer>
                </div>

                <div>
                    <div className="flex items-center md:items-end sm:flex-col pl-5 sm:pr-10 sm:pl-0 sm:space-y-28 md:pr-5 lg:pr-10 md:space-y-20 lg:space-y-25 xl:space-y-35 2xl:space-y-45 sm:-mt-12 md:-mt-11  lg:-mt-15 xl:-mt-10">
                        <p className="hidden order-2 sm:order-1 pl-5 pt-5 sm:pl-0 sm:pt-0 sm:text-[24pxpx] md:text-[24px] xl:text-[24pxpx] text-[#969696] font-geistMono">
                            03/09
                        </p>
                        <div className="mt-5 order-1 sm:order-2">
                            <div className="flex space-x-2">
                                <Button
                                    title={
                                        <FaArrowLeftLong className="text-[#0A231D] lg:text-[25px]" />
                                    }
                                    onClick={() => scrollCarousel('left')}
                                    className="bg-[#F2F2F2] px-5 py-5 sm:!px-4 sm:!py-4 md:px-4 md:py-4 lg:px-5 lg:py-5"
                                />

                                <Button
                                    title={
                                        <FaArrowRightLong className="text-[#0A231D] lg:text-[25px]" />
                                    }
                                    onClick={() => scrollCarousel('right')}
                                    className="bg-[#F2F2F2] px-5 py-5 sm:!px-4 sm:!py-4 md:px-4 md:py-4 lg:px-5 lg:py-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
