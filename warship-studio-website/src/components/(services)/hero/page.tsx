import { Button } from '@/components'

export default function ServiceHero() {
    return (
        <section className="[&>*]:border-[#E0E0E0] [&>*]:border-b-1 mt-10">
            <div className="space-y-0 px-5 pt-15 sm:pt-20 md:pt-30 pb-20 lg:px-20">
                <Button
                    title="LETS WORK"
                    className="text-[#969696] bg-transparent md:!text-[16px] !p-0 "
                />

                <p className="text-[35px] sm:text-[60px] md:text-[56px] text-[#0A231D] mb-5">
                    Our Services.
                </p>

                <div className="flex space-x-5">
                    <Button title="HIRE US TODAY" className="" />
                    <Button title="GET A QUOTE" className="bg-[#E0E0E0]" />
                </div>
            </div>
        </section>
    )
}
