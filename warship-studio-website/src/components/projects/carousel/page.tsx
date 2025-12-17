'use client'
import { useRef } from 'react'
import { CarouselCard, StaggeredTextContainer, Button } from '@/components'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

export default function Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null)

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return

        const scrollAmount = 500

        carouselRef.current.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    }
    return (
        <div className="">
            <StaggeredTextContainer
                ref={carouselRef}
                className="flex  space-x-2 overflow-x-auto scrollbar-none h-fit  "
            >
                <CarouselCard
                    image="/carousel/carousel-1.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
                <CarouselCard
                    image="/carousel/carousel-2.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
                <CarouselCard
                    image="/carousel/carousel-3.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
                <CarouselCard
                    image="/carousel/carousel-3.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
                <CarouselCard
                    image="/carousel/carousel-3.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
                <CarouselCard
                    image="/carousel/carousel-3.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
                <CarouselCard
                    image="/carousel/carousel-3.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
                <CarouselCard
                    image="/carousel/carousel-2.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
                <CarouselCard
                    image="/carousel/carousel-1.png"
                    title="All in one hashit design"
                    description="[ Hash it explainer ]"
                />
            </StaggeredTextContainer>

            <StaggeredTextContainer className="relative order-2 flex items-center sm:flex-col pl-5 sm:pr-10 sm:pl-0 sm:space-y-45 md:pr-5 lg:pr-10 md:space-y-35 lg:space-y-57 xl:space-y-67 2xl:space-y-75">
                <p className="hidden order-2 sm:order-1 pl-5 pt-5 sm:pl-0 sm:pt-0 sm:text-[30px] md:text-[30px] xl:text-[40px] text-[#969696] font-geistMono">
                    03/09
                </p>
                <div className="absolute top-5 sm:right-6 lg:top-[-300] xl:top-[-400] -translate-y-1/2 z-[100]  mt-5 order-1 sm:order-2">
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
            </StaggeredTextContainer>
        </div>
    )
}
