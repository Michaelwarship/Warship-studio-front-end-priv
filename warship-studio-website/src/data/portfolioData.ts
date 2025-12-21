type CreditItem = {
    role: string
    names: string[]
}

export type PortfolioProject = {
    // COVER
    title: string
    // description: string
    coverImage: string

    // HERO
    hero?: {
        tagline1: string
        headline: string
        tagline2: string
        heroImage: string
        aboutProject: string
        projectReel: string
    }

    // SECTIONS
    section?: {
        firstGrid?: string[]
        secondGrid?: string[]
    }

    breakdown?: {
        thirdGrid?: string[]
        processText?: {
            process: string
        }
    }

    // CREDITS
    credits?: CreditItem[]
}

export const portfolioData: Record<string, PortfolioProject> = {
    'example-project': {
        title: 'Example Project',

        coverImage: '/carousel/carousel-1.png',

        hero: {
            tagline1: 'Example Company',
            headline: 'Example -The new way of doing SOC',
            tagline2: 'branding,3d modelling, tags',
            heroImage: '/carousel/carousel-2.png',
            aboutProject:
                'Tiffany is famous for their Holiday Icons campaigns. As a joyful introduction to the season, each year rings a different conceptual tune that always manages to balance contemporary elegance with timeless undertones. This year’s collaboration with Tendril was no different, featuring the 4 classic icons T, Lock, HardWear, and Knot.',
            projectReel: 'https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec',
        },

        section: {
            firstGrid: [
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
            ],
            secondGrid: [
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
            ],
        },

        breakdown: {
            thirdGrid: [
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
            ],
            processText: {
                process:
                    'Tiffany is famous for their Holiday Icons campaigns. As a joyful introduction to the season, each year rings a different conceptual tune that always manages to balance contemporary elegance with timeless undertones. This year’s collaboration with Tendril was no different, featuring the 4 classic icons T, Lock, HardWear, and Knot.',
            },
        },

        credits: [
            { role: 'CLIENT', names: ['Tiffany and Co.'] },
            { role: 'DIRECTOR', names: ['Joey Recoskie'] },
            {
                role: '3d design',
                names: [
                    'Joey Recoskie, Leo Bortolussi, Nathan Di Rezende, Rodrigo Rezende, Rita Louro, Yeseong Kim',
                ],
            },
            { role: 'AGENCY', names: ['Opus.co'] },
            { role: 'ART DIRECTOR', names: ['Rodrigo Rezende'] },
            {
                role: 'COMPOSITOR',
                names: ['Astrid Cardenas, Brad Husband, Corey Larson'],
            },
            { role: 'PRODUCTION COMPANY', names: ['Warship studios'] },
            { role: 'EXECUTIVE PRODUCER', names: ['Warship studios'] },
            { role: 'CREATIVE DIRECTOR', names: ['Warship studios'] },
            { role: 'MODELLING', names: ['Warship studios'] },
            { role: '3D ANIMATION', names: ['Warship studios'] },
        ],
    },

    'kxsi-studios': {
        title: 'KXSI Studios',
        coverImage: '/carousel/carousel-1.png',

        hero: {
            tagline1: 'KXSI Studios',
            headline: 'KXSI Studios - The new way of doing SOC',
            tagline2: 'Acrobatic 😂😂😂',
            heroImage: '/carousel/carousel-1.png',
            aboutProject:
                'KXSI Studios is famous for their Holiday Icons campaigns...',
            projectReel: 'https://vimeo.com/1090477326/2e6caf9f71?fl=ip&fe=ec',
        },

        section: {
            firstGrid: [
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
            ],
            secondGrid: [
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
            ],
        },

        breakdown: {
            thirdGrid: [
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
                '/carousel/carousel-1.png',
            ],
            processText: {
                process:
                    'Tiffany is famous for their Holiday Icons campaigns...',
            },
        },

        credits: [
            { role: 'CLIENT', names: ['Tiffany and Co.'] },
            { role: 'DIRECTOR', names: ['Joey Recoskie'] },
            {
                role: '3D DESIGN',
                names: [
                    'Joey Recoskie',
                    'Leo Bortolussi',
                    'Nathan Di Rezende',
                    'Rodrigo Rezende',
                    'Rita Louro',
                    'Yeseong Kim',
                ],
            },
            { role: 'AGENCY', names: ['Opus.co'] },
            { role: 'ART DIRECTOR', names: ['Rodrigo Rezende'] },
            {
                role: 'COMPOSITOR',
                names: ['Astrid Cardenas', 'Brad Husband', 'Corey Larson'],
            },
            { role: 'PRODUCTION COMPANY', names: ['Warship Studios'] },
        ],
    },
}
