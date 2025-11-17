interface ButtonProps {
    title: string
    className: string
}

export default function Button({ title, className }: ButtonProps) {
    return (
        <section>
            <button
                className={`${className} font-geistMono bg-[#07E272] px-4 py-3 text-[12px] sm:px-7 sm:py-3 sm:text-[14px] rounded-[5px] transform hover:opacity-80 duration-100`}
            >
                {title}
            </button>
        </section>
    )
}
