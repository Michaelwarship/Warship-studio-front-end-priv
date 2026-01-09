import {
    LearnMoreCard,
    AnimateText,
    StaggeredTextContainer,
} from '@/components'
export default function LearnMore() {
    return (
        <section className="">
            <div className="image-fade-right flex space-x-2 overflow-x-auto scrollbar-none h-fit border border-t-0 border-[#E0E0E0] md:pl-15 lg:pl-7 xl:pl-20 2xl:pl-20">
                <StaggeredTextContainer className="hidden justify-center items-center md:flex border-0 [&>*]:border-[#E0E0E0] [&>*]:border-r [&>*:first-child]:border-l">
                    <LearnMoreCard
                        subText="01."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">Creative</span>{' '}
                                <br /> Direction
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                        path="/services"
                    />
                    <LearnMoreCard
                        subText="02."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">Vfx &</span>{' '}
                                <br /> Animation
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                        path="/services"
                    />
                    <LearnMoreCard
                        subText="03."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">
                                    End-to-End
                                </span>{' '}
                                <br /> Production
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                        path="/services"
                    />

                    <LearnMoreCard
                        subText="04."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">
                                    Branding &
                                </span>{' '}
                                <br /> Web Design
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                        path="/services"
                    />
                </StaggeredTextContainer>
            </div>

            {/* <div className="hidden md:block w-full h-0.5 bg-[#E0E0E0]"></div> */}

            {/* SM / MOBILE */}

            <div className="md:hidden flex flex-col space-y-10 sm:space-y-15 [&>*]:border-[#E0E0E0]  [&>*:last-child]:border-b-1 ">
                <div className="pt-20">
                    <LearnMoreCard
                        subText="01."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">Creative</span>{' '}
                                Direction
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                        path="/services"
                    />
                </div>

                <div>
                    <LearnMoreCard
                        subText="02."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">Vfx &</span>{' '}
                                Animation
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                        path="/services"
                    />
                </div>

                <div>
                    <LearnMoreCard
                        subText="03."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">
                                    End-to-End
                                </span>{' '}
                                Production
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                        path="/services"
                    />
                </div>

                <div className="pb-20">
                    <LearnMoreCard
                        subText="04."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">
                                    Branding &
                                </span>{' '}
                                Web Design
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                        path="/services"
                    />
                </div>
            </div>
        </section>
    )
}
