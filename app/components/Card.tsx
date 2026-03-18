"use client";

import { useState } from "react";

export default function Card({
  icon,
  status,
  title,
  description,
  metaLeft,
  metaRight,
}: any) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative p-6 rounded-xl border border-white/10 bg-[#0a0a0b]
      transition-all duration-300 ${
        hover
          ? "translate-y-[-2px] bg-gradient-to-b from-[#111113] to-[#0a0a0b] shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          : ""
      }`}
    >
      {/* inner highlight */}
      <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/5" />

      {/* header */}
      <div className="flex justify-between items-center mb-4">
        <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
          {icon}
        </div>

        <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
          {status}
        </span>
      </div>

      {/* content */}
      <div>
        <h3 className="text-[15px] font-semibold mb-1">{title}</h3>
        <p className="text-[13px] text-gray-400">{description}</p>
      </div>

      {/* meta */}
      <div className="mt-6 pt-3 border-t border-white/10 flex justify-between text-[11px] text-gray-500">
        <span>{metaLeft}</span>
        <span>{metaRight}</span>
      </div>
    </div>
  );
}