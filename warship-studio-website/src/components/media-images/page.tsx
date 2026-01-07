import { StrapiImage } from '@/components'

type Props = {
    media?: any[]
    format?: 'thumbnail' | 'small' | 'medium' | 'large'
    className?: string
}

export default function MediaImages({
    media = [],
    format = 'medium',
    className = '',
}: Props) {
    const images = media.filter((item) => item.mime?.startsWith('image/'))

    return (
        <>
            {images.map((image) => (
                <StrapiImage
                    key={image.id}
                    image={image}
                    format={format}
                    className={className}
                />
            ))}
        </>
    )
}
