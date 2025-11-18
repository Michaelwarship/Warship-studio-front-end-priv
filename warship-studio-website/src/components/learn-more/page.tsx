import LearnMoreCard from '@/components/learn-more/section/page'

export default function LearnMore() {
    return (
        <section className="">
            <div className="hidden justify-center items-center md:flex">
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
            </div>

            <div className="hidden md:block w-full h-0.5 bg-[#E0E0E0]"></div>

            {/* SM / MOBILE */}

            <div className="md:hidden flex flex-col space-y-10 sm:space-y-15 mt-40 sm:mt-50">
                <LearnMoreCard
                    subText="01."
                    title={
                        <>
                            <span className="text-[#AEAEAE]">Strategy</span> R&D
                        </>
                    }
                    buttonText="[ LEARN MORE ]"
                />

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
        </section>
    )
}
