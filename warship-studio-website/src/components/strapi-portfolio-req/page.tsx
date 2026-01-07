'use client'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'

export default function StrapiPortfolioReq() {
    const [portfolio, setPortfolio] = useState<any>(undefined)
    useEffect(() => {
        api.get('/portfolios', { params: { populate: '*' } })
            .then((res) => {
                setPortfolio(res.data.data[0])
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    if (!portfolio) return null
}
