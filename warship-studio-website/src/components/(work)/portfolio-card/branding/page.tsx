import { PortfolioCardSingle, StaggeredTextContainer } from '@/components'
import { portfolioData } from '@/data/portfolioData'
import Link from 'next/link'

export default function BrandingPortfolioCard() {
    return (
        <section className="">
            <StaggeredTextContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(portfolioData).map(([key, project]) => (
                    <Link key={key} href={`/work/portfolio/${key}`}>
                        <PortfolioCardSingle
                            image="/carousel/carousel-1.png"
                            title={project.title}
                            buttonText="View project"
                        />
                    </Link>
                ))}
            </StaggeredTextContainer>
        </section>
    )
}
1
