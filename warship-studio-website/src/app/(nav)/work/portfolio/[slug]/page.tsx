import type { MetadataRoute } from 'next'

type StrapiListResponse<T> = {
    data: T[]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://warshipstudio.com'

    const now = new Date()

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/studio',
        '/contact',
        '/services',
        '/terms/privacy-policy',
        '/terms/cookie-policy',
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: path === '' ? 1 : 0.7,
    }))

    // Get Strapi base URL from your env
    const strapiBase = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '')
    if (!strapiBase) return staticRoutes

    // Fetch portfolio slugs
    const res = await fetch(
        `${strapiBase}/portfolios?fields[0]=slug&pagination[pageSize]=1000`,
        { next: { revalidate: 3600 } }
    )

    if (!res.ok) return staticRoutes

    const json: StrapiListResponse<{ slug?: string }> = await res.json()

    const portfolioRoutes = (json.data || [])
        .map((item) => item.slug)
        .filter(Boolean)
        .map((slug) => ({
            url: `${baseUrl}/work/portfolio/${slug}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))

    return [...staticRoutes, ...portfolioRoutes]
}
