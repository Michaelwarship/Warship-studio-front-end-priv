'use client'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import {
    WorkNavButtonSingle,
    PortfolioCardSingle,
    StrapiImage,
    StaggeredTextContainer,
} from '@/components'
import Link from 'next/link'

export default function WorkSection() {
    // State
    const [categories, setCategories] = useState<any[]>([])
    const [projects, setProjects] = useState<any[]>([])
    const [selectedCategoryId, setSelectedCategoryId] = useState<
        'ALL' | number
    >('ALL')

    const [portfolio, setPortfolio] = useState<{ data: any[] } | undefined>(
        undefined
    )

    // Fetch portfolios and categories once on mount
    useEffect(() => {
        api.get('/categories')
            .then((res) => setCategories(res.data.data))
            .catch(console.error)

        api.get('/portfolios', { params: { populate: '*' } })
            .then((res) => setProjects(res.data.data))
            .catch(console.error)
    }, [])

    // Filter projects based on selected category
    const filteredProjects =
        selectedCategoryId === 'ALL'
            ? projects
            : projects.filter(
                  (project: any) =>
                      Array.isArray(project.categories) &&
                      project.categories.some(
                          (cat: any) => cat.id === selectedCategoryId
                      )
              )

    return (
        <section className="py-5 px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 2xl:px-40">
            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap gap-2 py-10">
                {/* "All" button always shows */}
                <WorkNavButtonSingle
                    title="All"
                    selected={selectedCategoryId === 'ALL'}
                    onClick={() => setSelectedCategoryId('ALL')}
                />

                {/* Only render categories that have projects */}
                {categories
                    .filter((category) =>
                        projects.some(
                            (project) =>
                                Array.isArray(project.categories) &&
                                project.categories.some(
                                    (cat: any) => cat.id === category.id
                                )
                        )
                    )
                    .map((category) => (
                        <WorkNavButtonSingle
                            key={category.id}
                            title={category.Name}
                            selected={selectedCategoryId === category.id}
                            onClick={() => setSelectedCategoryId(category.id)}
                        />
                    ))}
            </div>

            {/* PROJECT GRID */}
            {filteredProjects.length > 0 && (
                <StaggeredTextContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/work/portfolio/${project.id}`}
                        >
                            <PortfolioCardSingle
                                title={project.Title}
                                buttonText={project.Company}
                                image={
                                    <StrapiImage
                                        image={project.Thumbnail}
                                        format="small"
                                        className="w-full h-full object-cover"
                                    />
                                }
                            />
                        </Link>
                    ))}
                </StaggeredTextContainer>
            )}
        </section>
    )
}
