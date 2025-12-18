import {
    StudioHero,
    StudioTeam,
    StudioVisionTeam,
    StudioCarousel,
    StudioVision,
    StudioPartners,
    Rating,
    Freelance,
} from '@/components'

export default function Studio() {
    return (
        <section>
            <div>
                <StudioHero />
                <StudioVisionTeam />
                <StudioTeam />
                <Freelance />
                {/* <StudioCarousel /> */}
                <StudioVision />
                <StudioPartners />
                <Rating />
            </div>
        </section>
    )
}
