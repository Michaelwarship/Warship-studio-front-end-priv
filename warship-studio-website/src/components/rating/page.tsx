import { RatingCard, StaggeredTextContainer } from '@/components'

export default function Rating() {
    return (
        <section>
            <StaggeredTextContainer className="overflow-hidden flex flex-col space-y-15 sm:space-y-10 md:space-y-0 md:flex-row justify-center md:border [&>*]:border-[#E0E0E0] [&>*:first-child]:border-b-0 [&>*:nth-child(2)]:border-b [&>*:nth-child(4)]:border-b [&>*:last-child]:border-b-1 md:border-[#E0E0E0] md:[&>*]:border-[#E0E0E0] md:[&>*]:border-r md:[&>*]:border-t-0 md:[&>*:first-child]:border-l md:[&>*:last-child]:border-r-1">
                <RatingCard
                    title={
                        <>
                            Igor Chygrynov
                            <br />{' '}
                            <span className="text-[#AEAEAE]">
                                CEO at Bitoftrade
                            </span>
                        </>
                    }
                    description={
                        <>
                            "We like their work method, design skills, and the
                            way they communicate."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />

                <div className="md:hidden w-200"></div>

                <RatingCard
                    title={
                        <>
                            Igor Chygrynov
                            <br />{' '}
                            <span className="text-[#AEAEAE]">
                                CEO at Bitoftrade
                            </span>
                        </>
                    }
                    description={
                        <>
                            "The most impressive thing about the company is
                            their sensibility to UI/UX, which is very clean and
                            user-friendly."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />

                <div className="md:hidden w-200"></div>

                <RatingCard
                    title={
                        <>
                            Igor Chygrynov
                            <br />{' '}
                            <span className="text-[#AEAEAE]">
                                CEO at Bitoftrade
                            </span>
                        </>
                    }
                    description={
                        <>
                            "The most impressive thing about the company is
                            their sensibility to UI/UX, which is very clean and
                            user-friendly."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />

                <div className="md:hidden w-200"></div>
            </StaggeredTextContainer>

            {/* MOBILE SCREEN / SM */}
            {/* <div className="md:hidden overflow-x-clip flex flex-col space-y-15 sm:space-y-10 [&>*]:border-[#E0E0E0] [&>*:first-child]:border-b-0 [&>*:nth-child(2)]:border-b [&>*:nth-child(4)]:border-b [&>*:last-child]:border-b-1 ">
                <RatingCard
                    title={
                        <>
                            Igor Chygrynov
                            <br />{' '}
                            <span className="text-[#AEAEAE]">
                                CEO at Bitoftrade
                            </span>
                        </>
                    }
                    description={
                        <>
                            "We like their work method, design skills, and the
                            way they communicate."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />

                <div className="md:hidden w-200"></div>

                <RatingCard
                    title={
                        <>
                            Igor Chygrynov
                            <br />{' '}
                            <span className="text-[#AEAEAE]">
                                CEO at Bitoftrade
                            </span>
                        </>
                    }
                    description={
                        <>
                            "The most impressive thing about the company is
                            their sensibility to UI/UX, which is very clean and
                            user-friendly."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />

                <div className="md:hidden w-200"></div>

                <RatingCard
                    title={
                        <>
                            Igor Chygrynov
                            <br />{' '}
                            <span className="text-[#AEAEAE]">
                                CEO at Bitoftrade
                            </span>
                        </>
                    }
                    description={
                        <>
                            "The most impressive thing about the company is
                            their sensibility to UI/UX, which is very clean and
                            user-friendly."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />

                <div className="md:hidden w-200"></div>
            </div> */}
        </section>
    )
}
