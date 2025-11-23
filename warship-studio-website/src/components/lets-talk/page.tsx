import Button from '../button/page'

export default function LetsTalk() {
    return (
        <section className="px-5 lg:px-20 mt-40">
            <div className="flex justify-between">
                <div className=" ">
                    <Button
                        title="LET'S COLLABORATE"
                        className="bg-transparent !px-0 !py-0 text-[12px] !text-[#969696] text-black mb-2 sm:mt-4 sm:mb-0 md:mt-5 lg:mt-5"
                    />
                    <p className="text-[35px] text-[#0A231D] sm:text-[60px] leading-9 sm:leading-15 md:text-[70px] md:leading-20 lg:text-[70px] xl:text-[80px] 2xl:text-[80px]">
                        Now, let's talk about <br /> your project.
                    </p>
                    <Button
                        title="SCHEDULE YOUR INTRO CALL"
                        className="mt-5 sm:mt-10"
                    />
                </div>

                <div className="hidden md:block w-20 sm:mt-64 md:mt-60 lg:w-30 lg:mt-53">
                    <img
                        src="/warship-est.svg"
                        alt="warship-est"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
