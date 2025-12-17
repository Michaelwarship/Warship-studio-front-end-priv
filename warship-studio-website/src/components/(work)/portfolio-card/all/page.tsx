import Link from 'next/link'
import { portfolioData } from '@/data/portfolioData'
import { PortfolioCardSingle } from '@/components'

export default function Work() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(portfolioData).map(([key, project]) => (
                    <Link key={key} href={`/work/portfolio/${key}`}>
                        <PortfolioCardSingle
                            image="/carousel/carousel-1.png"
                            title={project.title}
                            buttonText="View project"
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}
