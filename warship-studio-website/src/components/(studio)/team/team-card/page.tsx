import { Button } from '@/components'
interface CardProps {
    image: string
    name: string
    buttonText: string
}

export default function StudioTeamCard({ image, name, buttonText }: CardProps) {
    return (
        <section>
            <div className="flex flex-col items-center space-y-1 md:space-y-1 lg:space-y-2">
                <div className="bg-[#D7D7D7] w-[288px] h-[288px] sm:w-[200px] sm:h-[200px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[288px] 2xl:h-[288px] rounded-[5px] overflow-hidden group">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                    />
                </div>

                <p className="text-[#0A231D] text-[14px] md:text-[18px] tracking-[-1]">
                    {name}
                </p>
                <Button
                    title={buttonText}
                    className="!p-0 bg-transparent text-[#969696] !text-[9px] md:!text-[7px] lg:!text-[9px] xl:!text-[12px]"
                />
            </div>
        </section>
    )
}
