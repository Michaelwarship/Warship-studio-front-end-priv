import { Button, StaggeredTextContainer } from '@/components'

export default function ContactHero() {
    return (
        <section className=" [&>*]:border-[#E0E0E0] [&>*]:border-b-1 ">
            <StaggeredTextContainer className="px-5 py-15 space-y-5 md:space-y-3 lg:space-y-0 lg:px-20 lg:flex ">
                <div className="flex-1">
                    <Button
                        title="KEEP IN TOUCH"
                        className="bg-transparent text-[#969696] md:text-[16px] !p-0"
                    />

                    <p className="text-[35px] sm:text-[60px] md:text-[55px] text-[#0A231D]">
                        Let's talk.
                    </p>
                </div>

                <div className="lg:flex-[1.5] 2xl:flex-1">
                    <p className="text-[30px] tracking-[-1] hyphens-auto break-words leading-8">
                        The more information you provide, the easier it will be
                        for us to respond effectively.{' '}
                        <span className="text-[#AEAEAE]">
                            What would you like us to design for you tod@y?
                        </span>
                    </p>
                </div>
            </StaggeredTextContainer>
        </section>
    )
}
