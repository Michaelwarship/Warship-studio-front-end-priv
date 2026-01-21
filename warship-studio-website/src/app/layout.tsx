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
    description:
        'We are a digital-first, multidisciplinary creative agency that helps forward-thinking brands make their innovation visually compelling.',

    openGraph: {
        title: 'Warship Studios',
        description:
            'We are a digital-first, multidisciplinary creative agency that helps forward-thinking brands make their innovation visually compelling.',
        url: 'https://warshipstudio.com',
        siteName: 'Warship Studios',
        images: [
            {
                url: '/preview.svg',
                width: 1200,
                height: 630,
                alt: 'Warship Studios',
            },
        ],
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Warship Studios',
        description:
            'We are a digital-first, multidisciplinary creative agency that helps forward-thinking brands make their innovation visually compelling.',
        images: ['/preview.svg'],
    },
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
