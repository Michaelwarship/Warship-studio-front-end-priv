import { Button } from '@/components'

export default function SubmitForm() {
    return (
        <section>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10">
                    <div className="flex flex-col">
                        <label className="text-[14px] font-geistMono text-[#0A231D]">
                            [ FULL NAME ]
                        </label>
                        <input
                            type="name"
                            placeholder="First and last"
                            className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-3 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-80 lg:w-60 xl:w-80"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[14px] font-geistMono text-[#0A231D]">
                            [ COMPANY NAME ]
                        </label>
                        <input
                            type="name"
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
                        type="name"
                        placeholder="name@email.com"
                        className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-3 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-170 lg:w-130 xl:w-170"
                    />
                </div>

                <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row space-x-10 pt-8">
                    <div className="flex flex-col">
                        <label className="text-[14px] font-geistMono text-[#0A231D]">
                            [ SELECT SERVICE ]
                        </label>
                        <input
                            type="name"
                            placeholder="Select service"
                            className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-3 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-80 lg:w-60 xl:w-80"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[14px] font-geistMono text-[#0A231D]">
                            [ BUDGET ]
                        </label>
                        <input
                            type="name"
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
                        placeholder="Please describe your project and expected service"
                        className="focus:outline-none placeholder-[#AEAEAE] placeholder:text-[25px] placeholder:opacity-50 text-[14px] px-2 pt-4 pb-20 border-[#E0E0E0] border-b-1 w-80 sm:w-150 md:w-170 lg:w-130 xl:w-170"
                    />
                </div>

                <div className="pt-8">
                    <Button
                        title="SUBMIT FORM"
                        className="md:!px-74 lg:!px-54 xl:!px-74"
                    />
                </div>
            </div>
        </section>
    )
}
