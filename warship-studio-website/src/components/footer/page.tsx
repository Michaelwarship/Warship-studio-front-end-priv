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

                        <div className="md:space-y-5">
                            <AnimateText>
                                <p className="text-[25px] md:text-[28px] text-[#0A231D]">
                                    studios@warshipstudio.com
                                </p>
                                <p className="text-[25px] md:text-[28px] text-[#0A231D]">
                                    @warshipstudio
                                </p>
                            </AnimateText>
                        </div>

                        <div className="flex space-x-5">
                            <AnimateText>
                                <Link
                                    href="#"
                                    className="font-geistMono text-[12px] md:text-[14px]"
                                >
                                    INSTAGRAM
                                </Link>
                            </AnimateText>
                            <AnimateText>
                                <Link
                                    href="#"
                                    className="font-geistMono text-[12px] md:text-[14px]"
                                >
                                    BEHANCE
                                </Link>
                            </AnimateText>
                            <AnimateText>
                                <Link
                                    href="#"
                                    className="font-geistMono text-[12px] md:text-[14px]"
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

                        <div className="flex flex-col space-y-2">
                            <div className="space-x-8 md:space-x-5">
                                <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200 "
                                >
                                    HOME
                                </Link>
                                <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    OUR SERVICES
                                </Link>
                                <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    STUDIO
                                </Link>
                                <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    WORK
                                </Link>
                            </div>

                            <div className="space-x-8 md:space-x-5">
                                <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    MOCKUP
                                </Link>
                                <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    SHOP
                                </Link>
                                <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    CAREER
                                </Link>
                                <Link
                                    href="#"
                                    className="text-[12px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    CONTACT US
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-x-5 md:space-x-20 lg:space-x-20 xl:space-x-14 2xl:flex 2xl:justify-between mt-10">
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[12px] md:text-[14px]"
                >
                    All RIGHTS RESERVED © 2025 WARSHIP STUDIOS LTD{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[12px] md:text-[14px]"
                >
                    COOKIES POLICY{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[12px] md:text-[14px]"
                >
                    COOKIES SETTINGS{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[12px] md:text-[14px]"
                >
                    COOKIES POLICY{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[12px] md:text-[14px]"
                >
                    TERMS OF USE{' '}
                </Link>
            </div>
        </footer>
    )
}
