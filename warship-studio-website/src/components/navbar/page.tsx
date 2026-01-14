'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import { Button, AnimateText, ActiveLink } from '@/components'
import { Route } from '@/lib/route'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-white sticky top-0 z-10 [&>*]:border-[#E0E0E0] [&>*]:border-b-1 ">
            <div className="flex items-center justify-between px-5 sm:px-10 md:px-15 py-3 lg:px-20 lg:py-5">
                <Link href="/">
                    <div className="w-15 relative z-[1000]">
                        <Image
                            src="/warship.svg"
                            alt="logo"
                            width={100}
                            height={100}
                            className="relative z-[1000]"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </Link>

                {/*HAMBURGER*/}
                <div className="lg:hidden flex items-center justify-between space-x-5 relative z-[1000]">
                    <div>
                        <AnimateText disabled={true}>
                            <button
                                onClick={() => {
                                    setIsOpen(false)
                                    router.push(Route.CONTACT)
                                }}
                                className="bg-black text-white text-[12px] px-5 py-2  rounded-[5px]"
                            >
                                Let's Talk!
                            </button>
                        </AnimateText>
                    </div>

                    <div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden group"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? 'open' : 'closed'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {isOpen ? (
                                        <FaXmark className="text-black text-[20px]" />
                                    ) : (
                                        <FaBars className="text-black text-[20px]" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU (animated) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: '0%' }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="flex flex-col fixed inset-0 z-[50] bg-[#07E272] pt-30 pl-5 overflow-y-auto space-y-5 lg:hidden"
                        >
                            {/* your links */}

                            <Link
                                href={Route.SERVICES}
                                onClick={() => setIsOpen(false)}
                                className="font-geistMono text-[#0A231D] text-[50px] sm:text-[90px] font-light"
                            >
                                SERVICES
                            </Link>
                            <Link
                                href={Route.STUDIO}
                                onClick={() => setIsOpen(false)}
                                className="font-geistMono text-[#0A231D] text-[50px] sm:text-[90px] font-light"
                            >
                                STUDIO
                            </Link>
                            <Link
                                href={Route.WORK}
                                onClick={() => setIsOpen(false)}
                                className="font-geistMono text-[#0A231D] text-[50px] sm:text-[90px] font-light"
                            >
                                WORK
                            </Link>
                            {/* <Link
                                href={Route.MOCKUP}
                                onClick={() => setIsOpen(false)}
                                className="font-geistMono text-[50px] sm:text-[90px] font-light"
                            >
                                MOCKUP
                            </Link> */}
                            <Link
                                href="https://warshipstudio.blog/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="font-geistMono text-[#0A231D] text-[50px] sm:text-[90px] font-light"
                            >
                                BLOG
                            </Link>
                            {/* <Link
                                href={Route.SHOP}
                                onClick={() => setIsOpen(false)}
                                className="font-geistMono text-[50px] sm:text-[90px] font-light"
                            >
                                SHOP
                            </Link> */}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* DESKTOP MENU  */}

                <div className="hidden lg:flex lg:flex-row lg:space-x-7 xl:space-x-10">
                    <ActiveLink
                        href={Route.SERVICES}
                        className="animated-link text-[#0A231D] font-geistMono text-[14px] font-light"
                    >
                        SERVICES
                    </ActiveLink>
                    <ActiveLink
                        href={Route.STUDIO}
                        className="animated-link text-[#0A231D] font-geistMono text-[14px] font-light"
                    >
                        STUDIO
                    </ActiveLink>
                    <ActiveLink
                        href={Route.WORK}
                        className="animated-link text-[#0A231D] font-geistMono text-[14px] font-light"
                    >
                        WORK
                    </ActiveLink>
                    {/* <ActiveLink
                        href={Route.MOCKUP}
                        className="animated-link font-geistMono text-[14px] font-light"
                    >
                        MOCKUP
                    </ActiveLink> */}
                    <ActiveLink
                        href="https://warshipstudio.blog/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animated-link text-[#0A231D] font-geistMono text-[14px] font-light"
                    >
                        BLOG
                    </ActiveLink>
                    {/* <ActiveLink
                        href={Route.SHOP}
                        className="animated-link font-geistMono text-[14px] font-light"
                    >
                        SHOP
                    </ActiveLink> */}
                    <ActiveLink
                        href={Route.CONTACT}
                        className="animated-link text-[#0A231D] font-geistMono text-[14px] font-light"
                    >
                        LET'S TALK
                    </ActiveLink>
                </div>
            </div>
        </nav>
    )
}
