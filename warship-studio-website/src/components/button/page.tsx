import { AnimateText } from '@/components'

interface ButtonProps {
    title: React.ReactNode
    className?: string
    onClick?: () => void
    hoverColor?: string
}

export default function Button({
    title,
    className,
    onClick,
    hoverColor = 'bg-[#FAFBD4]',
}: ButtonProps) {
    return (
        <section>
            <AnimateText disabled>
                <button
                    onClick={onClick}
                    className={`${className} group relative whitespace-nowrap font-geistMono bg-[#07E272] px-4 py-3 text-[12px] sm:px-7 sm:py-3 sm:text-[14px] rounded-[5px] uppercase cursor-pointer`}
                >
                    <span className="relative z-1 uppercase">{title}</span>
                    <span
                        className={`${hoverColor} absolute inset-0 rounded-[4px] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100`}
                    ></span>
                </button>
            </AnimateText>
        </section>
    )
}
