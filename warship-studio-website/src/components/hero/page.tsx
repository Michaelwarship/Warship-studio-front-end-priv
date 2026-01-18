// 'use client'

// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { api } from '@/lib/api'
// import { Button, PartnersRow, StrapiImage, StrapiVideo } from '@/components'

// export default function HeroSection() {
//     const [heroData, setHeroData] = useState<any>(null)
//     const [videoReady, setVideoReady] = useState(false)

//     useEffect(() => {
//         api.get('home-page', { params: { populate: '*' } })
//             .then((res) => setHeroData(res.data.data))
//             .catch(console.error)
//     }, [])

//     const heroImage = heroData?.Hero_Image // full object (your JSON)
//     const heroVideo = heroData?.Hero_Video // depends on your Strapi type

//     // Reset readiness if video changes
//     useEffect(() => {
//         setVideoReady(false)
//     }, [heroVideo?.url])

//     if (!heroImage && !heroVideo?.url) return null

//     return (
//         <section>
//             <div className="relative w-full h-[100vh] min-h-[700px] max-h-[900px] overflow-hidden bg-black">
//                 {/* Image first (ALWAYS render it if present) */}
//                 {heroImage && (
//                     <StrapiImage
//                         image={heroImage}     // IMPORTANT: pass the object
//                         format="large"        // "thumbnail" loads faster, "large" looks better
//                         className={[
//                             'absolute inset-0 w-full h-full object-cover pointer-events-none',
//                             'transition-opacity duration-500',
//                             videoReady ? 'opacity-0' : 'opacity-100',
//                         ].join(' ')}
                        
//                     />
//                 )}

//                 {/* Video fades in when ready */}
//                 {heroVideo?.url && (
//                     <StrapiVideo
//                         video={heroVideo.url} // StrapiVideo expects a url string
//                         className={[
//                             'absolute inset-0 w-full h-full object-cover pointer-events-none',
//                             'transition-opacity duration-500',
//                             videoReady ? 'opacity-100' : 'opacity-0',
//                         ].join(' ')}
//                         onCanPlay={() => setVideoReady(true)}
//                         onLoadedData={() => setVideoReady(true)}
//                         preload="metadata"
//                         muted
//                         playsInline
//                         autoPlay
//                         loop
//                     />
//                 )}

//                 <div className="absolute inset-0 bg-black/20" />

//                 <div className="absolute bottom-0 left-0 w-full px-5 sm:px-10 md:px-15 lg:px-20 xl:px-20 pb-24">
//                     <p className="text-[45px] text-white sm:text-[70px] md:text-[85px] lg:text-[70px] xl:text-[85px] leading-14 sm:leading-22 md:leading-25">
//                         Pushing Pixels <br />
//                         with Precision.
//                     </p>

//                     <div className="flex justify-between items-center w-full">
//                         <div className="flex items-center space-x-5 mt-7 sm:mt-10">
//                             <Link href="/contact">
//                                 <Button title="HIRE US TODAY" />
//                             </Link>

//                             <Link href="https://tally.so/r/lbeP26">
//                                 <Button title="GET A QUOTE" className="bg-[#E0E0E0]" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <PartnersRow />
//         </section>
//     )
// }


'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { Button, PartnersRow, StrapiImage, StrapiVideo } from '@/components'

export default function HeroSection() {
    const [heroData, setHeroData] = useState<any>(null)
    const [videoReady, setVideoReady] = useState(false)

    useEffect(() => {
        api.get('home-page', {
            params: {
                fields: ['id'],
                populate: {
                    Hero_Image: {
                        fields: ['url', 'formats', 'width', 'height', 'alternativeText'],
                    },
                    Hero_Video: {
                        fields: ['url'],
                    },
                },
            },
        })
            .then((res) => setHeroData(res.data.data))
            .catch(console.error)
    }, [])

    const heroImage = heroData?.Hero_Image
    const heroVideoUrl = heroData?.Hero_Video?.url

    // Reset readiness if video changes
    useEffect(() => {
        setVideoReady(false)
    }, [heroVideoUrl])

    if (!heroImage && !heroVideoUrl) return null

    return (
        <section>
            <div className="relative w-full h-[100vh] min-h-[700px] max-h-[900px] overflow-hidden bg-black">
                {/* Image first */}
                {heroImage && (
                    <StrapiImage
                        image={heroImage}
                        format="large" // switch to "medium" or "thumbnail" if you want even faster first paint
                        className={[
                            'absolute inset-0 w-full h-full object-cover pointer-events-none',
                            'transition-opacity duration-500',
                            videoReady ? 'opacity-0' : 'opacity-100',
                        ].join(' ')}
                    />
                )}

                {/* Video fades in when ready */}
                {heroVideoUrl && (
                    <StrapiVideo
                        video={heroVideoUrl}
                        className={[
                            'absolute inset-0 w-full h-full object-cover pointer-events-none',
                            'transition-opacity duration-500',
                            videoReady ? 'opacity-100' : 'opacity-0',
                        ].join(' ')}
                        onCanPlay={() => setVideoReady(true)}
                        onLoadedData={() => setVideoReady(true)}
                        preload="metadata"
                        muted
                        playsInline
                        autoPlay
                        loop
                    />
                )}

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-0 left-0 w-full px-5 sm:px-10 md:px-15 lg:px-20 xl:px-20 pb-24">
                    <p className="text-[45px] text-white sm:text-[70px] md:text-[85px] lg:text-[70px] xl:text-[85px] leading-14 sm:leading-22 md:leading-25">
                        Pushing Pixels <br />
                        with Precision.
                    </p>

                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-5 mt-7 sm:mt-10">
                            <Link href="/contact">
                                <Button title="HIRE US TODAY" />
                            </Link>

                            <Link href="https://tally.so/r/lbeP26">
                                <Button title="GET A QUOTE" className="bg-[#E0E0E0]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <PartnersRow />
        </section>
    )
}
