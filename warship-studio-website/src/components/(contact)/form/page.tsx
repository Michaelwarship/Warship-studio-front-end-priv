import { Button, SubmitForm, StaggeredTextContainer } from '@/components'
import Link from 'next/link'

export default function ContactForm() {
    return (
        <section>
            <StaggeredTextContainer className="px-5 py-15 lg:px-20 lg:py-15">
                <div className="space-y-20 lg:space-y-0  lg:flex lg:justify-between">
                    <div className="space-y-5">
                        <div className="space-y-5">
                            <p className="text-[#969696] text-[14px] md:text-[16px]">
                                FOR GENERAL ENQUIRIES, <br /> PLEASE FILL OUT
                                THE FORM.
                            </p>

                            <div className="flex flex-col">
                                <p>Call or send us a message on WhatsApp</p>
                                <Link
                                    href=""
                                    className="text-[14px] md:text-[18px] underline tracking-[-0.5]"
                                >
                                    +234 813 291 2112
                                </Link>
                                <Link
                                    href=""
                                    className="text-[14px] md:text-[18px] underline tracking-[-0.5]"
                                >
                                    +1 (731) 236-4319
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[#969696] text-[14px] md:text-[14px]">
                                HATE CONTACT FORM
                            </p>

                            <p className="text-[#0A231D] text-[18px] md:text-[18px]">
                                studios@warshipstudio.com
                            </p>

                            <p className="text-[#0A231D] text-[18px] md:text-[18px]">
                                @warshipstudio.com
                            </p>

                            <div className="flex space-x-5">
                                <Link
                                    href="#"
                                    className="font-geistMono text-[14px]"
                                >
                                    INSTAGRAM
                                </Link>
                                <Link
                                    href="#"
                                    className="font-geistMono text-[14px]"
                                >
                                    BEHANCE
                                </Link>
                                <Link
                                    href="#"
                                    className="font-geistMono text-[14px]"
                                >
                                    LINKEDIN
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <SubmitForm />
                    </div>
                </div>
            </StaggeredTextContainer>

            <StaggeredTextContainer className=" [&>*]:border-[#E0E0E0] [&>*]:border-b-1 ">
                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-80 px-5 py-10 md:pt-20 lg:px-20 lg:pb-25 lg:py-40">
                    <p className="text-[#969696] text-[14px] md:text-[16px]">
                        //ADDRESS
                    </p>

                    <div className="lg:flex lg:space-x-80">
                        <p className="text-[#0A231D] text-[20px] md:text-[16px]">
                            Cadastral Zone 2 Gwarimpa 1 AMAC, Abuja
                        </p>
                        <p className="text-[#0A231D] text-[20px] md:text-[16px]">
                            30 N GOULD ST STE R SHERIDAN, WY 82801
                        </p>
                    </div>
                </div>

                <div className="">
                    <div className="lg:flex space-y-5 lg:space-y-0 lg:space-x-[-550px] px-5 py-10 lg:px-20 lg:py-20 lg:pr-25">
                        <p className="text-[#969696] text-[14px] md:text-[16px] flex-1">
                            //CAREERS
                        </p>

                        <p className="hyphens-auto break-words text-[#0A231D] text-[20px] lg:text-[18px] flex-[1] leading-[1]">
                            We’re all about creating beautiful, meaningful work
                            that evokes the needed emotions, and we can’t do it
                            alone. We’d love to hear from you.{' '}
                            <span className="text-[#AEAEAE]">
                                If you’re talented and passionate about design,
                                reach out to us at 
                                <Link href="" className="underline">
                                    careers@warshipstudio.com
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </StaggeredTextContainer>
        </section>
    )
}
