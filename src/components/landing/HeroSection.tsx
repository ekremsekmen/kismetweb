export default function HeroSection() {
    return (
        <section
            className="relative flex min-h-screen flex-col items-center justify-center text-center p-4 bg-cover bg-center"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDx6b4FHWQFeQY-S6HjJWEUPRXp2H2wib4CA3eyrJcNVVFHhYTK5zosB_QgYTGRyZEB5rQ-XplHTqSMq7hifSq-l5xdy_XYuTA4MOwfIvwv0rnkeXqIjKv80ia82hL5v6TVIOSA_XFpPzCqiQYMukK2u8cis5HWs8kjkzEdJun2zhCS2FEfbOaV04WitW9HmEccbunBU0iq3NVmOK_NQtsRhms5rowNMBvbBF5r_sqKKTxbRPZ1xKJxUmBKaV4IUruuzp73n1d50ao")'
            }}
        >
            <div
                className="absolute inset-0 bg-black/20"
                style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDx6b4FHWQFeQY-S6HjJWEUPRXp2H2wib4CA3eyrJcNVVFHhYTK5zosB_QgYTGRyZEB5rQ-XplHTqSMq7hifSq-l5xdy_XYuTA4MOwfIvwv0rnkeXqIjKv80ia82hL5v6TVIOSA_XFpPzCqiQYMukK2u8cis5HWs8kjkzEdJun2zhCS2FEfbOaV04WitW9HmEccbunBU0iq3NVmOK_NQtsRhms5rowNMBvbBF5r_sqKKTxbRPZ1xKJxUmBKaV4IUruuzp73n1d50ao")',
                    opacity: 0.03
                }}
             />

            <div className="z-10 flex flex-col items-center gap-4">
                <h1 className="text-steel text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold uppercase font-syne tracking-tighter animate-fade-in-up">
                    FORGED IN STEEL.
                </h1>
                <h2 className="text-steel/80 text-lg sm:text-xl font-display font-normal leading-normal animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Öz Kısmet: Engineering Secure Entrances
                </h2>
            </div>
        </section>
    );
}
