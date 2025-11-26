export default function Marquee() {
    return (
        <section className="overflow-hidden whitespace-nowrap border-y border-white/10 py-4 bg-background-dark">
            <div className="animate-[marquee_40s_linear_infinite] inline-block">
                <p className="text-steel/50 text-base font-normal leading-normal inline-block px-4 font-display">
                    SECURITY • TECHNOLOGY • DURABILITY • DESIGN • SECURITY • TECHNOLOGY • DURABILITY • DESIGN • SECURITY • TECHNOLOGY • DURABILITY • DESIGN • SECURITY • TECHNOLOGY • DURABILITY • DESIGN • SECURITY • TECHNOLOGY • DURABILITY • DESIGN •
                </p>
                <p className="text-steel/50 text-base font-normal leading-normal inline-block px-4 font-display">
                    SECURITY • TECHNOLOGY • DURABILITY • DESIGN • SECURITY • TECHNOLOGY • DURABILITY • DESIGN • SECURITY • TECHNOLOGY • DURABILITY • DESIGN • SECURITY • TECHNOLOGY • DURABILITY • DESIGN • SECURITY • TECHNOLOGY • DURABILITY • DESIGN •
                </p>
            </div>
        </section>
    );
}
