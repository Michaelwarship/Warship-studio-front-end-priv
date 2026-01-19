'use client'

import { StaggeredTextContainer, AnimatedCounter } from '@/components'

export default function OurIdentity() {
    const startYear: number = 2020
    const years: number = Math.max(0, new Date().getFullYear() - startYear)

    return (
        <section>
            <div>
                <StaggeredTextContainer className="flex flex-col justify-between py-20 px-5 sm:px-5 md:px-15 md:py-20 lg:py-30 lg:flex-row lg:px-20 xl:px-20 md:border-b-1 md:border-[#E0E0E0]">
                    <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                        OUR IDENTITY
                    </p>

                    <div className="flex-1">
                        <div className="space-y-10">
                            <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                                Warship Studios is a digital-first,
                                multidisciplinary creative agency that helps
                                forward-thinking brands make their innovation
                                visually compelling.{' '}
                                <span className="text-[#AEAEAE]">
                                    We brand world leading brands.
                                </span>
                            </p>

                            <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                                We didn’t start as a company. we started as a
                                restlessness. A feeling that brands deserve more
                                than flat visuals, recycled ideas, and “good
                                enough” design. A feeling that creativity could
                                be sharper, bolder, and more intentional, and
                                that storytelling, when done right, could move
                                people.
                            </p>

                            <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                                Warship Studios was formed to help brands
                                navigate crowded markets, shifting attention
                                spans, and the constant battle for relevance.
                            </p>

                            <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                                Over time, the crew grew. Designers, animators,
                                strategists, and storytellers who believe that
                                great work lives at the intersection of clarity
                                and creativity.
                            </p>

                            <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                                Together, we’ve partnered with startups, scaling
                                companies, and established brands across
                                industries, helping them launch, evolve, and
                                stand out in a fast-moving digital world.
                            </p>

                            <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                                Today, Warship Studios is a creative agency
                                built for brands that want impact, consistency,
                                and storytelling that sticks.{' '}
                                <span className="text-[#AEAEAE]">
                                    If you’re building something worth fighting
                                    for, there’s room on the ship.
                                </span>
                            </p>
                        </div>

                        <StaggeredTextContainer className="mt-20 flex flex-col items-center ml-15 space-y-5 [&>*]:border-[#E0E0E0] [&>*:nth-child(1)]:border-b [&>*:nth-child(3)]:border-b [&>*:nth-child(5)]:border-b md:[&>*]:border-0 md:flex-row md:ml-0 md:space-y-0 md:space-x-30 lg:space-x-50">
                            <div className="md:hidden w-200" />

                            {/* 01 */}
                            <div className="space-y-[-20px] md:space-y-0">
                                <p className="about-title font-geistMono absolute right-50 mt-2 md:mt-0 sm:right-80 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                    01.
                                </p>

                                <div className="relative w-[80px] h-[60px]">
                                    <div className="inline-block min-w-[6ch] [font-variant-numeric:tabular-nums]">
                                        <AnimatedCounter
                                            duration={1000}
                                            suffix="+"
                                            end={200}
                                            as="div"
                                            className="about-title text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                        />
                                    </div>
                                </div>

                                <p className="uppercase font-geistMono text-[#969696] text-[12px] md:text-[14px] mt-5">
                                    Projects
                                </p>
                            </div>

                            <div className="md:hidden w-200" />

                            {/* 02 */}
                            <div className="space-y-[-20px] md:space-y-0">
                                <p className="about-title font-geistMono absolute right-50 mt-2 md:mt-0 sm:right-80 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                    02.
                                </p>

                                <div className="relative w-[80px] h-[60px]">
                                    <div className="inline-block min-w-[6ch] [font-variant-numeric:tabular-nums]">
                                        <AnimatedCounter
                                            duration={2000}
                                            suffix="yrs"
                                            end={years}
                                            as="div"
                                            className="text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                        />
                                    </div>
                                </div>

                                <p className="uppercase font-geistMono text-[#969696] text-[12px] md:text-[14px] mt-5 whitespace-nowrap">
                                    In Business
                                </p>
                            </div>

                            <div className="md:hidden w-200" />

                            {/* 03 */}
                            <div className="space-y-[-20px] md:space-y-0">
                                <p className="about-title font-geistMono absolute right-50 mt-2 md:mt-0 sm:right-80 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                    03.
                                </p>

                                <div className="relative w-[80px] h-[60px]">
                                    <div className="inline-block min-w-[6ch] [font-variant-numeric:tabular-nums]">
                                        <AnimatedCounter
                                            duration={3000}
                                            suffix="+"
                                            end={14}
                                            as="div"
                                            className="about-title text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                        />
                                    </div>
                                </div>

                                <p className="uppercase font-geistMono text-[#969696] text-[12px] md:text-[14px] mt-5">
                                    Expert team
                                </p>
                            </div>
                        </StaggeredTextContainer>
                    </div>
                </StaggeredTextContainer>
            </div>
        </section>
    )
}
