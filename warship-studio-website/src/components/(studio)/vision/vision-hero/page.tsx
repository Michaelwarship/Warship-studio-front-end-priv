import { StaggeredTextContainer } from '@/components'
export default function StudioVisonHero() {
    return (
        <section>
            <StaggeredTextContainer className="flex flex-col justify-between py-20 px-5 sm:px-5 md:px-20 md:py-20 lg:py-30 lg:flex-row lg:px-20 xl:px-20 md:border-b-1 md:border-[#E0E0E0]">
                <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                    HUMBLE AT OUR CORE. <br />
                    BOLD IN OUR VISION.
                </p>

                <div className="flex-1">
                    <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                        As passionate artists and diverse human beings, we
                        believe in the power of shared experience. We’re
                        motivated by the desire to inspire and be inspired,
                        continually reimagining the everyday and pushing
                        boundaries through our shared creativity.
                    </p>
                </div>
            </StaggeredTextContainer>
        </section>
    )
}
