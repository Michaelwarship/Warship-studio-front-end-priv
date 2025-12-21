'use client'
import { RatingCard, StaggeredTextContainer, Button } from '@/components'
import { useRef } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

export default function Rating() {
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
        <section className="relative">
            <div
                ref={carouselRef}
                className="md:flex space-x-2 overflow-x-auto scrollbar-none h-fit border border-[#E0E0E0] md:image-fade-right"
            >
                <StaggeredTextContainer
                    disabled
                    className="flex flex-col space-y-15 sm:space-y-10 md:space-y-0 md:flex-row justify-center border-0 [&>*]:border-[#E0E0E0] [&>*]:border-r"
                >
                    <RatingCard
                        title={
                            <>
                                Igor Chygrynov
                                <br />{' '}
                                <span className="text-[#AEAEAE]">
                                    CEO at Bitoftrade
                                </span>
                            </>
                        }
                        description={
                            <>
                                "We like their work method, design skills, and
                                the way they communicate."
                            </>
                        }
                        image="/profile/user-1.png"
                        buttonText="[ BITOFTRADE ]"
                    />
                    <div className="md:hidden w-200 border-b"></div>
                    <RatingCard
                        title={
                            <>
                                Igor Chygrynov
                                <br />{' '}
                                <span className="text-[#AEAEAE]">
                                    CEO at Bitoftrade
                                </span>
                            </>
                        }
                        description={
                            <>
                                "The most impressive thing about the company is
                                their sensibility to UI/UX, which is very clean
                                and user-friendly."
                            </>
                        }
                        image="/profile/user-1.png"
                        buttonText="[ BITOFTRADE ]"
                    />
                    <div className="md:hidden w-200 border-b"></div>
                    <RatingCard
                        title={
                            <>
                                Igor Chygrynov
                                <br />{' '}
                                <span className="text-[#AEAEAE]">
                                    CEO at Bitoftrade
                                </span>
                            </>
                        }
                        description={
                            <>
                                "The most impressive thing about the company is
                                their sensibility to UI/UX, which is very clean
                                and user-friendly."
                            </>
                        }
                        image="/profile/user-1.png"
                        buttonText="[ BITOFTRADE ]"
                    />
                    <div className="md:hidden w-200 border-b"></div>
                    <RatingCard
                        title={
                            <>
                                Igor Chygrynov
                                <br />{' '}
                                <span className="text-[#AEAEAE]">
                                    CEO at Bitoftrade
                                </span>
                            </>
                        }
                        description={
                            <>
                                "The most impressive thing about the company is
                                their sensibility to UI/UX, which is very clean
                                and user-friendly."
                            </>
                        }
                        image="/profile/user-1.png"
                        buttonText="[ BITOFTRADE ]"
                    />
                    <div className="md:hidden w-200 border-b"></div>

                    <RatingCard
                        title={
                            <>
                                Igor Chygrynov
                                <br />{' '}
                                <span className="text-[#AEAEAE]">
                                    CEO at Bitoftrade
                                </span>
                            </>
                        }
                        description={
                            <>
                                "We like their work method, design skills, and
                                the way they communicate."
                            </>
                        }
                        image="/profile/user-1.png"
                        buttonText="[ BITOFTRADE ]"
                    />
                    <div className="md:hidden w-200 border-b"></div>

                    <RatingCard
                        title={
                            <>
                                Igor Chygrynov
                                <br />{' '}
                                <span className="text-[#AEAEAE]">
                                    CEO at Bitoftrade
                                </span>
                            </>
                        }
                        description={
                            <>
                                "We like their work method, design skills, and
                                the way they communicate."
                            </>
                        }
                        image="/profile/user-1.png"
                        buttonText="[ BITOFTRADE ]"
                    />
                    <div className="md:hidden w-200 border-b"></div>

                    <RatingCard
                        title={
                            <>
                                Igor Chygrynov
                                <br />{' '}
                                <span className="text-[#AEAEAE]">
                                    CEO at Bitoftrade
                                </span>
                            </>
                        }
                        description={
                            <>
                                "We like their work method, design skills, and
                                the way they communicate."
                            </>
                        }
                        image="/profile/user-1.png"
                        buttonText="[ BITOFTRADE ]"
                    />
                    <div className="md:hidden w-200"></div>
                </StaggeredTextContainer>
            </div>

            <div className="pointer-events-none absolute top-0 right-0 h-full w-[500px] bg-gradient-to-l from-white to-transparent hidden md:block" />

            <StaggeredTextContainer className="relative hidden md:block order-2 flex items-center sm:flex-col pl-5 sm:pr-10 sm:pl-0 sm:space-y-45 md:pr-5 lg:pr-10 md:space-y-35 lg:space-y-57 xl:space-y-67 2xl:space-y-75">
                <div className="absolute top-5 sm:right-6  -translate-y-1/2 z-[100]  mt-5 order-1 sm:order-2">
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
        </section>
    )
}
