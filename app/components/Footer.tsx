"use client";

import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/95 border-t border-white/10 py-16">

      <div className="max-w-[1280px] mx-auto px-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <h3 className="text-white font-bold">⚡ iFranchise</h3>
            <p className="text-gray-400 text-sm mt-4 max-w-[240px] leading-relaxed">
              Architecting the future of scalable business ownership through precision data.
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">
              Platform
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition">Opportunity Index</li>
              <li className="hover:text-white transition">Market Analysis</li>
              <li className="hover:text-white transition">Investor Profile</li>
              <li className="hover:text-white transition">Legal Framework</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Press Kit</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition">Terms of Service</li>
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Disclosures</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-gray-500">

          <span>© 2024 iFranchise Systems Inc.</span>

          {/* ICONS */}
          <div className="flex items-center gap-3">
            <a className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaTwitter size={14} />
            </a>

            <a className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaLinkedin size={14} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}