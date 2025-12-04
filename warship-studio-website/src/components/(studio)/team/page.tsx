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
                            className="object-cover object-top"
                        />

                        <StudioTeamCard
                            name="Michael Warship"
                            buttonText="[ FOUNDER, CREATIVE DIRECTOR ]"
                            image="/team/fola.png"
                            className="object-top scale-110"
                        />

                        <StudioTeamCard
                            name="Michael Warship"
                            buttonText="[ FOUNDER, CREATIVE DIRECTOR ]"
                            image="/team/warship.png"
                            className="object-cover object-top"
                        />

                        <StudioTeamCard
                            name="Michael Warship"
                            buttonText="[ FOUNDER, CREATIVE DIRECTOR ]"
                            image="/team/fola.png"
                            className="object-top"
                        />

                        <StudioTeamCard
                            name="Michael Warship"
                            buttonText="[ FOUNDER, CREATIVE DIRECTOR ]"
                            image="/team/sharon.png"
                        />

                        <StudioTeamCard
                            name="Michael Warship"
                            buttonText="[ FOUNDER, CREATIVE DIRECTOR ]"
                            image="/team/fola.png"
                            className="object-top"
                        />

                        <StudioTeamCard
                            name="Michael Warship"
                            buttonText="[ FOUNDER, CREATIVE DIRECTOR ]"
                            image="/team/warship.png"
                            className="object-cover object-top"
                        />

                        <StudioTeamCard
                            name="Michael Warship"
                            buttonText="[ FOUNDER, CREATIVE DIRECTOR ]"
                            image="/team/fola.png"
                            className="object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
