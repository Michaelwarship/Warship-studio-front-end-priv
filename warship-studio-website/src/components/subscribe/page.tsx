import Button from '../button/page'
export default function Subscribe() {
    return (
        <section>
            <div className="flex flex-col space-y-5">
                <p className="font-geistMono text-[14px] text-[#969696]">
                    SIGN UP TO OUR NEWSLETTER
                </p>
                <div className="flex space-x-5">
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-90 rounded-[5px] pl-5 shadow-md focus:outline-none md:w-100"
                    />
                    <Button title="SEND" className="bg-[#E0E0E0]" />
                </div>

                <p className="font-geistMono text-[14px] text-[#969696]">
                    BY CLICKING SEND, YOU AGREE TO RECIEVE MESSAGES.
                </p>
            </div>
        </section>
    )
}
