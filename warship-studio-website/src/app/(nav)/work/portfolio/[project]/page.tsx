'use client'

import { useParams } from 'next/navigation'
import { portfolioData } from '@/data/portfolioData'
import { AnimateText, StaggeredTextContainer, VideoEmbed } from '@/components'

type PortfolioParams = {
    project: string
}

export default function PortfolioPage() {
    const params = useParams<PortfolioParams>()
    const projectKey = params.project

    const project = portfolioData[projectKey]

    if (!project) {
        return (
            <div className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 2xl:px-40">
                Project not found
            </div>
        )
    }

    const credits = project.credits ?? []

    const columns: { role: string; names: string[] }[][] = [[], [], []]

    credits.forEach((credit, index) => {
        columns[index % 3].push(credit)
    })

    return (
        <section className="px-5 py-20 sm:px-10 md:px-15 lg:px-20 xl:px-30 2xl:px-40">
            <div className="space-y-20">
                <div className="space-y-5">
                    <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                        {project.hero?.tagline1}
                    </AnimateText>

                    <AnimateText>
                        <p className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] text-[#0A231D]">
                            {project.hero?.headline}
                        </p>
                    </AnimateText>

                    <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696] ">
                        {project.hero?.tagline2}
                    </AnimateText>
                </div>

                <div className="bg-[#969696] w-full overflow-hidden aspect-[5/4] md:aspect-[10/4] rounded-[5px]">
                    <img
                        src={project.hero?.heroImage}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="space-y-5">
                    <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                        ABOUT THIS PROJECT
                    </AnimateText>

                    <p className="hyphens-auto break-words text-[14px] md:text-[16px] text-[#0A231D]">
                        {project.hero?.aboutProject}
                    </p>
                </div>

                <div className="space-y-20">
                    <div className="w-full aspect-video rounded-[5px]">
                        <VideoEmbed
                            controls
                            src={project.hero?.projectReel}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-20">
                        <div className="">
                            {project.section?.firstGrid && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                    {project.section.firstGrid.map(
                                        (img, index) => (
                                            <div
                                                key={index}
                                                className="w-full rounded-[5px] aspect-video overflow-hidden"
                                            >
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="">
                            {project.section?.secondGrid && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
                                    {project.section.secondGrid.map(
                                        (img, index) => (
                                            <div
                                                key={index}
                                                className="w-full rounded-[5px] aspect-[7/10] overflow-hidden"
                                            >
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div>
                        <AnimateText>
                            <p className="text-[48px]">Breakdown</p>
                        </AnimateText>
                    </div>
                    <div className="">
                        {project.breakdown?.thirdGrid && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                                {project.breakdown.thirdGrid.map(
                                    (img, index) => (
                                        <div
                                            key={index}
                                            className="w-full rounded-[5px] aspect-[8/10] overflow-hidden"
                                        >
                                            <img
                                                src={img}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                    <div className="space-y-5">
                        <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                            What we did
                        </AnimateText>

                        <p className="hyphens-auto break-words text-[14px] md:text-[16px] text-[#0A231D]">
                            {project.breakdown?.processText?.process}
                        </p>
                    </div>

                    {/* //CREDITS */}

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
                                                        {credit.names.join(
                                                            ', '
                                                        )}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
                        <div>
                            <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                                Next Project
                            </AnimateText>

                            <AnimateText>
                                <p className="text-[30px] sm:text-[40px] lg:text-[45px] xl:text-[48px]">
                                    Onoya cometic rebrand
                                </p>
                            </AnimateText>
                        </div>

                        <div className="w-full aspect-video overflow-hidden rounded-[5px]">
                            <img
                                src="/carousel/carousel-1.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
