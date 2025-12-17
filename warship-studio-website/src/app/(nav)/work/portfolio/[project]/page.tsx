'use client'

import { useParams } from 'next/navigation'
import { portfolioData } from '@/data/portfolioData'
import { AnimateText } from '@/components'

type PortfolioParams = {
    project: string
}

export default function PortfolioPage() {
    const params = useParams<PortfolioParams>()
    const projectKey = params.project

    const project = portfolioData[projectKey]

    if (!project) {
        return <div>Project not found</div>
    }

    return (
        <section className="px-30 py-20">
            <div className="space-y-20">
                <div>
                    <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                        Radiant company
                    </AnimateText>

                    <AnimateText>
                        <p className="text-[60px]">
                            Radiant -The new way of doing SOC
                        </p>
                    </AnimateText>

                    <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696] ">
                        branding,3d modelling, tags
                    </AnimateText>
                </div>

                <div className="bg-black h-140">
                    /* Image carousel to be implemented here */
                </div>

                <div>
                    <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                        ABOUT THIS PROJECT
                    </AnimateText>

                    <AnimateText>
                        <p className="hyphens-auto break-words text-[14px] md:text-[16px]">
                            Tiffany is famous for their Holiday Icons campaigns.
                            As a joyful introduction to the season, each year
                            rings a different conceptual tune that always
                            manages to balance contemporary elegance with
                            timeless undertones. This year’s collaboration with
                            Tendril was no different, featuring the 4 classic
                            icons T, Lock, HardWear, and Knot.
                        </p>
                    </AnimateText>
                </div>

                <div className="space-y-5">
                    <div className="bg-black h-110">
                        /* video carousel to be implemented here */
                    </div>

                    <div className="space-y-5">
                        <div className="bg-black h-110">
                            /* 3 image grid to be implemented here */
                        </div>

                        <div className="bg-black h-110">
                            /* 2 image grid to be implemented here */
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div>
                        <AnimateText>
                            <p className="text-[48px]">Breakdown</p>
                        </AnimateText>
                    </div>
                    <div className="bg-black h-110">
                        /* 4 image grid to be implemented here */
                    </div>
                    <div>
                        <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                            WHat we did
                        </AnimateText>

                        <AnimateText>
                            <p className="hyphens-auto break-words text-[14px] md:text-[16px]">
                                Tiffany is famous for their Holiday Icons
                                campaigns. As a joyful introduction to the
                                season, each year rings a different conceptual
                                tune that always manages to balance contemporary
                                elegance with timeless undertones. This year’s
                                collaboration with Tendril was no different,
                                featuring the 4 classic icons T, Lock, HardWear,
                                and Knot.
                            </p>
                        </AnimateText>
                    </div>

                    {/* //CREDITS */}

                    <div className="py-10">
                        <div className="flex justify-between">
                            <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                                Radiant company
                            </AnimateText>

                            <div>array of credits to be implemented here</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-20">
                        <div>
                            <AnimateText className="about-title uppercase font-geistMono text-[14px] md:text-[16px] text-[#969696]">
                                Next Project
                            </AnimateText>

                            <AnimateText>
                                <p className="text-[48px]">
                                    Onoya cometic rebrand
                                </p>
                            </AnimateText>
                        </div>

                        <div className="bg-black w-full h-80">
                            /* image to be implemented here */
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
