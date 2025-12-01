export default function AnatomyOfSafety() {
    return (
        <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-20 border-t border-white/10 bg-background-dark">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="lg:w-1/2 w-full">
                    <h2 className="text-steel text-4xl sm:text-5xl font-bold font-display tracking-tight">Anatomy of Safety</h2>
                    <p className="mt-4 text-steel/70 max-w-lg">
                        Every component is engineered for uncompromising security. Hover over the key features to discover the technology that safeguards your space.
                    </p>
                </div>

                <div className="lg:w-1/2 w-full relative h-[500px] flex items-center justify-center">
                    {/* Simplified Door SVG */}
                    <svg className="w-full h-full max-w-sm" fill="none" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
                        <rect height="380" rx="4" stroke="#cfd8dc" strokeWidth="2" width="150" x="25" y="10" />
                        <rect height="20" rx="2" stroke="#cfd8dc" strokeWidth="2" width="10" x="155" y="190" />
                    </svg>

                    {/* Interactive Hotspots */}
                    <div className="absolute inset-0 max-w-sm mx-auto group">
                        {/* Hotspot 1: Lock */}
                        <div className="absolute" style={{ top: '48%', left: '70%' }}>
                            <div className="relative flex items-center justify-center group/hotspot">
                                <button className="size-6 rounded-full bg-primary/80 flex items-center justify-center animate-pulse-slow hover:animate-none hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-background-dark !text-base font-bold">lock</span>
                                </button>
                                <div className="absolute bottom-full mb-3 w-48 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 left-1/2 z-20">
                                    <h4 className="font-bold text-steel">Multi-Point Lock</h4>
                                    <p className="text-sm text-steel/70">Hardened steel bolts engage at multiple points for superior forced entry resistance.</p>
                                </div>
                            </div>
                        </div>

                        {/* Hotspot 2: Hinge */}
                        <div className="absolute" style={{ top: '25%', left: '10%' }}>
                            <div className="relative flex items-center justify-center group/hotspot">
                                <button className="size-6 rounded-full bg-primary/80 flex items-center justify-center animate-pulse-slow hover:animate-none hover:scale-110 transition-transform" style={{ animationDelay: '1s' }}>
                                    <span className="material-symbols-outlined text-background-dark !text-base font-bold">door_sliding</span>
                                </button>
                                <div className="absolute bottom-full mb-3 w-48 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 left-1/2 z-20">
                                    <h4 className="font-bold text-steel">Reinforced Hinges</h4>
                                    <p className="text-sm text-steel/70">Ball-bearing hinges designed to support immense weight and prevent sagging.</p>
                                </div>
                            </div>
                        </div>

                        {/* Hotspot 3: Frame */}
                        <div className="absolute" style={{ top: '75%', left: '8%' }}>
                            <div className="relative flex items-center justify-center group/hotspot">
                                <button className="size-6 rounded-full bg-primary/80 flex items-center justify-center animate-pulse-slow hover:animate-none hover:scale-110 transition-transform" style={{ animationDelay: '2s' }}>
                                    <span className="material-symbols-outlined text-background-dark !text-base font-bold">crop_square</span>
                                </button>
                                <div className="absolute top-full mt-3 w-48 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 left-1/2 z-20">
                                    <h4 className="font-bold text-steel">Steel Frame</h4>
                                    <p className="text-sm text-steel/70">A heavy-gauge steel frame provides a solid, impenetrable anchor to the structure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" rel="stylesheet" />
        </section>
    );
}
