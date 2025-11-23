import Link from 'next/link'
import Subscribe from '../subscribe/page'

export default function Footer() {
    return (
        <footer className="px-5 lg:px-10 xl:px-20 py-10">
            <div className="mt-40 mb-15 flex flex-col lg:flex-row md:space-x-30 lg:space-x-15 xl:space-x-50 2xl:space-x-70">
                <div className="space-y-10 md:space-y-15">
                    <div>
                        <div className="bg-[#D2FFE8] w-fit px-5 py-4 rounded-full mb-5">
                            <img
                                src="/warship-logo.svg"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="text-[20px] md:text-[30px]">
                            Pushing pixels frame after <br /> frame
                        </p>
                    </div>

                    <Subscribe />
                </div>

                <div className="space-y-10">
                    <div className="space-y-5 mt-10">
                        <p className="font-geistMono text-[14px] text-[#969696]">
                            GET IN TOUCH
                        </p>

                        <div>
                            <p className="text-[25px] md:text-[28px] text-[#0A231D]">
                                studios@warshipstudio.com
                            </p>

                            <p className="text-[25px] md:text-[28px] text-[#0A231D] mt-5">
                                @warshipstudio
                            </p>
                        </div>

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

                    <div className="space-y-5">
                        <p className="font-geistMono text-[14px] text-[#969696]">
                            EXPLORE
                        </p>

                        <div className="flex flex-col space-y-2">
                            <div className="space-x-5">
                                <Link href="#" className="text-[14px]">
                                    HOME
                                </Link>
                                <Link href="#" className="text-[14px]">
                                    OUR SERVICES
                                </Link>
                                <Link href="#" className="text-[14px]">
                                    STUDIO
                                </Link>
                                <Link href="#" className="text-[14px]">
                                    WORK
                                </Link>
                            </div>

                            <div className="space-x-5">
                                <Link href="#" className="text-[14px]">
                                    MOCKUP
                                </Link>
                                <Link href="#" className="text-[14px]">
                                    SHOP
                                </Link>
                                <Link href="#" className="text-[14px]">
                                    CAREER
                                </Link>
                                <Link href="#" className="text-[14px]">
                                    CONTACT US
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-x-5 md:space-x-20 lg:space-x-20 xl:space-x-14 2xl:space-x-30 mt-10">
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[14px]"
                >
                    All RIGHTS RESERVED © 2025 WARSHIP STUDIOS LTD{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[14px]"
                >
                    COOKIES POLICY{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[14px]"
                >
                    COOKIES SETTINGS{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[14px]"
                >
                    COOKIES POLICY{' '}
                </Link>
                <Link
                    href="#"
                    className="text-[#969696] font-geistMono text-[14px]"
                >
                    TERMS OF USE{' '}
                </Link>
            </div>
        </footer>
    )
}
