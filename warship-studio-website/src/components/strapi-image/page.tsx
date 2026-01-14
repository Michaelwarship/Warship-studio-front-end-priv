// import { getStrapiImage } from '@/lib/getStrapiImage'

// type Props = {
//     image?: any
//     format?: 'thumbnail' | 'small' | 'medium' | 'large'
//     alt?: string
//     className?: string
// }

// const FORMAT_FALLBACKS = {
//     large: ['large', 'medium', 'small', 'thumbnail'],
//     medium: ['medium', 'small', 'thumbnail'],
//     small: ['small', 'thumbnail'],
//     thumbnail: ['thumbnail'],
// } as const

// export default function StrapiImage({
//     image,
//     format = 'medium',
//     alt = '',
//     className = '',
// }: Props) {
//     if (!image) return null

//     const formats = image.formats ?? {}

//     const selectedFormat = FORMAT_FALLBACKS[format].find((f) => formats[f]?.url)

//     const url = getStrapiImage(
//         typeof image === 'string'
//             ? image
//             : selectedFormat
//               ? formats[selectedFormat].url
//               : image.url
//     )

//     if (!url) return null

//     return (
//         <div className="w-full h-full">
//             <img src={url} alt={alt} className={`${className}`} />
//         </div>
//     )
// }

import { getStrapiImage } from '@/lib/getStrapiImage'
import { getStrapiVideo } from '@/lib/getStrapiVideo'

type Props = {
    image?: any
    format?: 'thumbnail' | 'small' | 'medium' | 'large'
    alt?: string
    className?: string

    // optional video props (won’t break existing usage)
    controls?: boolean
    autoPlay?: boolean
    loop?: boolean
    muted?: boolean
    playsInline?: boolean
    preload?: 'none' | 'metadata' | 'auto'
}

const FORMAT_FALLBACKS = {
    large: ['large', 'medium', 'small', 'thumbnail'],
    medium: ['medium', 'small', 'thumbnail'],
    small: ['small', 'thumbnail'],
    thumbnail: ['thumbnail'],
} as const

const VIDEO_EXTS = ['.mp4', '.webm', '.ogg', '.mov', '.m4v'] as const

function isVideo(media: any, rawUrl?: string) {
    const mime = media?.mime || media?.mimeType
    const ext = media?.ext
    const url = rawUrl || media?.url || (typeof media === 'string' ? media : '')

    if (typeof mime === 'string' && mime.startsWith('video/')) return true
    if (
        typeof ext === 'string' &&
        VIDEO_EXTS.includes(ext.toLowerCase() as any)
    )
        return true

    if (typeof url === 'string') {
        const clean = url.split('?')[0].toLowerCase()
        return VIDEO_EXTS.some((e) => clean.endsWith(e))
    }

    return false
}

export default function StrapiImage({
    image,
    format = 'medium',
    alt = '',
    className = '',

    controls = false,
    autoPlay = true,
    loop = true,
    muted = true,
    playsInline = true,
    preload = 'metadata',
}: Props) {
    if (!image) return null

    // Your map passes an object, but keep string support anyway
    const formats = image?.formats ?? {}

    // For images: select best format if available
    const selectedFormat = FORMAT_FALLBACKS[format].find(
        (f) => formats?.[f]?.url
    )

    const rawUrl =
        typeof image === 'string'
            ? image
            : selectedFormat
              ? formats[selectedFormat]?.url
              : image?.url

    if (!rawUrl) return null

    // Decide what to render
    if (isVideo(image, rawUrl)) {
        const src = getStrapiVideo(rawUrl)
        if (!src) return null

        return (
            <div className="w-full h-full">
                <video
                    className={className}
                    src={src}
                    controls={controls}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    playsInline={playsInline}
                    preload={preload}
                />
            </div>
        )
    }

    const src = getStrapiImage(rawUrl)
    if (!src) return null

    return (
        <div className="w-full h-full">
            <img src={src} alt={alt} className={className} />
        </div>
    )
}
