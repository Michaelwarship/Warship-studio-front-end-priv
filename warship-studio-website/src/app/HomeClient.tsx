'use client'
import Navbar from '@/components/navbar/page'
import HeroSection from '@/components/hero/page'
import LearnMore from '@/components/learn-more/page'
import AboutPage from '@/components/about/page'
import Projects from '@/components/projects/page'
import Rating from '@/components/rating/page'
import LetsTalk from '@/components/lets-talk/page'

export default function HomeClient() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <LearnMore />
            <AboutPage />
            <Projects />
            <Rating />
            <LetsTalk />
        </main>
    )
}
