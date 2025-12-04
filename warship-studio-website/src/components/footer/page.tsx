import Link from 'next/link'
import { Subscribe, LetsTalk, AnimateText } from '@/components'

export default function Footer() {
    return (
        <footer className="px-5 lg:px-10 xl:px-20 py-10">
            <LetsTalk />
            <div className="mt-40 mb-15 flex flex-col lg:flex-row md:space-x-30 lg:space-x-15 xl:space-x-50 2xl:justify-between">
                <div className="space-y-10 md:space-y-15">
                    <div>
                        <AnimateText>
                            <div className="bg-[#D2FFE8] w-fit px-5 py-4 rounded-full mb-5">
                                <img
                                    src="/warship-logo.svg"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </AnimateText>
                        <AnimateText>
                            <p className="text-[20px] md:text-[30px]">
                                Pushing pixels frame after <br /> frame
                            </p>
                        </AnimateText>
                    </div>

                    <Subscribe />
                </div>

                <div className="space-y-10">
                    <div className="space-y-5 mt-10 md:mt:15">
                        <AnimateText>
                            <p className="font-geistMono text-[14px] text-[#969696]">
                                GET IN TOUCH
                            </p>
                        </AnimateText>

                        <div className="md:space-y-5 mb-10 md:mb-0">
                            <AnimateText>
                                <p className="text-[25px] md:text-[28px] text-[#0A231D]">
                                    <a href="https://studios@warshipstudio.com">
                                        studios@warshipstudio.com
                                    </a>
                                </p>
                                <p className="text-[25px] md:text-[28px] text-[#0A231D]">
                                    <a href="https://@warshipstudio">
                                        @warshipstudio
                                    </a>
                                </p>
                            </AnimateText>
                        </div>

                        <div className="flex flex-col md:flex-row space-x-5">
                            <AnimateText>
                                <Link
                                    href="https://www.instagram.com/warship_studios?igsh=MnJiajhndXFndXk4"
                                    className="md:font-geistMono text-[20px] md:text-[14px]"
                                >
                                    INSTAGRAM
                                </Link>
                            </AnimateText>
                            <AnimateText>
                                <Link
                                    href="https://www.behance.net/warship_studios"
                                    className="md:font-geistMono text-[20px] md:text-[14px]"
                                >
                                    BEHANCE
                                </Link>
                            </AnimateText>
                            <AnimateText>
                                <Link
                                    href="https://www.linkedin.com/company/warship-studios/"
                                    className="md:font-geistMono text-[20px] md:text-[14px]"
                                >
                                    LINKEDIN
                                </Link>
                            </AnimateText>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <AnimateText>
                            <p className="font-geistMono text-[14px] text-[#969696]">
                                EXPLORE
                            </p>
                        </AnimateText>

                        <div className="flex flex-col md:space-y-2">
                            <div className="flex flex-col md:flex-row space-x-8 md:space-x-5">
                                {/* <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200 "
                                >
                                    BACK TO TOP
                                </Link> */}
                                <Link
                                    href="/services"
                                    className="text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    OUR SERVICES
                                </Link>
                                <Link
                                    href="/studio"
                                    className="text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    STUDIO
                                </Link>
                                <Link
                                    href="/work"
                                    className="text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    WORK
                                </Link>
                            </div>

                            <div className="flex flex-col md:flex-row space-x-8 md:space-x-5">
                                <Link
                                    href="#/mockup"
                                    className="text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    MOCKUP
                                </Link>
                                <Link
                                    href="/shop"
                                    className="text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    SHOP
                                </Link>
                                <Link
                                    href="career"
                                    className="text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    CAREER
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    CONTACT US
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row space-x-5 md:space-x-20 lg:space-x-20 xl:space-x-14 2xl:flex 2xl:justify-between mt-10">
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[10px] md:text-[14px]"
                >
                    All RIGHTS RESERVED © 2025 WARSHIP STUDIOS LTD{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[10px] md:text-[14px]"
                >
                    COOKIES POLICY{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[10px] md:text-[14px]"
                >
                    COOKIES SETTINGS{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[10px] md:text-[14px]"
                >
                    COOKIES POLICY{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[10px] md:text-[14px]"
                >
                    TERMS OF USE{' '}
                </Link>
            </div>
        </footer>
    )
}
