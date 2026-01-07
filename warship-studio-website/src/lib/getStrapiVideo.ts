// lib/getStrapiVideo.ts
export function getStrapiVideo(url?: string) {
    if (!url) return ''
    // NOTE: Strapi media is served at root /uploads, not /api
    return `${process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/api$/, '')}${url}`
}
