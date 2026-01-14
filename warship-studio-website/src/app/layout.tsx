import { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar, Footer, Cursor, IntroOverlay, ScrollToTop } from '@/components'
import { ReactLenis } from 'lenis/react'

const satoshi = localFont({
    src: [
        {
            path: './fonts/satoshi/Satoshi-Medium.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--satoshi-Medium',
})

const geistMono = localFont({
    src: [
        {
            path: './fonts/geistMono/GeistMono-Medium.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--geistMono-Medium',
})

export const metadata: Metadata = {
    title: 'Warship Studios',
    description: 'Warship Studio a creative agency',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${satoshi.variable} ${geistMono.variable} antialiased`}
            >
                <IntroOverlay />
                <Cursor />
                <ReactLenis root />
                <ScrollToTop />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
