interface SingleCardProps {
    image: string
}

export default function SingleCard({ image }: SingleCardProps) {
    return (
        <section>
            <div className="w-30 h-30 px-5 py-10 lg:w-30 lg:h-30 lg:px-5 lg:py-10">
                <img src={image} className="w-full h-full" />
            </div>
        </section>
    )
}

// sm:border-1 sm:border-[#E0E0E0]
