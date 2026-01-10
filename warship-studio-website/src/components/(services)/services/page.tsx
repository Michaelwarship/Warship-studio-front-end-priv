import { ServiceCard, StaggeredTextContainer } from '@/components'

export default function ServiceSection() {
    return (
        <section>
            <StaggeredTextContainer>
                <ServiceCard
                    number="01"
                    title={
                        <>
                            Creative
                            <br />
                            <span className="text-[#0A231D] font-satoshi">
                                Direction
                            </span>
                        </>
                    }
                    description={
                        <>
                            Warship Studios helps brand see the bigger picture
                            and bring it to life.
                            <span className="text-[#AEAEAE]">
                                {''} Our creative direction ensures every idea,
                                visual, and motion aligns with your brand's
                                purpose
                            </span>
                        </>
                    }
                    serviceOne={
                        <>
                            01.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Brand Strategy R&D
                            </span>
                        </>
                    }
                    serviceTwo={
                        <>
                            02.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Event Production
                            </span>
                        </>
                    }
                    serviceThree={
                        <>
                            03.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Brand Messaging
                            </span>
                        </>
                    }
                    serviceFour={
                        <>
                            04.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Logo Design& Brand Guidelines
                            </span>
                        </>
                    }
                    reel="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec"
                />

                <ServiceCard
                    number="02"
                    title={
                        <>
                            Vfx &
                            <br />
                            <span className="text-[#0A231D] font-satoshi">
                                Animation
                            </span>
                        </>
                    }
                    description={
                        <>
                            Warhsip studios would meet your imagination with
                            perfect execution.{' '}
                            <span className="text-[#AEAEAE]">
                                We create visuals that compulsates autention:
                                from 3D animation and motion graphics to
                                cinmatic visual effects.
                            </span>
                        </>
                    }
                    serviceOne={
                        <>
                            01.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Product visualization
                            </span>
                        </>
                    }
                    serviceTwo={
                        <>
                            02.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                2D& 3D Motion Graphics
                            </span>
                        </>
                    }
                    serviceThree={
                        <>
                            03.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Corporate Explainers
                            </span>
                        </>
                    }
                    serviceFour={
                        <>
                            04.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                AIGC (AI-Generated Content)
                            </span>
                        </>
                    }
                    reel="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec"
                />

                <ServiceCard
                    number="03"
                    title={
                        <>
                            End-to-End
                            <br />
                            <span className="text-[#0A231D] font-satoshi">
                                Production
                            </span>
                        </>
                    }
                    description={
                        <>
                            We handle everything from the first idea to the
                            final delivery. Strategy, Scripting, design
                            animation, and post production, all under one roof.{' '}
                            <span className="text-[#AEAEAE]">
                                Our End-to-End proves keeps things seamlessly
                                efficient & stress-free while ensuring the final
                                results meet the highest creative standards
                            </span>
                        </>
                    }
                    serviceOne={
                        <>
                            01.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Mixed media & Live Action
                            </span>
                        </>
                    }
                    serviceTwo={
                        <>
                            02.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Animation + VFX
                            </span>
                        </>
                    }
                    serviceThree={
                        <>
                            03.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Virtual Production
                            </span>
                        </>
                    }
                    serviceFour={
                        <>
                            04.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Brand/TV Commercial
                            </span>
                        </>
                    }
                    reel="https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec"
                />

                <ServiceCard
                    number="04"
                    title={
                        <>
                            Branding &
                            <br />
                            <span className="text-[#0A231D] font-satoshi">
                                Web Design
                            </span>
                        </>
                    }
                    description={
                        <>
                            We create cohesive brand experiences that feel
                            intentionaland authtentic.{' '}
                            <span className="text-[#AEAEAE]">
                                Our goal is simple: to give your brand a clear
                                personality and a strong visual voice that
                                stands out everywhere it shows up.
                            </span>
                        </>
                    }
                    serviceOne={
                        <>
                            01.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Interactive websites
                            </span>
                        </>
                    }
                    serviceTwo={
                        <>
                            02.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Corporate websites
                            </span>
                        </>
                    }
                    serviceThree={
                        <>
                            03.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                Brand tone
                            </span>
                        </>
                    }
                    serviceFour={
                        <>
                            04.{' '}
                            <span className="text-[#0A231D] font-satoshi">
                                UI/UX Design
                            </span>
                        </>
                    }
                />
            </StaggeredTextContainer>
        </section>
    )
}
