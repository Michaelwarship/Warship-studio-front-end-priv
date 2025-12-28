import { Button, StaggeredTextContainer, AnimateText } from '@/components'

export default function Freelance() {
    return (
        <section>
            <StaggeredTextContainer className="flex flex-col justify-between py-20 px-5 sm:px-10 md:px-15 md:py-20 lg:py-30 lg:flex-row lg:px-20 xl:px-20 md:border-b-1 md:border-[#E0E0E0]">
                <p className="font-geistMono uppercase text-[14px] md:text-[16px] text-[#969696] mb-3 md:mb-3 lg:mb-0 flex-1">
                    An international, <br /> HANDPICKED TEAM
                </p>

                <div className="flex-1 space-y-5 md:space-y-10">
                    <p className="hyphens-auto break-words text-[#0A231D] text-[30px] font-satoshi leading-9">
                        We’re a small but nimble talented core team backed by an
                        ever growing pool of the world’s best freelancers. for
                        every project, we handpick each artist to strategically
                        match the strength needed for the challenges ahead,{' '}
                        <span className="text-[#AEAEAE]">
                            and build a team as dynamic and powerful as our work
                        </span>
                    </p>
                    <Button
                        title="join our freelance family"
                        className="bg-[#E0E0E0]"
                    />
                </div>
            </StaggeredTextContainer>
        </section>
    )
}
