import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/page'
import PartnersRow from '@/components/partners/page'

export default function HeroSection() {
    return (
        <section>
            <div className="relative">
                <div className="w-full h-152 flex items-center z-0 xl:h-160 2xl:h-190">
                    <img
                        src="/hero.png"
                        alt="hero-image"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/*TEXT AND BUTTONS*/}

                <div className="absolute top-90 left-0 right-0 px-5 sm:top-70 md:top-70 lg:top-70 lg:px-20 2xl:top-100">
                    <div>
                        <p className="text-[45px] text-[#0A231D] sm:text-[70px] leading-18 sm:leading-22 md:text-[85px] md:leading-25 lg:text-[70px] xl:text-[85px] 2xl:text-[85px]">
                            Pushing Pixels <br />
                            with precision.
                        </p>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center justify-start space-x-5 mt-7 sm:mt-10">
                            <Button title="HIRE US TODAY" className="" />
                            <Button
                                title="GET A QUOTE"
                                className="bg-[#E0E0E0]"
                            />
                        </div>

                        <div className="hidden sm:block w-20 lg:w-30 mt-10 ">
                            <img
                                src="/warship-est.svg"
                                alt="warship-est"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/*PARTNERS*/}
                <div>
                    <PartnersRow />
                </div>
            </div>
        </section>
    )
}
