'use client'

import {
    HeroSection,
    LearnMore,
    AboutPage,
    Projects,
    Rating,
    ProjectReel,
    OurStudio,
} from '@/components'

export default function HomeClient() {
    return (
        <main>
            <HeroSection />
            <LearnMore />
            <AboutPage />
            <ProjectReel />
            <Projects />
            <Rating />
            <OurStudio />
        </main>
    )
}
