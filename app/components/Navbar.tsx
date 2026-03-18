"use client";

export default function Navbar() {
  return (
    <nav className="h-[80px] flex items-center justify-between text-sm">
      <div className="font-bold">⚡ iFranchise</div>

      <div className="flex gap-8  text-gray-400">
        <a className="cursor-pointer">Opportunities</a>
        <a className="cursor-pointer">Services</a>
        <a className="cursor-pointer">About</a>
      </div>

      <button className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
        Sign In
      </button>
    </nav>
  );
}