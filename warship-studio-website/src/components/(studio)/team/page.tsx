import { StudioTeamCard } from '@/components'

export default function StudioTeam() {
    return (
        <section className="bg-[#F2FFF8] py-20 px-20 ">
            <div className="space-y-10">
                <div className="text-center ">
                    <p className="text-[20px] md:text-[30px] tracking-[-1]">
                        The Warship team
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 space-y-10">
                        <StudioTeamCard
                            name="Michael Warship"
                            buttonText="[ FOUNDER, CREATIVE DIRECTOR ]"
                            image="/team/warship.png"
                        />

                        <StudioTeamCard
                            name="Mignonette Benjure"
                            buttonText="[ CREATIVE WRITTER ]"
                            image="/team/dibang.png"
                        />

                        <StudioTeamCard
                            name="Daniel SAKA"
                            buttonText="[ ART DIRECTOR ]"
                            image="/team/saka.png"
                        />

                        <StudioTeamCard
                            name="Fola Kolawole "
                            buttonText="[ DIRECTOR OF PHOTOGRAPHY ]"
                            image="/team/fola.png"
                        />

                        <StudioTeamCard
                            name="Kosy Lilian"
                            buttonText="[ PROJECT MANAGER ]"
                            image="/team/lilian.png"
                        />

                        <StudioTeamCard
                            name="Shalom Emmanuel"
                            buttonText="[ ACCOUNT MANAGER ]"
                            image="/team/sharon.png"
                        />

                        <StudioTeamCard
                            name="Eddie Achibong"
                            buttonText="[ BUSINESS DEV.MANAGER ]"
                            image="/team/warship.png"
                        />

                        <StudioTeamCard
                            name="Barrister Dorcas Doosuur"
                            buttonText="[ LEGAL ADVISOR ]"
                            image="/team/lawyer.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
