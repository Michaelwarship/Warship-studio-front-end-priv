'use client'
import { SingleCard, StrapiImage } from '@/components'
import { useRef, useEffect, useState } from 'react'
import { api } from '@/lib/api'

export default function PartnersRow() {
    const [partners, setPartners] = useState<any[]>([])

    useEffect(() => {
        api.get('/home-page', { params: { populate: '*' } })
            .then((res) => {
                setPartners(res.data.data.Brand_Logos)
            })
            .catch(console.error)
    }, [])

    if (!partners.length) return null

    return (
        <section className="overflow-x-auto whitespace-nowrap">
            <div className="flex w-max animate-scroll">
                <div className="flex shrink-0 border-0 border-[#E0E0E0] [&>*]:border-t [&>*]:border-r [&>*]:border-b-1  [&>*]:border-[#E0E0E0] [&>*:last-child]:border-r-0">
                    {partners.map((brand) => (
                        <SingleCard
                            key={brand.id}
                            image={
                                <StrapiImage image={brand.url} className="" />
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
