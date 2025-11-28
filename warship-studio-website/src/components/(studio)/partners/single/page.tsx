interface CardProps {
    image: string
}

export default function StudioPartnerCard({ image }: CardProps) {
    return (
        <section>
            <div className=" w-40 h-40 md:w-50 md:h-50 px-10 py-15 border-1 border-[#E0E0E0] hover:rotate-6 transition-all ease-in-out duration-500">
                <img src={image} className="w-full h-full object-center" />
            </div>
        </section>
    )
}
