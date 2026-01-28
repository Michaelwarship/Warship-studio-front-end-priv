// 'use client'

// import { useEffect, useState } from 'react'
// import { Button } from '@/components'

// type Consent = 'accepted' | 'rejected'

// const KEY = 'cookie_consent_v1'

// export default function CookieBanner() {
//     const [visible, setVisible] = useState(false)

//     useEffect(() => {
//         const saved = localStorage.getItem(KEY) as Consent | null
//         if (!saved) setVisible(true)
//     }, [])

//     const setConsent = (value: Consent) => {
//         localStorage.setItem(KEY, value)
//         // Optional: notify other parts of the app
//         window.dispatchEvent(new Event('cookie-consent-changed'))
//         setVisible(false)
//     }

//     if (!visible) return null

//     return (
//         <div className="fixed bottom-4 left-4 right-4 md:right-auto md:right-4 z-[9999] mx-auto max-w-3xl rounded-[10px] bg-white px-5 py-5 sm:px-10 sm:py-10 shadow-sm border border-[#969696]/10">
//             <div className="flex flex-col space-y-5 sm:space-y-0 space-x-10 sm:flex-row sm:items-center sm:justify-between">
//                 <div className="space-y-2">
//                     <p className="text-[#0A231D] text-[20px]  md:text-[28px]">
//                         Cookies Anyone? 🍪
//                     </p>
//                     <p className="text-[12px] sm:text-[14px] whitespace-nowrap text-gray-600 font-geistMono uppercase text-[#969696]">
//                         They affect your web experience
//                     </p>
//                 </div>

//                 <div className="flex gap-2">
//                     <Button
//                         onClick={() => setConsent('rejected')}
//                         title="Close"
//                         className="bg-[#E0E0E0]"
//                     />
//                     <Button
//                         onClick={() => setConsent('accepted')}
//                         title="Accept"
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components'

type Consent = 'accepted' | 'rejected'
const KEY = 'cookie_consent_v1'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem(KEY) as Consent | null
        if (!saved) setVisible(true)

        // also listen for "re-open" triggers
        const onChange = () => {
            const latest = localStorage.getItem(KEY) as Consent | null
            setVisible(!latest)
        }
        window.addEventListener('cookie-consent-changed', onChange)
        return () =>
            window.removeEventListener('cookie-consent-changed', onChange)
    }, [])

    const setConsent = (value: Consent) => {
        localStorage.setItem(KEY, value)
        window.dispatchEvent(new Event('cookie-consent-changed'))
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div
            className="
        fixed bottom-4 left-4 right-4 z-[9999]
        md:left-auto md:right-4 md:mx-0
        max-w-3xl
        rounded-[10px] bg-white
        px-5 py-5 sm:px-10 sm:py-10
        shadow-sm border border-[#969696]/10
      "
        >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                    <p className="text-[#0A231D] text-[20px] md:text-[28px]">
                        Cookies Anyone? 🍪
                    </p>

                    <p className="text-[12px] sm:text-[14px] text-[#969696] font-geistMono uppercase">
                        They affect your web experience
                    </p>
                </div>

                <div className="flex gap-2">
                    <Button
                        onClick={() => setConsent('rejected')}
                        title="Reject"
                        className="bg-[#E0E0E0]"
                    />
                    <Button
                        onClick={() => setConsent('accepted')}
                        title="Accept"
                    />
                </div>
            </div>
        </div>
    )
}
