import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://warshipstudio.com'

    const routes = ['', '/about', '/studio', '/contact', '/projects']
    const now = new Date()

    return routes.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.7,
    }))
}
