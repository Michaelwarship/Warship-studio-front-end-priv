'use client'

import { useEffect } from 'react'
import { api } from '@/lib/api'

export default function TestPage() {
    useEffect(() => {
        api.get('/portfolios', {
            params: { populate: '*' },
        })
            .then((res) => {
                console.log('PORTFOLIOS:', res.data.data)
            })
            .catch((err) => {
                console.error('ERROR:', err)
            })
    }, [])

    return <div>Check the console</div>
}
