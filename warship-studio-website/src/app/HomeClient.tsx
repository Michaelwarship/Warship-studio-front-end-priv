'use client'
import {
    HeroSection,
    LearnMore,
    AboutPage,
    Projects,
    Rating,
} from '@/components'

export default function HomeClient() {
    return (
        <main>
            <HeroSection />
            <LearnMore />
            <AboutPage />
            <Projects />
            <Rating />
        </main>
    )
}
