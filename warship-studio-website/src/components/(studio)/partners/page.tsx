import { StudioPartnerCard, PartnersRow } from '@/components'

export default function StudioPartners() {
    return (
        <section className="py-10 lg:py-20">
            <div className="space-y-5">
                <p className="font-geistMono uppercase text-[14px] md:text-[16px] text-[#969696] px-5 lg:px-20 ">
                    WE'VE PARTNERED WITH TECH BRANDS ACROSS DIVERSE INDUSTRIES,
                </p>

                {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  xl:grid-cols-5 gap-2 space-y-5">
                    <StudioPartnerCard image="/partners/chowsafari.svg" />
                    <StudioPartnerCard image="/partners/my-area.svg" />
                    <StudioPartnerCard image="/partners/dope.svg" />
                    <StudioPartnerCard image="/partners/climaqx.svg" />
                    <StudioPartnerCard image="/partners/optimum.svg" />
                    <StudioPartnerCard image="/partners/kuipers.svg" />
                    <StudioPartnerCard image="/partners/micheal-warship.svg" />
                    <StudioPartnerCard image="/partners/turing-heights.svg" />
                    <StudioPartnerCard image="/partners/mainland.svg" />
                </div> */}

                <div>
                    <PartnersRow />
                </div>
            </div>
        </section>
    )
}
