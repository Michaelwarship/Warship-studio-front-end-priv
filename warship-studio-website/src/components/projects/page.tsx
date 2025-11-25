import { Button, CarouselCard } from '@/components'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

export default function Projects() {
    return (
        <section className="pt-5 py-20 ">
            <Button
                title="[ VIEW MORE PROJECTS ]"
                className="sm:!px-15 sm:!py-5 bg-transparent lg:text-[14px]"
            />

            <div className="flex flex-col justify-between sm:flex-row">
                <div className="order-2 flex items-center sm:flex-col pl-5 sm:pr-10 sm:pl-0 sm:space-y-45 md:pr-5 lg:pr-10 md:space-y-35 lg:space-y-57 xl:space-y-67 2xl:space-y-75">
                    <p className="order-2 sm:order-1 pl-5 pt-5 sm:pl-0 sm:pt-0 sm:text-[30px] md:text-[30px] xl:text-[40px] text-[#969696] font-geistMono">
                        03/09
                    </p>
                    <div className="mt-5 order-1 sm:order-2">
                        <div className="flex space-x-2">
                            <Button
                                title={
                                    <FaArrowLeftLong className="text-[#0A231D] lg:text-[25px]" />
                                }
                                className="bg-[#F2F2F2] px-5 py-5 sm:!px-4 sm:!py-4 md:px-4 md:py-4 lg:px-5 lg:py-5"
                            />

                            <Button
                                title={
                                    <FaArrowRightLong className="text-[#0A231D] lg:text-[25px]" />
                                }
                                className="bg-[#F2F2F2] px-5 py-5 sm:!px-4 sm:!py-4 md:px-4 md:py-4 lg:px-5 lg:py-5"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2 overflow-auto sm:w-120 md:w-160 lg:w-207 xl:w-265 h-fit 2xl:w-330">
                    <CarouselCard
                        image="/carousel/carousel-1.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />

                    <CarouselCard
                        image="/carousel/carousel-2.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />

                    <CarouselCard
                        image="/carousel/carousel-3.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />

                    <CarouselCard
                        image="/carousel/carousel-3.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />

                    <CarouselCard
                        image="/carousel/carousel-3.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />

                    <CarouselCard
                        image="/carousel/carousel-3.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />

                    <CarouselCard
                        image="/carousel/carousel-3.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />

                    <CarouselCard
                        image="/carousel/carousel-2.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />

                    <CarouselCard
                        image="/carousel/carousel-1.png"
                        title="All in one hashit design"
                        description="[ Hash it explainer ]"
                    />
                </div>
            </div>

            <div className="mt-40 px-5 lg:px-20">
                <p className="font-geistMono text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0">
                    // Testimonials
                </p>

                <p className="font-satoshi text-[25px] tracking-[-1] sm:text-[50px] lg:text-[55px] md:text-[30px] md:leading-10 lg:leading-14 text-[#0A231D] md:mt-3">
                    A reliable partner for
                    <span className="text-[#AEAEAE]">
                        {' '}
                        wide <br /> world-class quality.
                    </span>
                </p>
            </div>
        </section>
    )
}
