import {
    Button,
    AnimatedCounter,
    StaggeredTextContainer,
    SlideShow,
    OurIdentity,
} from '@/components'

export default function StudioHero() {
    return (
        <section className="">
            <StaggeredTextContainer className="px-5 py-10 lg:px-20 lg:pt-30 lg:pb-10 border-b-1 border-[#E0E0E0]">
                <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                    //OUR IDENTITY
                </p>

                <p className="text-[#0A231D] text-[40px] md:text-[56px] tracking-[-2]">
                    Warship Studio.
                </p>
            </StaggeredTextContainer>

            {/* SLIDESHOW */}

            <SlideShow />

            <div className="overflow-x-clip">
                <OurIdentity />
            </div>
        </section>
    )
}
