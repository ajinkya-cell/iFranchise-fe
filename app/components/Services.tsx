import Card from "./Card";

export default function Services() {
  return (
    <section className="py-[100px]">
      <div className="flex justify-between border-b border-white/10 pb-4 mb-10">
        <span className="text-xs uppercase tracking-widest text-gray-500">
          Execution Framework
        </span>
        <span className="text-xs font-mono text-gray-500">
          SYS_OPS // v2.4.1
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card
          icon={<span>⚡</span>}
          status="Active"
          title="Market Analysis"
          description="Scanning territorial viability and density."
          metaLeft="Data points: 4.2M"
          metaRight="Refresh: Live"
        />

        <Card
          icon={<span>👥</span>}
          status="Vetted"
          title="Investor Matching"
          description="Precision alignment of capital profiles."
          metaLeft="Match Rate: 94%"
          metaRight="Avg Time: 12d"
        />

        <Card
          icon={<span>🛡</span>}
          status="Secure"
          title="Legal Infrastructure"
          description="Automated compliance tracking."
          metaLeft="Docs: 12k+"
          metaRight="Status: Nominal"
        />
      </div>
    </section>
  );
}