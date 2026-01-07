'use client'
import Link from 'next/link'
import { Subscribe, LetsTalk, AnimateText, ActiveLink } from '@/components'
// import { useState } from 'react'

export default function Footer() {
    // const = [selected, setSelected] = useState(false);
    return (
        <footer className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-20 ">
            <LetsTalk />
            <div className="mt-40 mb-15 flex flex-col lg:flex-row md:space-x-30 lg:space-x-15 xl:space-x-50 2xl:space-x-80">
                <div className="space-y-10 md:space-y-5">
                    <div>
                        <AnimateText disabled>
                            {/* <div className="bg-[#D2FFE8] w-fit px-5 py-4 rounded-full mb-5">
                                <img
                                    src="/warship-logo.svg"
                                    className="w-full h-full object-cover"
                                />
                            </div> */}

                            <div className="w-32">
                                <img
                                    src="/logo-animation/white_gif_1.gif"
                                    className="w-full h-full object-cover mb-5"
                                />
                            </div>
                        </AnimateText>
                        {/* <AnimateText disabled>
                            <p className="text-[20px] md:text-[30px]">
                                Pushing pixels frame after <br /> frame
                            </p>
                        </AnimateText> */}
                    </div>

                    <Subscribe />
                </div>

                <div className="space-y-10">
                    <div className="space-y-5 mt-10 md:mt:15">
                        <AnimateText disabled>
                            <p className="font-geistMono text-[14px] text-[#969696]">
                                GET IN TOUCH
                            </p>
                        </AnimateText>

                        <div className="md:space-y-5 mb-10 md:mb-10 xl:mb-5">
                            <AnimateText disabled>
                                <p className="text-[25px] md:text-[28px] text-[#0A231D]">
                                    <a href="mailto:studios@warshipstudio.com">
                                        studios@warshipstudio.com
                                    </a>
                                </p>
                                <p className="text-[25px] md:text-[28px] text-[#0A231D]">
                                    <a href="#">@warshipstudio</a>
                                </p>
                            </AnimateText>
                        </div>

                        <div className="flex flex-col md:flex-row space-x-5">
                            <AnimateText disabled>
                                <Link
                                    href="https://www.instagram.com/warship_studios?igsh=MnJiajhndXFndXk4"
                                    className="font-geistMono text-[20px] md:text-[14px]"
                                >
                                    INSTAGRAM
                                </Link>
                            </AnimateText>
                            <AnimateText disabled>
                                <Link
                                    href="https://www.behance.net/warship_studios"
                                    className="font-geistMono text-[20px] md:text-[14px]"
                                >
                                    BEHANCE
                                </Link>
                            </AnimateText>
                            <AnimateText disabled>
                                <Link
                                    href="https://www.linkedin.com/company/warship-studios/"
                                    className="font-geistMono text-[20px] md:text-[14px]"
                                >
                                    LINKEDIN
                                </Link>
                            </AnimateText>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <AnimateText disabled>
                            <p className="font-geistMono text-[14px] text-[#969696]">
                                EXPLORE
                            </p>
                        </AnimateText>

                        <div className="flex flex-col md:space-y-2">
                            <div className="flex flex-col md:flex-row space-x-8 md:space-x-5">
                                <ActiveLink
                                    href="/"
                                    className="font-geistMono text-[30px] md:text-[14px] transform hover:text-[#07E272] animated-link"
                                >
                                    HOME
                                </ActiveLink>
                                <ActiveLink
                                    href="/services"
                                    className="font-geistMono text-[30px] md:text-[14px] transform hover:text-[#07E272] animated-link"
                                >
                                    SERVICES
                                </ActiveLink>
                                <ActiveLink
                                    href="/studio"
                                    className="font-geistMono text-[30px] md:text-[14px] transform hover:text-[#07E272] animated-link"
                                >
                                    STUDIO
                                </ActiveLink>
                                <ActiveLink
                                    href="/work"
                                    className="font-geistMono text-[30px] md:text-[14px] transform hover:text-[#07E272] animated-link"
                                >
                                    WORK
                                </ActiveLink>
                            </div>

                            <div className="flex flex-col md:flex-row space-x-8 md:space-x-5">
                                {/* <ActiveLink
                                    href="#/mockup"
                                    className="font-geistMono text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    MOCKUP
                                </ActiveLink> */}
                                {/* <ActiveLink
                                    href="/shop"
                                    className="font-geistMono text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    SHOP
                                </ActiveLink> */}
                                {/* <ActiveLink
                                    href="career"
                                    className="font-geistMono text-[30px] md:text-[14px] transform hover:text-[#07E272] hover:underline transition-all duration-200"
                                >
                                    CAREER
                                </ActiveLink> */}
                                <ActiveLink
                                    href="/contact"
                                    className="font-geistMono text-[30px] md:text-[14px] transform hover:text-[#07E272] animated-link"
                                >
                                    CONTACT US
                                </ActiveLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-x-20 lg:space-x-20 xl:space-x-14 2xl:flex mt-10">
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[14px] md:text-[12px] lg:text-[14px]"
                >
                    All RIGHTS RESERVED © 2025 WARSHIP STUDIOS LTD{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[14px] md:text-[12px] lg:text-[14px] whitespace-nowrap"
                >
                    PRIVACY POLICY{' '}
                </Link>
                {/* <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[10px] xl:text-[14px]"
                >
                    COOKIES SETTINGS{' '}
                </Link> */}
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[14px] md:text-[12px] lg:text-[14px] whitespace-nowrap"
                >
                    COOKIES POLICY{' '}
                </Link>
                {/* <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[10px] xl:text-[14px]"
                >
                    TERMS OF USE{' '}
                </Link> */}
            </div>
        </footer>
    )
}
