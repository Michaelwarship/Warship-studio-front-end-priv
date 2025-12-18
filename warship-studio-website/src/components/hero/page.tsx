'use client'
import {
    Button,
    PartnersRow,
    AnimateText,
    StaggeredTextContainer,
    VideoEmbed,
} from '@/components'

export default function HeroSection() {
    return (
        <section className="">
            <div>
                <StaggeredTextContainer className="relative ">
                    <div className="overflow-hidden ">
                        <div
                            data-no-anim
                            className="w-full aspect-[16/9] overflow-hidden"
                        >
                            <VideoEmbed
                                src="https://youtu.be/QtAB86I_kLs?t=7"
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none "
                                // allow="autoplay; fullscreen"
                            />
                        </div>
                    </div>
                    {/*TEXT AND BUTTONS*/}

                    <div className="absolute bottom-0 left-0 w-full px-5 sm:px-10 md:px-15 lg:px-20 xl:px-20 2xl:px-20 pb-30">
                        <div>
                            <AnimateText>
                                <p className="text-[45px] text-[#ffffff] sm:text-[70px] leading-14 sm:leading-22 md:text-[85px] md:leading-25 lg:text-[70px] xl:text-[85px] 2xl:text-[85px]">
                                    Pushing Pixels <br />
                                    with precision.
                                </p>
                            </AnimateText>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center justify-start space-x-5 mt-7 sm:mt-10">
                                <Button title="HIRE US TODAY" className="" />
                                <Button
                                    title="GET A QUOTE"
                                    className="bg-[#E0E0E0]"
                                />
                            </div>

                            {/* <div className="hidden sm:block w-20 lg:w-30 mt-10 ">
                                <img
                                    src="/warship-est.svg"
                                    alt="warship-est"
                                    className="w-full object-cover"
                                />
                            </div> */}
                        </div>
                    </div>
                </StaggeredTextContainer>

                {/*PARTNERS*/}
                <div>
                    <PartnersRow />
                </div>
            </div>
        </section>
    )
}
