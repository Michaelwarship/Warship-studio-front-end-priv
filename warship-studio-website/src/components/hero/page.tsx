'use client'
import {
    Button,
    PartnersRow,
    AnimateText,
    VideoEmbed,
    StrapiImage,
    StrapiVideo,
} from '@/components'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'

export default function HeroSection() {
    const [heroVideo, setHeroVideo] = useState<any>(null)

    useEffect(() => {
        api.get('home-page', { params: { populate: '*' } })
            .then((res) => {
                setHeroVideo(res.data.data)
            })
            .catch(console.error)
    }, [])

    if (!heroVideo) return null

    return (
        <section>
            <div
                data-no-anim
                className="relative w-full h-[100vh] min-h-[700px] max-h-[900px] overflow-hidden bg-black"
            >
                {/* <VideoEmbed
                    src={heroVideo.Hero_Video.url}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                /> */}

                {/* <video
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    src={heroVideo.Hero_Video.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                /> */}

                {heroVideo?.Hero_Video && (
                    <StrapiVideo
                        video={heroVideo.Hero_Video.url}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                )}

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-0 left-0 w-full px-5 sm:px-10 md:px-15 lg:px-20 xl:px-20 pb-24">
                    <div>
                        <p className="text-[45px] text-white sm:text-[70px] md:text-[85px] lg:text-[70px] xl:text-[85px] leading-14 sm:leading-22 md:leading-25">
                            Peller is <br />a Jarvis{' '}
                        </p>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-5 mt-7 sm:mt-10">
                            <Link href="/contact">
                                <Button title="HIRE US TODAY" />
                            </Link>
                            <Link
                                href="https://docs.google.com/document/d/15lGHtvIyffGhGfAdhqWKCNx9rmqL8ChG0YHoF2__kr8/export?format=docx"
                                download
                            >
                                <Button
                                    title="GET A QUOTE"
                                    className="bg-[#E0E0E0]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <PartnersRow />
        </section>
    )
}
