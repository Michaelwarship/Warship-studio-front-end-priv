'use client'
import {
    RatingCard,
    StaggeredTextContainer,
    Button,
    StrapiImage,
} from '@/components'
import { useRef } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'

export default function Rating() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [review, setReview] = useState<any[]>([])

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return

        const scrollAmount = 500

        carouselRef.current.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        api.get('/reviews', { params: { populate: '*' } })
            .then((res) => {
                setReview(res.data.data)
            })
            .catch(console.error)
    }, [])

    if (!review.length) return null

    return (
        <section className="relative">
            <div
                ref={carouselRef}
                className="md:flex space-x-2 overflow-x-auto scrollbar-none h-fit border border-[#E0E0E0] md:image-fade-right"
            >
                <div className="flex flex-col space-y-15 sm:space-y-10 md:space-y-0 md:flex-row justify-center border-0 [&>*]:border-[#E0E0E0] [&>*]:border-r">
                    {review.map((review) => (
                        <RatingCard
                            key={review.id}
                            title={review.Title}
                            description={review.Review}
                            buttonText={review.Company}
                            name={review.Name}
                            image={
                                <StrapiImage
                                    image={review.Picture}
                                    format="thumbnail"
                                    className="w-full h-full object-cover"
                                />
                            }
                        />
                    ))}
                    <div className="md:hidden w-200"></div>
                </div>
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
