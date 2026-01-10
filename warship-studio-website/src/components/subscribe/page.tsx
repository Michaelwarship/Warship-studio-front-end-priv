'use client'

import { useState } from 'react'
import { Button } from '@/components'

export default function Subscribe() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<
        'idle' | 'loading' | 'success' | 'error'
    >('idle')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email,
                        firstName: '', // optional, can add inputs if you want
                        lastName: '',
                        address: '',
                        status: 'subscribed',
                    }),
                }
            )

            if (!res.ok) throw new Error('Subscription failed')

            setStatus('success')
            setEmail('')
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <p className="font-geistMono text-[12px] md:text-[14px] text-[#969696]">
                    SIGN UP TO OUR NEWSLETTER
                </p>

                <div className="flex space-x-5">
                    <input
                        type="email"
                        required
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-[5px] pl-5 focus:outline-none w-full lg:w-80 xl:w-100 border-b border-[#E0E0E0]"
                    />

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="whitespace-nowrap font-geistMono bg-[#F2F2F2] px-4 py-3 text-[12px] sm:px-7 sm:py-3 sm:text-[14px] rounded-[5px] uppercase cursor-pointer disabled:opacity-50"
                    >
                        {status === 'loading' ? 'SENDING…' : 'SEND'}
                    </button>
                </div>

                {status === 'success' && (
                    <p className="text-green-600">Thanks for subscribing.</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600">
                        Something went wrong. Try again.
                    </p>
                )}
            </div>
        </form>
    )
}
