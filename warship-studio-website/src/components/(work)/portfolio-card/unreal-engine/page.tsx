import { PortfolioCardSingle } from '@/components'

export default function UnrealEnginePortfolioCard() {
    return (
        <section className="">
            <div className="space-y-8 lg:space-y-5">
                <div className="flex flex-col sm:flex-row justify-between space-y-8 xl:space-y-2 ">
                    <PortfolioCardSingle
                        image="/carousel/carousel-1.png"
                        title="Radiant -The new way of doing SOC"
                        buttonText="Radiant company"
                    />

                    <PortfolioCardSingle
                        image="/carousel/carousel-2.png"
                        title="Radiant -The new way of doing SOC"
                        buttonText="Radiant company"
                    />
                </div>

                <div>
                    <PortfolioCardSingle
                        image="/carousel/carousel-1.png"
                        title="Radiant -The new way of doing SOC"
                        buttonText="Radiant company"
                        imageWidth="!w-full"
                    />
                </div>

                <div className="flex flex-col sm:flex-row justify-between space-y-8 xl:space-y-2 ">
                    <PortfolioCardSingle
                        image="/carousel/carousel-1.png"
                        title="Radiant -The new way of doing SOC"
                        buttonText="Radiant company"
                    />

                    <PortfolioCardSingle
                        image="/carousel/carousel-1.png"
                        title="Radiant -The new way of doing SOC"
                        buttonText="Radiant company"
                    />
                </div>

                <div>
                    <PortfolioCardSingle
                        image="/carousel/carousel-1.png"
                        title="Radiant -The new way of doing SOC"
                        buttonText="Radiant company"
                        imageWidth="!w-full"
                    />
                </div>
            </div>
        </section>
    )
}
1
