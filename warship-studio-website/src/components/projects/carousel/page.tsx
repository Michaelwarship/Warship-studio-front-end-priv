'use client'

import { useRef, useEffect, useState } from 'react'
import { CarouselCard, StaggeredTextContainer, Button } from '@/components'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { api } from '@/lib/api'
import { StrapiImage } from '@/components'
import Link from 'next/link'

export default function Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [projects, setProjects] = useState<any[]>([])

    // Fetch portfolios from Strapi
    useEffect(() => {
        // api.get('/portfolios', { params: { populate: '*' } })
        api.get('/portfolios', {
            params: {
                populate: '*',
                sort: 'Date:desc',
            },
        })

            .then((res) => setProjects(res.data.data))
            .catch(console.error)
    }, [])

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return

        const scrollAmount = 500

        carouselRef.current.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    }

    return (
        <div className="relative">
            {/* Carousel */}
            <div
                ref={carouselRef}
                className="flex space-x-2 overflow-x-auto scrollbar-none h-fit image-fade-right"
            >
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/work/portfolio/${project.id}`}
                    >
                        <CarouselCard
                            image={
                                <StrapiImage
                                    image={project.Thumbnail}
                                    format="large"
                                    className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                                />
                            }
                            title={project.Title}
                            description={project.Company}
                        />
                    </Link>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-5 right-5 flex space-x-2 z-5">
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
    )
}
