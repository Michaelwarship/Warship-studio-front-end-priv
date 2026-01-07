export function getStrapiImage(url?: string) {
    if (!url) return null

    return process.env.NEXT_PUBLIC_BASE_URL?.replace('/api', '') + url
}
