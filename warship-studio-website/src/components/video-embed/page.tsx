'use client'

interface VideoEmbedProps {
    src?: string
    className?: string
    controls?: boolean
}

function toEmbedUrl(url: string, controls: boolean): string {
    // YouTube
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

        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=${
            controls ? 1 : 0
        }&playsinline=1&loop=1&playlist=${id}`
    }

    // Vimeo
    if (url.includes('vimeo.com')) {
        const parts = url.split('/')
        const id = parts[3]

        // Background-style (no controls)
        if (!controls) {
            return `https://player.vimeo.com/video/${id}?background=1&autoplay=1&muted=1&loop=1`
        }

        // Normal Vimeo player with controls
        return `https://player.vimeo.com/video/${id}`
    }

    return url
}

export default function VideoEmbed({
    src,
    className = '',
    controls = false,
}: VideoEmbedProps) {
    if (!src) return null

    return (
        <iframe
            src={toEmbedUrl(src, controls)}
            className={`w-full h-full ${controls ? '' : 'pointer-events-none'} ${className}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
        />
    )
}
