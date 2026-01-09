import { StudioVisionCard, StaggeredTextContainer } from '@/components'

export default function StudioVision() {
    return (
        <section>
            <StaggeredTextContainer className="overflow-hidden flex flex-col space-y-15 sm:space-y-10 md:space-y-0 md:flex-row justify-center md:border [&>*]:border-[#E0E0E0] [&>*:first-child]:border-b-0 [&>*:nth-child(2)]:border-b [&>*:nth-child(4)]:border-b [&>*:last-child]:border-b-1 md:border-[#E0E0E0] md:[&>*]:border-[#E0E0E0] md:[&>*]:border-r md:[&>*]:border-t-0 md:[&>*:first-child]:border-l md:[&>*:last-child]:border-r-1">
                <StudioVisionCard
                    buttonText="CLIENT-CENTRIC APPROACH"
                    description="We value open communication and feedback, ensuring that your initial goals for the project are fulfilled. Our clear and smooth process guarantees that you are always informed of our progress, promoting transparency every step of the way."
                />

                <div className="md:hidden w-200"></div>
                <StudioVisionCard
                    buttonText="Directed by the founder"
                    description="Every project we take on is personally overseen and managed by Michael Obiekwe, The founder and creative director of Warship Studios. We ensure that each detail aligns with our vision and standards, guaranteeing a seamless and tailored experience for our clients."
                />

                <div className="md:hidden w-200"></div>
                <StudioVisionCard
                    buttonText="World-class talent"
                    description="Each project has its own set of needs and requirements. Once we form the project artistic style and tone, we tailor a team of world-class artists, with the perfect mix of skills needed  for the project."
                />
                <div className="md:hidden w-200"></div>
            </StaggeredTextContainer>
        </section>
    )
}
