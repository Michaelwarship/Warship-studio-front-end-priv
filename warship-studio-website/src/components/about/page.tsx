'use client'

import {
    Button,
    AnimateText,
    StaggeredTextContainer,
    AnimatedCounter,
} from '@/components'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <section className="overflow-x-clip  [&>*]:border-[#E0E0E0] md:[&>*]:border-b-1 ">
            <div className="flex flex-col justify-between py-20 px-5 sm:px-10 md:px-15 md:py-20 lg:py-20 lg:flex-row lg:px-20 xl:px-18 2xl:px-20">
                <AnimateText className="about-title font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                    //ABOUT US
                </AnimateText>

                <div className="flex-1">
                    <p className="about-title hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                        Warship Studios is a digital-first, multidisciplinary
                        creative agency that helps forward-thinking brands make
                        their innovation visually compelling.
                        <span className="text-[#AEAEAE]">
                            We brand world leading brands.
                        </span>
                    </p>

                    <div className="flex space-x-5 mt-10">
                        <Link href="https://calendly.com/warshipstudioz/30min">
                            {' '}
                            <Button title="BOOK A STRATEGY CALL" className="" />
                        </Link>
                        <Link href="https://tally.so/r/lbeP26">
                            <Button
                                title="GET A QUOTE"
                                className="bg-[#E0E0E0]"
                            />
                        </Link>
                    </div>

                    <StaggeredTextContainer className="mt-10 flex flex-col items-center ml-15 space-y-5 mt-20 [&>*]:border-[#E0E0E0] [&>*:nth-child(1)]:border-b [&>*:nth-child(3)]:border-b [&>*:nth-child(5)]:border-b md:[&>*]:border-0 md:flex-row md:ml-0 md:space-y-0 md:space-x-30 md:mt-20 lg:space-x-50">
                        <div className="md:hidden w-200"></div>

                        <div className="space-y-[-20px] md:space-y-0">
                            <p className="about-title font-geistMono absolute right-50 mt-2 md:mt-0 sm:right-80 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                01.
                            </p>

                            <div className="relative w-[80px] h-[60px]">
                                <div className="inline-block min-w-[6ch] [font-variant-numeric:tabular-nums]">
                                    <AnimatedCounter
                                        duration={1000}
                                        suffix="+"
                                        prefix=""
                                        end={200}
                                        as="div"
                                        className="about-title text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                    />
                                </div>
                            </div>

                            {/* <Button
                                title={
                                    <>
                                        COMPLETED <br /> PROJECTS
                                    </>
                                }
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696] md:mt-5"
                                hoverColor="bg-none"
                            /> */}

                            <p className="uppercase font-geistMono text-[#969696] text-[12px] md:text-[14px] mt-5">
                                Projects
                            </p>
                        </div>

                        <div className="md:hidden w-200"></div>

                        <div className="space-y-[-20px] md:space-y-0">
                            <p className="about-title font-geistMono absolute right-50 mt-2 md:mt-0 sm:right-80 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                02.
                            </p>

                            <div className="relative w-[80px] h-[60px]">
                                <div className="inline-block min-w-[6ch] [font-variant-numeric:tabular-nums]">
                                    <AnimatedCounter
                                        duration={2000}
                                        suffix="yrs"
                                        prefix=""
                                        end={6}
                                        as="div"
                                        className="about-title text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                    />
                                </div>
                            </div>

                            {/* <Button
                                title="EXPERIENCE"
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696] md:mt-5"
                                hoverColor="bg-none"
                            /> */}

                            <p className="uppercase font-geistMono text-[#969696] text-[12px] md:text-[14px] mt-5 whitespace-nowrap">
                                In Business
                            </p>
                        </div>

                        <div className="md:hidden w-200 "></div>

                        <div className="space-y-[-20px] md:space-y-0">
                            <p className="about-title font-geistMono absolute right-50 mt-2 md:mt-0 sm:right-80 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                03.
                            </p>
                            <div className="relative w-[80px] h-[60px]">
                                <div className="">
                                    <AnimatedCounter
                                        duration={3000}
                                        suffix="+"
                                        prefix=""
                                        end={14}
                                        as="div"
                                        className="about-title text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                    ></AnimatedCounter>
                                </div>
                            </div>

                            {/* <Button
                                title="EXPERT TEAM"
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696] md:mt-5"
                                hoverColor="bg-none"
                            /> */}

                            <p className="uppercase font-geistMono text-[#969696] text-[12px] md:text-[14px] mt-5">
                                Expert team
                            </p>
                        </div>
                    </StaggeredTextContainer>
                </div>
            </div>
        </section>
    )
}
