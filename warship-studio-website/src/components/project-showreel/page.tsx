import { ProjectReelCard } from '@/components'

export default function ProjectReel() {
    return (
        <section className="py-20">
            <div className="px-5 sm:px-10 md:px-15 overflow-x-auto h-fit">
                <div className=" flex lg:justify-center space-x-5 lg:space-x-10ero">
                    <ProjectReelCard
                        videoUrl="https://vimeo.com/1090477326"
                        tagLine="3d garment design"
                        title="Fashion"
                    />
                    <ProjectReelCard
                        videoUrl="https://vimeo.com/1090477326"
                        tagLine="COSMETIC design"
                        title="Health & Beauty"
                    />
                    <ProjectReelCard
                        videoUrl="https://vimeo.com/1090477326"
                        tagLine="3d visualization"
                        title="Product viz"
                    />
                    <ProjectReelCard
                        videoUrl="https://vimeo.com/1090477326"
                        tagLine="APP animation"
                        title="SAAS"
                    />
                </div>
            </div>
        </section>
    )
}
