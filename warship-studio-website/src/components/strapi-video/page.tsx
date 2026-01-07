import { getStrapiVideo } from '@/lib/getStrapiVideo'

type Props = {
    video?: any
    className?: string
    autoPlay?: boolean
    muted?: boolean
    loop?: boolean
    playsInline?: boolean
    preload?: 'auto' | 'metadata' | 'none'
}

export default function StrapiVideo({
    video,
    className = '',
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    preload = 'metadata',
}: Props) {
    if (!video) return null

    const url = getStrapiVideo(video)
    if (!url) return null

    return (
        <video
            src={url}
            className={`w-full h-full object-cover ${className}`}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            preload={preload}
        />
    )
}
