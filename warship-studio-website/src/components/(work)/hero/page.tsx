import { AnimateText, StaggeredTextContainer, VideoEmbed } from '@/components'

export default function WorkHero() {
    return (
        <section className="py-20 px-5 md:py-20 lg:py-20 border-b border-[#E0E0E0] sm:px-10 md:px-15 lg:px-20 xl:px-30 2xl:px-40">
            <StaggeredTextContainer className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-center ">
                <div className="space-y-3 flex-1">
                    <AnimateText className="about-title font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                        //ABOUT
                    </AnimateText>
                    <p className="tracking-[-2] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] text-[30px] sm:text-[40px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[55px]">
                        *Cre@tive work that wins <br /> hearts & drives sales*
                    </p>
                </div>

                <div className="flex-1">
                    <AnimateText className="about-title font-geistMono text-[10px] md:text-[10px] lg:text-[14px] text-[#969696] ">
                        SH0WREEL
                    </AnimateText>

                    <div className="w-full aspect-video">
                        <VideoEmbed
                            controls
                            src="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </StaggeredTextContainer>
        </section>
    )
}
