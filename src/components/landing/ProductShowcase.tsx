
const products = [
    {
        id: 1,
        name: "Model X-10",
        series: "Maximum Security Series",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Fg7EWrIkBhdB1B9jFp7_-Yh1cfQLS34rx-H1Q4zujdqC1l2k9Rk603EsuRcFpP4a1EsZyxlImTvnoyArvyqRD1JR11t4LlrVGuNhExrpdPrRZtV_QT832mB5tUePvzQk6qrxlZLsKdKIspR_QTR2vB4GLg18gQ1nFzoXNFOvFeSJwcpAGZekIPnxT3s--7zWszkPXbo7aHwlQ6Gc6TE66rcxWRvd466EboewVt8myOI5DVQ64oFI7sMUjoTNqSuRzaKm89O7QK0",
        alt: "A dark metallic steel door with a vertical handle"
    },
    {
        id: 2,
        name: "Model S-5",
        series: "Stealth Design Series",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK08iC3qM3d9uxgfUOtFm8YPf8sijccESLCkG3s5gd1A8zIpz8RMjL-FMScZR6717WbzwBYhgy5ueNHjtSp_Y_ob1G5qDQs8huqYuIeXXWWjvcTURQoZa2hFoCbalkDibDcNgw_f3tyEjzfcjHdCpca8_Wb5MQK7HXuFmqm_FpFqHcoQHHnBIRIZHi24-hhOWJ5AzN-ihKns7LC4lhDYJmSTDno0MoxuVV7HX_gDBjJrk5nq5bzYY74uUAKRpWcoGwo2eqHAbLpZc",
        alt: "A sleek black steel door with a minimalist design"
    },
    {
        id: 3,
        name: "Model T-8",
        series: "Industrial Fortitude Series",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7HcPmKSOJ9qmRCzCvht8swYvTkZeiqGX_zF8916JmmP6hrPdN-XWUk5Q-Yh74pijLzzhpN2VceGzs1PrxtKnZtXb_nO08H0OqwW2c28QyLMi6g8JiksUgmR2ZVAX8dhWQfANVpzASIM_4Lgmq3TOF0CA47n-XZ205tjoqKo0OszHqSLoVPspq98McQjdkU1dXc4cJQgkzgAEwOVcKIAFG5g_hVYkSL-eZxlJEGguejYuE0F24InAEruJsVXgyrNK2OwD2TnSQph8",
        alt: "A heavy-duty industrial steel door with rivets"
    },
    {
        id: 4,
        name: "Model G-2",
        series: "Grand Glass Series",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsGdHkRoMq3yQdH4c2rHL_Si48ToZafrhNABWz3hUal5Msqj7g28ctOMhx6d0GbZI-Vx1UdHePWJAuZVOjWLPWEJIBaJ7MhFMfN7lHK0vvnvJDoD3KH4UXy5PjGZy7fRXJLLrWPsITwqDAYXxW_XTL9oXS20I_hUxP5Th1JorE4_SOKnL5FboNXwL_kP6kCb-cuwOt8IScDQjbayh84nxVBYT2YY_ayYX5ABXL-7rc4LKwtpAduV6Tc4_oUGOryVZZ3l80sKp6lMk",
        alt: "A modern steel and glass door"
    }
];

export default function ProductShowcase() {
    return (
        <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-steel text-4xl sm:text-5xl font-bold font-display tracking-tight mb-12">Interactive Product Showcase</h2>

                <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 pb-4">
                    <div className="flex items-stretch p-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col gap-4 rounded-xl bg-[#1a1a1a]/50 border border-white/10 shadow-lg min-w-[280px] sm:min-w-[320px] transition-all duration-300 hover:bg-[#222] hover:border-primary/50 group"
                            >
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-t-xl"
                                    style={{ backgroundImage: `url("${product.image}")` }}
                                    aria-label={product.alt}
                                ></div>

                                <div className="flex flex-col flex-1 justify-between p-5 pt-0 gap-4">
                                    <div>
                                        <p className="text-steel text-xl font-bold">{product.name}</p>
                                        <p className="text-steel/60 text-sm font-normal">{product.series}</p>
                                    </div>

                                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-white/5 text-steel border border-white/10 text-sm font-bold tracking-wide group-hover:bg-primary group-hover:text-background-dark group-hover:border-primary transition-all duration-300">
                                        <span className="truncate">View Details</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
