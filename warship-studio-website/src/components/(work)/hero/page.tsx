import { AnimateText, StaggeredTextContainer } from '@/components'

export default function WorkHero() {
    return (
        <section className="py-20 px-5 sm:px-10 md:px-5 md:py-20 lg:py-20 lg:px-20 xl:px-20 border-b border-[#E0E0E0]">
            <StaggeredTextContainer className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-center ">
                <div className="space-y-3">
                    <AnimateText className="about-title font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                        //ABOUT
                    </AnimateText>
                    <p className="tracking-[-2] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] text-[30px] sm:text-[40px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[55px]">
                        *Cre@tive work that wins <br /> hearts & drives sales*
                    </p>
                </div>

                <div>
                    <AnimateText className="about-title font-geistMono text-[10px] md:text-[10px] lg:text-[14px] text-[#969696] ">
                        SH0WREEL
                    </AnimateText>

                    <div className="bg-[#999999] sm:w-full md:w-80 md:h-50 lg:w-90 lg:h-50 xl:w-100 xl:h-60 2xl:w-150 2xl:h-75">
                        <img
                            src="/carousel/carousel-1.png"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </StaggeredTextContainer>
        </section>
    )
}
