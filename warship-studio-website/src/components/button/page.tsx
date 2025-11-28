interface ButtonProps {
    title: string
    className: string
    onClick?: () => void
}

export default function Button({ title, className, onClick }: ButtonProps) {
    return (
        <section>
            <button
                onClick={onClick}
                className={`${className} whitespace-nowrap font-geistMono bg-[#07E272] px-4 py-3 text-[12px] sm:px-7 sm:py-3 sm:text-[14px] rounded-[5px] transform hover:opacity-80 duration-100 cursor-pointer`}
            >
                {title}
            </button>
        </section>
    )
}
