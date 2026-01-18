import React from 'react'
import { getStrapiVideo } from '@/lib/getStrapiVideo'

type Props = {
    video?: string
    className?: string
    autoPlay?: boolean
    muted?: boolean
    loop?: boolean
    playsInline?: boolean
    preload?: 'auto' | 'metadata' | 'none'
    onCanPlay?: React.VideoHTMLAttributes<HTMLVideoElement>['onCanPlay']
    onLoadedData?: React.VideoHTMLAttributes<HTMLVideoElement>['onLoadedData']
    onError?: React.VideoHTMLAttributes<HTMLVideoElement>['onError']
}

export default function StrapiVideo({
    video,
    className = '',
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    preload = 'metadata',
    onCanPlay,
    onLoadedData,
    onError,
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
            onCanPlay={onCanPlay}
            onLoadedData={onLoadedData}
            onError={onError}
        />
    )
}
