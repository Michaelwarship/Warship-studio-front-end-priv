'use client'
import Navbar from '@/components/navbar/page'
import HeroSection from '@/components/hero/page'
import LearnMore from '@/components/learn-more/page'

export default function HomeClient() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <LearnMore />
        </main>
    )
}
