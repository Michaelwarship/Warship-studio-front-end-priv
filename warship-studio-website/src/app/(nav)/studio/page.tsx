import {
    StudioHero,
    StudioTeam,
    StudioVisionTeam,
    StudioCarousel,
    StudioVision,
    StudioPartners,
    Rating,
} from '@/components'

export default function Studio() {
    return (
        <section>
            <div>
                <StudioHero />
                <StudioTeam />
                <StudioVisionTeam />
                <StudioCarousel />
                <StudioVision />
                <StudioPartners />
                <Rating />
            </div>
        </section>
    )
}
