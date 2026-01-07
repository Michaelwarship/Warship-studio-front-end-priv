import { getStrapiImage } from '@/lib/getStrapiImage'

type Props = {
    image?: any
    format?: 'thumbnail' | 'small' | 'medium' | 'large'
    alt?: string
    className?: string
}

const FORMAT_FALLBACKS = {
    large: ['large', 'medium', 'small', 'thumbnail'],
    medium: ['medium', 'small', 'thumbnail'],
    small: ['small', 'thumbnail'],
    thumbnail: ['thumbnail'],
} as const

export default function StrapiImage({
    image,
    format = 'medium',
    alt = '',
    className = '',
}: Props) {
    if (!image) return null

    const formats = image.formats ?? {}

    const selectedFormat = FORMAT_FALLBACKS[format].find((f) => formats[f]?.url)

    const url = getStrapiImage(
        typeof image === 'string'
            ? image
            : selectedFormat
              ? formats[selectedFormat].url
              : image.url
    )

    if (!url) return null

    return (
        <div className="w-full h-full">
            <img src={url} alt={alt} className={`${className}`} />
        </div>
    )
}
