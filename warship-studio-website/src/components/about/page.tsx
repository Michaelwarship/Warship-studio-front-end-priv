import { Button } from '@/components'
export default function AboutPage() {
    return (
        <section className="overflow-x-clip  [&>*]:border-[#E0E0E0] md:[&>*]:border-b-1 ">
            <div className="flex flex-col justify-between py-20 px-5 sm:px-10 md:px-20 md:py-20 lg:py-20 lg:flex-row lg:px-20 xl:px-30">
                <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0">
                    //ABOUT
                </p>

                <div>
                    <p className="hidden lg:block text-[30px] font-satoshi leading-9">
                        Warship Studios is a digital-first, multidisciplinary{' '}
                        <br /> creative agency that helps forward-thinking
                        brands <br /> make their innovation visually compelling.{' '}
                        <span className="text-[#AEAEAE]">
                            We brand <br /> world leading brands.
                        </span>
                    </p>

                    <p className="lg:hidden text-[30px] font-satoshi leading-9">
                        Warship Studios is a digital-first, multidisciplinary{' '}
                        creative agency that helps forward-thinking brands make
                        their innovation visually compelling.{' '}
                        <span className="text-[#AEAEAE]">
                            We brand world leading brands.
                        </span>
                    </p>

                    <div className="flex space-x-5 mt-10">
                        <Button title="BOOK A STRATEGY CALL" className="" />
                        <Button title="GET A QUOTE" className="bg-[#E0E0E0]" />
                    </div>

                    <div className="mt-10 flex flex-col items-center ml-15 space-y-5 mt-20 [&>*]:border-[#E0E0E0] [&>*:nth-child(1)]:border-b [&>*:nth-child(3)]:border-b [&>*:nth-child(5)]:border-b md:[&>*]:border-0 md:flex-row md:ml-0 md:space-y-0 md:space-x-20 md:mt-20 lg:space-x-50">
                        <div className="md:hidden w-200"></div>

                        <div className="">
                            <p className="absolute left-5 mt-2 md:mt-0 sm:left-10 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                01.
                            </p>
                            <p className="text-[40px] md:text-[55px] text-[#0A231D] font-satoshi tracking-[-3]">
                                200
                            </p>
                            <Button
                                title="PROJECT"
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696]"
                            />
                        </div>

                        <div className="md:hidden w-200"></div>

                        <div>
                            <p className="absolute left-5 mt-2 md:mt-0 sm:left-10 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                02.
                            </p>
                            <p className="text-[40px] md:text-[55px] text-[#0A231D] font-satoshi">
                                6+
                            </p>
                            <Button
                                title="EXPERIENCE"
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696]"
                            />
                        </div>

                        <div className="md:hidden w-200 "></div>

                        <div>
                            <p className="absolute left-5 mt-2 md:mt-0 sm:left-10 md:static text-[#969696] mb-5 text-[14px] md:text-[16px]">
                                03.
                            </p>
                            <p className="text-[40px] md:text-[55px] text-[#0A231D] font-satoshi">
                                15+
                            </p>
                            <Button
                                title="EXPERT TEAM"
                                className="bg-transparent !p-0 !md:text-[16px] !text-[#969696]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
