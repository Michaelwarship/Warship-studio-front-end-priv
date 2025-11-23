'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import Button from '../button/page'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-white px-5 py-3 lg:px-20 lg:py-5 sticky top-0 z-10">
            <div className="flex items-center justify-between">
                <div className="w-15 relative z-[999]">
                    <Image
                        src="./warship.svg"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </div>

                {/*HAMBURGER*/}
                <div className="lg:hidden flex items-center justify-between space-x-5 relative z-[1000]">
                    <Button
                        title="Let's Talk!"
                        className="bg-black text-white"
                    />

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden"
                    >
                        {isOpen ? (
                            <FaXmark className="text-black text-[20px]" />
                        ) : (
                            <FaBars className="text-black text-[20px]" />
                        )}
                    </button>
                </div>

                <div
                    className={`${isOpen ? 'block' : 'hidden'} flex flex-col fixed inset-0 z-[50] bg-[#07E272] pt-30 pl-5 overflow-y-auto space-y-5 lg:space-y-0 lg:pt-0 lg:pl-0 lg:flex lg:flex-row lg:mt-0 lg:ml-0 lg:bg-transparent lg:static lg:space-x-10`}
                >
                    <Link
                        href="/"
                        className="font-geistMono text-[50px] sm:text-[90px] lg:text-[14px] font-light"
                        onClick={() => setIsOpen(false)}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/"
                        className="font-geistMono text-[50px] sm:text-[90px] lg:text-[14px] font-light"
                        onClick={() => setIsOpen(false)}
                    >
                        SERVICES
                    </Link>
                    <Link
                        href="/"
                        className="font-geistMono text-[50px] sm:text-[90px] lg:text-[14px] font-light"
                        onClick={() => setIsOpen(false)}
                    >
                        STUDIO
                    </Link>
                    <Link
                        href="/"
                        className="font-geistMono text-[50px] sm:text-[90px] lg:text-[14px] font-light"
                        onClick={() => setIsOpen(false)}
                    >
                        WORK
                    </Link>
                    <Link
                        href="/"
                        className="font-geistMono text-[50px] sm:text-[90px] lg:text-[14px] font-light"
                        onClick={() => setIsOpen(false)}
                    >
                        MOCKUP
                    </Link>
                    <Link
                        href="/"
                        className="font-geistMono text-[50px] sm:text-[90px] lg:text-[14px] font-light"
                        onClick={() => setIsOpen(false)}
                    >
                        BLOG
                    </Link>
                    <Link
                        href="/"
                        className="font-geistMono text-[50px] sm:text-[90px] lg:text-[14px] font-light"
                        onClick={() => setIsOpen(false)}
                    >
                        SHOP
                    </Link>
                    {/*<Link*/}
                    {/*    href="/"*/}
                    {/*    className="font-geistMono text-[50px] sm:text-[90px] lg:text-[14px] font-light"*/}
                    {/*    onClick={() => setIsOpen(false)}*/}
                    {/*>*/}
                    {/*    CONTACT US*/}
                    {/*</Link>*/}
                </div>
            </div>
        </nav>
    )
}
