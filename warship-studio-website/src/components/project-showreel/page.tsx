'use client'
import { ProjectReelCard, StrapiVideo } from '@/components'
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'

export default function ProjectReel() {
    const [projectReel, setProjectReel] = useState<any>(null)

    useEffect(() => {
        api.get('/home-page', { params: { populate: '*' } })
            .then((res) => {
                setProjectReel(res.data.data)
            })
            .catch(console.error)
    }, [])

    if (!projectReel) return null
    return (
        <section className="py-20">
            <div className="px-5 sm:px-10 md:px-15 overflow-x-auto h-fit">
                <div className=" flex lg:justify-center space-x-5 lg:space-x-10ero">
                    <ProjectReelCard
                        videoUrl={
                            <StrapiVideo
                                video={projectReel.Service_Videos[1]?.url}
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />
                        }
                        tagLine="3d garment design"
                        title="Fashion"
                    />

                    <ProjectReelCard
                        videoUrl={
                            <StrapiVideo
                                video={projectReel.Service_Videos[0]?.url}
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />
                        }
                        tagLine="COSMETIC design"
                        title="Health & Beauty"
                    />

                    <ProjectReelCard
                        videoUrl={
                            <StrapiVideo
                                video={projectReel.Service_Videos[2]?.url}
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />
                        }
                        tagLine="3d visualization"
                        title="Product viz"
                    />

                    <ProjectReelCard
                        videoUrl={
                            <StrapiVideo
                                video={projectReel.Service_Videos[3]?.url}
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />
                        }
                        tagLine="APP animation"
                        title="SAAS"
                    />
                </div>
            </div>
        </section>
    )
}
