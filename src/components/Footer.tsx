import Link from "next/link";

export default function Footer() {
    return (
        <footer className="min-h-[50vh] flex flex-col items-center justify-center text-center p-10 border-t border-white/10 bg-background-dark">
            <h3 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase font-syne tracking-tighter text-steel/50 select-none">
                SECURE YOUR
            </h3>
            <h3 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase font-syne tracking-tighter text-steel mb-12 select-none">
                VISION
            </h3>

            <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-primary text-background-dark text-xl font-bold tracking-wide hover:scale-105 transition-transform duration-300">
                <span className="truncate">Let&apos;s Talk</span>
            </button>

            <div className="mt-20 text-center text-steel/40 text-sm">
                <p>© 2024 Öz Kısmet. All Rights Reserved.</p>
                <div className="flex justify-center gap-6 mt-4">
                    <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
