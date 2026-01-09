'use client'
import {
    StudioTeamCard,
    StaggeredTextContainer,
    StrapiImage,
} from '@/components'
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'
import { getStrapiVideo } from '@/lib/getStrapiVideo'

export default function StudioTeam() {
    const [teams, setTeams] = useState<any[]>([])

    useEffect(() => {
        api.get('/teams', { params: { populate: '*' } })
            .then((res) => {
                setTeams(res.data.data)
            })
            .catch(console.error)
    }, [])

    if (!teams.length) return null
    return (
        <section className="bg-[#F2FFF8] py-20 px-20 2xl:px-60 ">
            <div className="space-y-10">
                <StaggeredTextContainer className="text-center ">
                    <p className="text-[20px] md:text-[30px] tracking-[-1]">
                        The Warship Team
                    </p>
                </StaggeredTextContainer>

                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {teams.map((member) => (
                            <StudioTeamCard
                                key={member.id}
                                image={
                                    <StrapiImage
                                        image={member.Image}
                                        format="medium"
                                        className="grayscale"
                                    />
                                }
                                name={member.Name}
                                buttonText={member.Role}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
