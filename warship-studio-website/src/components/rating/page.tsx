import RatingCard from './section/page'

export default function Rating() {
    return (
        <section>
            <div className="hidden md:flex justify-center border border-[#E0E0E0] [&>*]:border-[#E0E0E0] [&>*]:border-r [&>*]:border-t-0 [&>*:first-child]:border-l [&>*:last-child]:border-r-1">
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
                            "We like their work method, <br /> design skills,
                            and the way <br /> they communicate."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />

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
                            "The most impressive thing <br /> about the company
                            is their <br /> sensibility to UI/UX, which is{' '}
                            <br />
                            very clean and user-friendly."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />

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
                            "The most impressive thing <br /> about the company
                            is their <br /> sensibility to UI/UX, which is{' '}
                            <br />
                            very clean and user-friendly."
                        </>
                    }
                    image="/profile/user-1.png"
                    buttonText="[ BITOFTRADE ]"
                />
            </div>

            {/* MOBILE SCREEN / SM */}
            <div className="md:hidden overflow-x-clip flex flex-col space-y-15 sm:space-y-10 [&>*]:border-[#E0E0E0] [&>*:first-child]:border-b-0 [&>*:nth-child(2)]:border-b [&>*:nth-child(4)]:border-b [&>*:last-child]:border-b-1 ">
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
            </div>
        </section>
    )
}
