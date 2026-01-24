// 'use client'

// import { useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'

// export default function IntroOverlay() {
//     const pathname = usePathname()
//     const [visible, setVisible] = useState(true)

//     useEffect(() => {
//         setVisible(true)

//         const timer = setTimeout(() => {
//             setVisible(false)
//         }, 3000)

//         return () => clearTimeout(timer)
//     }, [pathname])

//     if (!visible) return null

//     return (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
//             <img
//                 src="/logo-animation/white gif_1.gif"
//                 alt="Loading"
//                 className="w-[200px] h-auto"
//             />
//         </div>
//     )
// }

'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const DURATION = 3000 // match your GIF length (ms)

export default function IntroOverlay() {
    const pathname = usePathname()
    const [visible, setVisible] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        // show overlay on every route change
        setVisible(true)
        setFadeOut(false)
        document.body.style.overflow = 'hidden'

        const fadeTimer = setTimeout(() => {
            setFadeOut(true)
        }, DURATION - 400)

        const hideTimer = setTimeout(() => {
            setVisible(false)
            document.body.style.overflow = ''
        }, DURATION)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(hideTimer)
            document.body.style.overflow = ''
        }
    }, [pathname])

    if (!visible) return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-400 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <img
                src="/logo-animation/white_gif_1.gif"
                alt="Intro"
                className="w-[100px] h-auto md:w-[200px] md:h-auto"
            />
        </div>
    )
}
