export type PortfolioProject = {
    title: string
    description: string
    images: string[]
}

export const portfolioData: Record<string, PortfolioProject> = {
    'example-project': {
        title: 'Example Project',
        description: 'This is a test portfolio project.',
        images: ['/carousel/carousel-1.png'],
    },
}
