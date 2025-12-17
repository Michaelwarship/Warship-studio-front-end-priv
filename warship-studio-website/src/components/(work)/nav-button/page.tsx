'use client'
import {
    WorkNavButtonSingle,
    AllPortfolioCard,
    BrandingPortfolioCard,
    UnrealEnginePortfolioCard,
    VfxPortfolioCard,
    RealEstatePortfolioCard,
    ProductPortfolioCard,
} from '@/components'
import { useState } from 'react'

export default function WorkNavButton() {
    const [selectedCategory, setSelectedCategory] = useState('ALL')

    return (
        <section className="py-5 px-5 sm:px-5 md:px-5 lg:px-20 xl:px-20">
            <div className="flex flex-wrap gap-2 md:space-x-1 lg:space-x-5 py-10">
                <WorkNavButtonSingle
                    title="All"
                    onClick={() => setSelectedCategory('ALL')}
                    selected={selectedCategory === 'ALL'}
                />
                <WorkNavButtonSingle
                    title="Branding"
                    onClick={() => setSelectedCategory('BRANDING')}
                    selected={selectedCategory === 'BRANDING'}
                />
                <WorkNavButtonSingle
                    title="Unreal Engine"
                    onClick={() => setSelectedCategory('UNREAL ENGINE')}
                    selected={selectedCategory === 'UNREAL ENGINE'}
                />
                <WorkNavButtonSingle
                    title="VFX"
                    onClick={() => setSelectedCategory('VFX')}
                    selected={selectedCategory === 'VFX'}
                />
                <WorkNavButtonSingle
                    title="3d Product Visualisation"
                    onClick={() =>
                        setSelectedCategory('3D PRODUCT VISUALISATION')
                    }
                    selected={selectedCategory === '3D PRODUCT VISUALISATION'}
                />
                <WorkNavButtonSingle
                    title="Real Estate"
                    onClick={() => setSelectedCategory('REAL ESTATE')}
                    selected={selectedCategory === 'REAL ESTATE'}
                />
            </div>

            {selectedCategory === 'ALL' && <AllPortfolioCard />}
            {selectedCategory === 'BRANDING' && <BrandingPortfolioCard />}
            {selectedCategory === 'UNREAL ENGINE' && (
                <UnrealEnginePortfolioCard />
            )}
            {selectedCategory === 'VFX' && <VfxPortfolioCard />}
            {selectedCategory === '3D PRODUCT VISUALISATION' && (
                <ProductPortfolioCard />
            )}
            {selectedCategory === 'REAL ESTATE' && <RealEstatePortfolioCard />}
        </section>
    )
}
