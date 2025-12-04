import { Button, AnimatedCounter, StaggeredTextContainer } from '@/components'

export default function StudioHero() {
    return (
        <section className="overflow-x-clip">
            <div className="px-5 py-10 lg:px-20 lg:pt-30 lg:pb-10 border-b-1 border-[#E0E0E0]">
                <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                    //OUR IDENTITY
                </p>

                <p className="text-[#0A231D] text-[40px] md:text-[56px] tracking-[-2]">
                    Warship Studio.
                </p>
            </div>

            <div className="flex flex-col justify-between py-20 px-5 sm:px-5 md:px-20 md:py-20 lg:py-30 lg:flex-row lg:px-20 xl:px-20 md:border-b-1 md:border-[#E0E0E0]">
                <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                    //ABOUT
                </p>

                <div className="flex-1">
                    <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                        Warship Studios is a digital-first, multidisciplinary{' '}
                        creative agency that helps forward-thinking brands make
                        their innovation visually compelling.{' '}
                        <span className="text-[#AEAEAE]">
                            We brand world leading brands.
                        </span>
                    </p>

                    <div className="mt-10 flex flex-col items-center ml-15 space-y-5 mt-20 [&>*]:border-[#E0E0E0] [&>*:nth-child(1)]:border-b [&>*:nth-child(3)]:border-b [&>*:nth-child(5)]:border-b md:[&>*]:border-0 md:flex-row md:ml-0 md:space-y-0 md:space-x-20 md:mt-20 lg:space-x-40">
                        <div className="md:hidden w-200"></div>

                        <div className="">
                            <p className="absolute left-5 mt-2 md:mt-0 sm:left-10 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                01.
                            </p>
                            <div className="relative w-[80px] h-[60px]">
                                <AnimatedCounter
                                    end={200}
                                    suffix="+"
                                    duration={1000}
                                    className="text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                />
                            </div>
                            <Button
                                title="PROJECTS"
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696] md:mt-5"
                            />
                        </div>

                        <div className="md:hidden w-200"></div>

                        <div>
                            <p className="absolute left-5 mt-2 md:mt-0 sm:left-10 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                02.
                            </p>
                            <div className="relative w-[80px] h-[60px]">
                                <AnimatedCounter
                                    end={6}
                                    suffix="+"
                                    duration={1000}
                                    className="text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                />
                            </div>
                            <Button
                                title="EXPERIENCE"
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696] md:mt-5"
                            />
                        </div>

                        <div className="md:hidden w-200 "></div>

                        <div>
                            <p className="absolute left-5 mt-2 md:mt-0 sm:left-10 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                03.
                            </p>
                            <div className="relative w-[80px] h-[60px]">
                                <AnimatedCounter
                                    end={95.9}
                                    suffix="k"
                                    duration={1000}
                                    className="text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]"
                                />
                            </div>
                            <Button
                                title="OVERALL REVENUE"
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696] md:mt-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
