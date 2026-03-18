export default function Hero() {
  return (
    <section className="py-24 text-center fade-up">
      <div className="mb-8 flex items-center justify-center">
  <div className="
    inline-flex items-center gap-3
    bg-[rgba(20,20,22,0.8)]
    backdrop-blur-[12px]
    border border-white/15
    rounded-full
    px-4 py-[6px]
    shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]
  ">

    {/* 🔥 AVATAR STACK */}
    <div className="flex items-center">
      <div className="w-6 h-6 rounded-full border-2 border-[#141416] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80')",
        }}
      />

      <div className="w-6 h-6 rounded-full border-2 border-[#141416] -ml-2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80')",
        }}
      />

      <div className="w-6 h-6 rounded-full border-2 border-[#141416] -ml-2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80')",
        }}
      />
    </div>

    {/* TEXT */}
    <span className="text-xs text-gray-400">
      Join <span className="text-white font-medium">500+</span> Active Investors
    </span>
  </div>
</div>

      <h1 className="text-[clamp(40px,6vw,72px)] leading-tight">
        <span className="block font-bold">
          Connecting Ambitious Investors.
        </span>
        <span className="block serif italic bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Scalable Franchise Opportunities.
        </span>
      </h1>

      <p className="mt-6 max-w-lg mx-auto text-[var(--color-secondary)]">
        iFranchise turns scattered capital into focused execution.
      </p>

      <div className="mt-10 flex justify-center">
        <div className="flex rounded-full border border-white/10 bg-white/5 backdrop-blur p-2">
          <button className="px-6 py-3  text-sm">
            Franchise Your Business
          </button>

          <button className="px-6 py-3 bg-white cursor-pointer text-black rounded-full font-semibold">
            Explore →
          </button>
        </div>
      </div>
    </section>
  );
}