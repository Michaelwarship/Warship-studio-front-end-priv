'use client'

import { useParams } from 'next/navigation'
import { AnimateText, VideoEmbed, StrapiImage } from '@/components'
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'
import { Credits } from '@/lib/credit'
import Link from 'next/link'

export default function PortfolioPage() {
    const [activeImage, setActiveImage] = useState<any | null>(null)
    const [portfolio, setPortfolio] = useState<any>(undefined)
    const [allProjects, setAllProjects] = useState<any[]>([]) // all projects to compute nextProject
    const params = useParams()

    const id = Number(params.project)

    // Fetch current project
    useEffect(() => {
        if (!id) return
        api.get('/portfolios', { params: { populate: '*' } })
            .then((res) => {
                const portfolioItem = res.data.data.find(
                    (project: any) => project.id === id
                )
                if (portfolioItem) setPortfolio(portfolioItem)
            })
            .catch(console.error)
    }, [id])

    // Fetch all projects once
    useEffect(() => {
        api.get('/portfolios', { params: { populate: '*' } })
            .then((res) => setAllProjects(res.data.data))
            .catch(console.error)
    }, [])

    if (!portfolio) return null

    const credits = Credits(portfolio)

    const columns: { role: string; names: string[] }[][] = [[], [], []]
    credits.forEach((credit, index) => {
        columns[index % 3].push(credit)
    })

    // Compute next project dynamically
    const nextProject = (() => {
        if (!portfolio || !portfolio.categories || allProjects.length === 0)
            return null

        const sameCategoryProjects = allProjects.filter((proj) =>
            proj.categories?.some((cat: any) =>
                portfolio.categories.some((pc: any) => pc.id === cat.id)
            )
        )

        if (sameCategoryProjects.length === 0) return null

        const currentIndex = sameCategoryProjects.findIndex(
            (p) => p.id === portfolio.id
        )
        return sameCategoryProjects[
            (currentIndex + 1) % sameCategoryProjects.length
        ]
    })()

    return (
        <section className="px-5 pt-20 sm:px-10 md:px-15 lg:px-20 xl:px-30 2xl:px-40">
            <div className="space-y-20">
                {/* Project header */}
                <div className="space-y-5">
                    <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                        {portfolio.Company}
                    </AnimateText>

                    <AnimateText>
                        <p className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] text-[#0A231D]">
                            {portfolio.Title}
                        </p>
                    </AnimateText>

                    <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                        {portfolio.categories
                            ?.map((cat: any) => cat.Name)
                            .join(', ')}
                    </AnimateText>
                </div>

                {/* Thumbnail */}
                <div className="w-full overflow-hidden aspect-[5/4] md:aspect-[10/4] rounded-[5px]">
                    <StrapiImage
                        image={portfolio.Thumbnail}
                        format="large"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* About */}
                {portfolio.About && (
                    <div className="space-y-5">
                        <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                            ABOUT THIS PROJECT
                        </AnimateText>
                        <p className="hyphens-auto break-words text-[14px] md:text-[16px] text-[#0A231D]">
                            {portfolio.About}
                        </p>
                    </div>
                )}

                {/* Video */}
                {portfolio.Video_Embed && (
                    <div className="w-full aspect-video rounded-[5px]">
                        <VideoEmbed
                            controls
                            no_autoplay
                            src={portfolio.Video_Embed}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Landscape Images */}
                {portfolio.Landscape_Images && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full cursor-pointer">
                        {portfolio.Landscape_Images.filter(
                            (item: any) =>
                                item.mime?.startsWith('image/') ||
                                item.mime?.startsWith('video/')
                        ).map((image: any, index: number) => (
                            <div
                                key={image.id ?? index}
                                className="w-full rounded-[5px] aspect-video overflow-hidden"
                            >
                                <StrapiImage
                                    image={image}
                                    format="large"
                                    className="w-full h-full object-cover"
                                    onClick={() => setActiveImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Portrait Images */}
                {portfolio.Portrait_Images && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full cursor-pointer">
                        {portfolio.Portrait_Images.filter(
                            (item: any) =>
                                item.mime?.startsWith('image/') ||
                                item.mime?.startsWith('video/')
                        ).map((image: any, index: number) => (
                            <div
                                key={image.id ?? index}
                                className="w-full rounded-[5px] aspect-[7/10] overflow-hidden"
                                onClick={() => setActiveImage(image)}
                            >
                                <StrapiImage
                                    image={image}
                                    format="large"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* BREAKDOWN + WHAT WE DID */}
                {(portfolio.Breakdown?.length > 0 || portfolio.WhatWeDid) && (
                    <div className="space-y-10">
                        {/* Breakdown Title */}
                        {portfolio.Breakdown?.length > 0 && (
                            <div>
                                <AnimateText>
                                    <p className="text-[48px]">Breakdown</p>
                                </AnimateText>
                            </div>
                        )}

                        {/* Breakdown Images */}
                        {portfolio.Breakdown?.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full cursor-pointer">
                                {portfolio.Breakdown.filter(
                                    (item: any) =>
                                        item.mime?.startsWith('image/') ||
                                        item.mime?.startsWith('video/')
                                ).map((image: any, index: number) => (
                                    <div
                                        key={image.id ?? index}
                                        className="w-full rounded-[5px] aspect-[8/10] overflow-hidden"
                                        onClick={() => setActiveImage(image)}
                                    >
                                        <StrapiImage
                                            image={image}
                                            format="large"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* What We Did */}
                        {portfolio.WhatWeDid && (
                            <div className="space-y-5">
                                <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                                    What we did
                                </AnimateText>

                                <p className="hyphens-auto break-words text-[14px] md:text-[16px] text-[#0A231D]">
                                    {portfolio.WhatWeDid}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Credits */}
                <div className="py-10">
                    <div className="flex flex-col space-y-5 lg:flex-row lg:justify-between lg:space-y-0">
                        <AnimateText className="flex-1 uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                            Credits
                        </AnimateText>

                        <div className="flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                                {columns.map((column, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className="flex flex-col gap-10"
                                    >
                                        {column.map((credit, index) => (
                                            <div key={index}>
                                                <p className="text-[14px] uppercase text-gray-400 mb-2">
                                                    {credit.role}
                                                </p>
                                                <p className="text-[16px] text-[#0A231D] leading-relaxed">
                                                    {credit.names.join(', ')}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Project */}
                {nextProject && (
                    <Link href={`/work/portfolio/${nextProject.id}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 cursor-pointer">
                            <div>
                                <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                                    Next Project
                                </AnimateText>
                                <AnimateText>
                                    <p className="text-[30px] sm:text-[40px] lg:text-[45px] xl:text-[48px]">
                                        {nextProject.Title}
                                    </p>
                                </AnimateText>
                            </div>
                            <div className="w-full aspect-video overflow-hidden rounded-[5px]">
                                <StrapiImage
                                    image={nextProject.Thumbnail}
                                    format="large"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </Link>
                )}
            </div>

            {activeImage && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setActiveImage(null)}
                >
                    <div
                        className="max-w-[90vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <StrapiImage
                            image={activeImage}
                            format="large"
                            className="object-contain max-w-[90vw] max-h-[90vh]"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
