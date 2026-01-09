import {
    Button,
    AnimateText,
    StaggeredTextContainer,
    AnimatedCounter,
} from '@/components'
import Link from 'next/link'

export default function OurStudio() {
    return (
        <section>
            <div className="flex flex-col space-y-5 lg:space-y-0 pt-20 px-5 sm:px-10 md:px-15 md:pt-20 lg:pt-40 lg:flex-row lg:gap-x-40 lg:justify-between lg:px-20 xl:px-30 2xl:px-30">
                <div className="2xl:flex-1">
                    <div className="w-30 md:w-20 lg:w-30 xl:w-40 2xl:w-50">
                        <img
                            src="/warship-logo-2.svg"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="2xl:flex-1 space-y-5">
                    <p className="about-title hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                        Since 2019, we have worked with some of the world's
                        leading startups, powered by a
                        <span className="text-[#AEAEAE]">
                            {''} highly experienced and dedicated team.
                        </span>
                    </p>

                    <Link href="/studio">
                        {' '}
                        <Button title="our studio" className="bg-[#E0E0E0]" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
