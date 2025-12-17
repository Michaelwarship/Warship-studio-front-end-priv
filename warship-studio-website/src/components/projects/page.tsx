import {
    Button,
    CarouselCard,
    AnimateText,
    StaggeredTextContainer,
    Carousel,
} from '@/components'

export default function Projects() {
    return (
        <section className="pt-5 py-20 ">
            <div className="px-5 md:px-10 md:px-10 lg:px-20">
                <Button
                    title="[ VIEW MORE PROJECTS ]"
                    className="bg-transparent lg:text-[14px] !p-0 mb-5"
                    hoverColor="bg-none"
                />
            </div>

            <div className="">
                <Carousel />
            </div>

            <StaggeredTextContainer className="mt-40 px-5 sm:px-10 md:px-15 lg:px-20 xl:px-18 2xl:px-20">
                <AnimateText>
                    <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0">
                        // Testimonials
                    </p>
                </AnimateText>

                <AnimateText>
                    <p className="font-satoshi text-[25px] tracking-[-1] sm:text-[45px] lg:text-[55px] md:text-[30px] md:leading-10 lg:leading-14 text-[#0A231D] md:mt-3">
                        A reliable partner for
                        <span className="text-[#AEAEAE]">
                            {' '}
                            wide <br /> world-class quality.
                        </span>
                    </p>
                </AnimateText>
            </StaggeredTextContainer>
        </section>
    )
}
