import {
    LearnMoreCard,
    AnimateText,
    StaggeredTextContainer,
} from '@/components'
export default function LearnMore() {
    return (
        <section className="">
            <StaggeredTextContainer className="hidden justify-center items-center md:flex border border-[#E0E0E0] [&>*]:border-[#E0E0E0] [&>*]:border-r [&>*]:border-t-0 [&>*:first-child]:border-l [&>*:last-child]:border-r-1">
                <LearnMoreCard
                    subText="01."
                    title={
                        <>
                            <span className="text-[#AEAEAE]">Strategy</span>{' '}
                            <br /> R&D
                        </>
                    }
                    buttonText="[ LEARN MORE ]"
                />

                <LearnMoreCard
                    subText="02."
                    title={
                        <>
                            <span className="text-[#AEAEAE]">Creative</span>{' '}
                            <br /> Direction
                        </>
                    }
                    buttonText="[ LEARN MORE ]"
                />

                <LearnMoreCard
                    subText="03."
                    title={
                        <>
                            <span className="text-[#AEAEAE]">Vfx &</span> <br />{' '}
                            Animation
                        </>
                    }
                    buttonText="[ LEARN MORE ]"
                />
            </StaggeredTextContainer>

            {/* <div className="hidden md:block w-full h-0.5 bg-[#E0E0E0]"></div> */}

            {/* SM / MOBILE */}

            <div className="md:hidden flex flex-col space-y-10 sm:space-y-15 mt-40 sm:mt-50 [&>*]:border-[#E0E0E0] [&>*:last-child]:border-b-1 [&>*:first-child]:border-t-1">
                <div className="pt-20">
                    <LearnMoreCard
                        subText="01."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">Strategy</span>{' '}
                                R&D
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                    />
                </div>

                <div>
                    <LearnMoreCard
                        subText="02."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">Creative</span>{' '}
                                Direction
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                    />
                </div>

                <div className="pb-20">
                    <LearnMoreCard
                        subText="03."
                        title={
                            <>
                                <span className="text-[#AEAEAE]">Vfx &</span>{' '}
                                Animation
                            </>
                        }
                        buttonText="[ LEARN MORE ]"
                    />
                </div>
            </div>
        </section>
    )
}
