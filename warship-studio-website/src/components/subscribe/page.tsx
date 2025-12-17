import { Button, AnimateText } from '@/components'
export default function Subscribe() {
    return (
        <section>
            <div className="flex flex-col space-y-5">
                <p className="font-geistMono text-[12px] md:text-[14px] text-[#969696]">
                    SIGN UP TO OUR NEWSLETTER
                </p>
                <div className="flex space-x-5">
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-90 rounded-[5px] pl-5 focus:outline-none w-100 lg:w-80 xl:w-100 border-0 border-[#E0E0E0] border-b-1"
                    />
                    <Button title="SEND" className="bg-[#E0E0E0]" />
                </div>

                <AnimateText disabled>
                    <p className="font-geistMono text-[12px] md:text-[14px] text-[#969696]">
                        BY CLICKING SEND, YOU AGREE TO RECIEVE MESSAGES.
                    </p>
                </AnimateText>
            </div>
        </section>
    )
}
