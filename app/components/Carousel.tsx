"use client";

import { useState } from "react";

const data = [
  {
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    tags: ["Food & Bev", "High Growth"],
    title: "Artisan Coffee Co.",
    desc: "Turnkey premium cafe model with strong category growth.",
    m1: ["Min. Liquidity", "$250,000"],
    m2: ["Target ROI", "18-24 Mo."],
  },
  {
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    tags: ["Boutique Fitness", "Recurring Rev"],
    title: "Velocity Studios",
    desc: "Tech-enabled group fitness leveraging heart-rate telemetry.",
    m1: ["Min. Liquidity", "$400,000"],
    m2: ["EBITDA Margin", "22% Avg"],
  },
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Services", "Low Overhead"],
    title: "FixIt Hubs",
    desc: "Device repair network with OEM contracts.",
    m1: ["Min. Liquidity", "$100,000"],
    m2: ["Locations", "142 Active"],
  },
];

function Card({ item }: any) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative min-w-[380px] h-[440px] rounded-xl overflow-hidden border border-white/10"
    >
      <img
        src={item.img}
        className={`w-full h-full object-cover transition duration-500 ${
          hover
            ? "scale-105 brightness-90 contrast-110"
            : "grayscale brightness-50 contrast-125"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">

        {/* TAGS */}
        <div className="flex gap-2 mb-3 text-[10px] uppercase">
          {item.tags.map((t: string) => (
            <span
              key={t}
              className="px-2 py-1 bg-white/10 border border-white/10 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-2xl serif italic mb-1">{item.title}</h3>

        <p className="text-sm text-gray-400 mb-6">{item.desc}</p>

        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
          <div>
            <div className="text-xs text-gray-500">{item.m1[0]}</div>
            <div className="font-semibold">{item.m1[1]}</div>
          </div>

          <div>
            <div className="text-xs text-gray-500">{item.m2[0]}</div>
            <div className="font-semibold">{item.m2[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Carousel() {
  return (
    <section className="py-20">
      <div className="flex gap-6 overflow-x-auto no-scrollbar w-screen ml-[calc(-50vw+50%)] px-[calc(50vw-600px)]">
        {data.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </section>
  );
}