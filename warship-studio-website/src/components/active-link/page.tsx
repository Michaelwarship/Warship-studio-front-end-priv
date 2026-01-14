'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface ActiveLinkProps {
    href: string
    children: React.ReactNode
    className?: string
    target?: string
    rel?: string
}

export default function ActiveLink({
    href,
    children,
    className,
    target,
    rel,
}: ActiveLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            target={target}
            rel={rel}
            className={clsx(
                className,
                'transition-all duration-200',
                isActive
                    ? 'text-[#07E272]  border-b w-fit'
                    : 'hover:text-[#07E272] '
            )}
        >
            {children}
        </Link>
    )
}
