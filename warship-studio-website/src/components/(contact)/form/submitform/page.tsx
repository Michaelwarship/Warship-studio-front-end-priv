'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function SubmitForm() {
    const [status, setStatus] = useState<Status>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const form = e.currentTarget
            const formData = new FormData(form)

            const templateParams = {
                full_name: formData.get('full_name')?.toString() || '',
                company: formData.get('company')?.toString() || '',
                email: formData.get('email')?.toString() || '',
                service: formData.get('service')?.toString() || '',
                budget: formData.get('budget')?.toString() || '',
                message: formData.get('message')?.toString() || '',
            }

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )

            setStatus('success')
            form.reset()
        } catch (err) {
            console.error('Submit error:', err)
            setStatus('error')
        }
    }

    return (
        <section>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center"
            >
                <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10">
                    <div className="flex flex-col">
                        <label className="text-[14px] font-geistMono text-[#0A231D]">
                            [ FULL NAME ]
                        </label>
                        <input
                            name="full_name"
                            required
                            placeholder="First and last"
                            className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-3 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-80 lg:w-60 xl:w-80"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[14px] font-geistMono text-[#0A231D]">
                            [ COMPANY NAME ]
                        </label>
                        <input
                            name="company"
                            placeholder="Company name"
                            className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-3 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-80 lg:w-60 xl:w-80"
                        />
                    </div>
                </div>

                <div className="flex flex-col pt-8">
                    <label className="text-[14px] font-geistMono text-[#0A231D]">
                        [ EMAIL ]
                    </label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="name@email.com"
                        className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-3 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-170 lg:w-130 xl:w-170"
                    />
                </div>

                <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 pt-8">
                    <div className="flex flex-col">
                        <label className="text-[14px] font-geistMono text-[#0A231D]">
                            [ SELECT SERVICE ]
                        </label>
                        <input
                            name="service"
                            placeholder="Select service"
                            className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-3 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-80 lg:w-60 xl:w-80"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[14px] font-geistMono text-[#0A231D]">
                            [ BUDGET ]
                        </label>
                        <input
                            name="budget"
                            placeholder="Your budget"
                            className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-3 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-80 lg:w-60 xl:w-80"
                        />
                    </div>
                </div>

                <div className="flex flex-col pt-8">
                    <label className="text-[14px] font-geistMono text-[#0A231D]">
                        [ YOUR MESSAGE ]
                    </label>
                    <textarea
                        name="message"
                        required
                        placeholder="Please describe your project and expected service"
                        className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-20 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-170 lg:w-130 xl:w-170"
                    />
                </div>

                <div className="pt-8">
                    <Button
                        type="submit"
                        disabled={status === 'loading'}
                        title={
                            status === 'loading' ? 'SUBMITTING…' : 'SUBMIT FORM'
                        }
                        className="md:!px-74 lg:!px-54 xl:!px-74"
                    />
                </div>

                {/* ✅ SUCCESS / ERROR MESSAGE */}
                {status === 'success' && (
                    <p className="mt-4 text-[13px] text-green-600 font-geistMono">
                        Message sent successfully. We’ll get back to you
                        shortly.
                    </p>
                )}

                {status === 'error' && (
                    <p className="mt-4 text-[13px] text-red-600 font-geistMono">
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </section>
    )
}
