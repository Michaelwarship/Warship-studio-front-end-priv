'use client'
import Navbar from '@/components/navbar/page'
import HeroSection from '@/components/hero/page'
import LearnMore from '@/components/learn-more/page'
import AboutPage from '@/components/about/page'

export default function HomeClient() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <LearnMore />
            <AboutPage />
        </main>
    )
}
