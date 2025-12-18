'use client'

interface EmbedVideoProps {
    src?: string
    className?: string
}

function toEmbedUrl(url: string): string {
    if (url.includes('youtu')) {
        let id = ''

        if (url.includes('youtu.be')) {
            id = url.split('youtu.be/')[1]?.split(/[?&]/)[0] ?? ''
        } else {
            try {
                const parsed = new URL(url)
                id = parsed.searchParams.get('v') ?? ''

                if (!id && parsed.pathname.includes('/embed/')) {
                    id = parsed.pathname.split('/embed/')[1]
                }
            } catch {
                id = ''
            }
        }

        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${id}`
    }

    if (url.includes('vimeo.com')) {
        const parts = url.split('/')
        const id = parts[3] ?? ''
        const hash = parts[4]

        return hash
            ? `https://player.vimeo.com/video/${id}?h=${hash}&background=1&autoplay=1&muted=1&loop=1`
            : `https://player.vimeo.com/video/${id}?background=1&autoplay=1&muted=1&loop=1`
    }

    return url
}

export default function EmbedVideo({ src, className = '' }: EmbedVideoProps) {
    if (!src) return null

    return (
        <iframe
            src={toEmbedUrl(src)}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
        />
    )
}
