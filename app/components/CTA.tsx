export default function CTA() {
  return (
    <section className="relative py-[180px] text-center overflow-visible">

      {/* 🔥 OUTER GLOW (bleeds outside) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">

        {/* main glow */}
        <div className="w-[900px] h-[600px]
          bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.25)_0%,rgba(139,92,246,0.12)_30%,rgba(139,92,246,0.05)_55%,transparent_75%)]
          blur-[80px] opacity-80"
        />

        {/* secondary softer glow */}
        <div className="absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.15)_0%,transparent_70%)]
          blur-[120px] opacity-60"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-[40px] tracking-[-0.02em] mb-8">
          Start Your Franchise Journey Today.
        </h2>

        <button className="px-8 py-4 cursor-pointer rounded-full
          bg-gradient-to-b from-white to-gray-200 text-black font-semibold
          shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_12px_40px_-8px_rgba(139,92,246,0.6)]
          hover:translate-y-[-1px] transition">
          Initialize Deployment →
        </button>
      </div>
    </section>
  );
}