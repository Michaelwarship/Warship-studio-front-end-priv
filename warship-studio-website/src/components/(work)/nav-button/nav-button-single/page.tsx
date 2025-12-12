import Link from 'next/link'

interface WorkNavButtonSingleProps {
    title: string
    onClick?: () => void
    selected?: boolean
}

export default function WorkNavButtonSingle({
    title,
    onClick,
    selected,
}: WorkNavButtonSingleProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-[#F3F3F3] whitespace-nowrap font-geistMono text-[10px] lg:text-[12px] 2xl:text-[14px] w-fit px-3 py-2 rounded-md cursor-pointer ${selected ? 'bg-green-500 text-white' : 'text-[#0A231D]'}`}
        >
            {title}
        </button>
    )
}
