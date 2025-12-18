'use client'

import {
    HeroSection,
    LearnMore,
    AboutPage,
    Projects,
    Rating,
    ProjectReel,
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
        </main>
    )
}
