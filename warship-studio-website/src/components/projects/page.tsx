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
            <Button
                title="[ VIEW MORE PROJECTS ]"
                className="sm:!px-15 sm:!py-5 bg-transparent lg:text-[14px]"
                hoverColor="bg-none"
            />

            <div className="">
                <Carousel />
            </div>

            <StaggeredTextContainer className="mt-40 px-5 lg:px-20">
                <AnimateText>
                    <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0">
                        // Testimonials
                    </p>
                </AnimateText>

                <AnimateText>
                    <p className="font-satoshi text-[25px] tracking-[-1] sm:text-[50px] lg:text-[55px] md:text-[30px] md:leading-10 lg:leading-14 text-[#0A231D] md:mt-3">
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
