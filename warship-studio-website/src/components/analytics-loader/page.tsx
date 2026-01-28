// 'use client'

// import Script from 'next/script'
// import { useEffect, useState } from 'react'

// const CONSENT_KEY = 'cookie_consent_v1'

// export default function AnalyticsLoader() {
//     const [allowed, setAllowed] = useState(false)

//     useEffect(() => {
//         const checkConsent = () => {
//             setAllowed(localStorage.getItem(CONSENT_KEY) === 'accepted')
//         }

//         checkConsent()
//         window.addEventListener('cookie-consent-changed', checkConsent)

//         return () => {
//             window.removeEventListener('cookie-consent-changed', checkConsent)
//         }
//     }, [])

//     if (!allowed) return null

//     return (
//         <>
//             {/* Load GA script */}
//             <Script
//                 src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
//                 strategy="afterInteractive"
//             />

//             {/* Initialize GA */}
//             <Script id="ga-init" strategy="afterInteractive">
//                 {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
//             page_path: window.location.pathname,
//           });
//         `}
//             </Script>
//         </>
//     )
// }

'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const CONSENT_KEY = 'cookie_consent_v1'

export default function AnalyticsLoader() {
    const [allowed, setAllowed] = useState(false)
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID

    useEffect(() => {
        const checkConsent = () => {
            setAllowed(localStorage.getItem(CONSENT_KEY) === 'accepted')
        }

        checkConsent()
        window.addEventListener('cookie-consent-changed', checkConsent)

        return () => {
            window.removeEventListener('cookie-consent-changed', checkConsent)
        }
    }, [])

    if (!allowed || !GA_ID) return null

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
            </Script>
        </>
    )
}
