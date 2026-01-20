import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

    const routes = [
        '',
        '/about',
        '/studio',
        '/contact',
        '/projects',
        // add whatever you actually have in /app
    ]

    const now = new Date()

    return routes.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.7,
    }))
}
