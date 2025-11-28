import { StudioVisionCard } from '@/components'

export default function StudioVision() {
    return (
        <section>
            <div className="overflow-hidden flex flex-col space-y-15 sm:space-y-10 md:space-y-0 md:flex-row justify-center md:border [&>*]:border-[#E0E0E0] [&>*:first-child]:border-b-0 [&>*:nth-child(2)]:border-b [&>*:nth-child(4)]:border-b [&>*:last-child]:border-b-1 md:border-[#E0E0E0] md:[&>*]:border-[#E0E0E0] md:[&>*]:border-r md:[&>*]:border-t-0 md:[&>*:first-child]:border-l md:[&>*:last-child]:border-r-1">
                <StudioVisionCard
                    buttonText="CLIENT-CENTRIC APPROACH"
                    description="We value open communication and feedback, ensuring that your initial goals for the project are fulfilled. Our clear and smooth process guarantees that you are always informed of our progress, promoting transparency every step of the way."
                />

                <div className="md:hidden w-200"></div>
                <StudioVisionCard
                    buttonText="CLIENT-CENTRIC APPROACH"
                    description="We value open communication and feedback, ensuring that your initial goals for the project are fulfilled. Our clear and smooth process guarantees that you are always informed of our progress, promoting transparency every step of the way."
                />

                <div className="md:hidden w-200"></div>
                <StudioVisionCard
                    buttonText="CLIENT-CENTRIC APPROACH"
                    description="We value open communication and feedback, ensuring that your initial goals for the project are fulfilled. Our clear and smooth process guarantees that you are always informed of our progress, promoting transparency every step of the way."
                />
                <div className="md:hidden w-200"></div>
            </div>
        </section>
    )
}
