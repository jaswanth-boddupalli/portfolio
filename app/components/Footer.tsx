"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Microscope, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Microscope className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-slate-200 block">
                {PROFILE_DATA.name}
              </span>
              <span className="text-[11px] text-slate-500 block">
                {PROFILE_DATA.affiliation.institution}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <Link href="#pipeline" className="hover:text-emerald-400 transition-colors">
              Research Pipeline
            </Link>
            <Link href="#publications" className="hover:text-emerald-400 transition-colors">
              Publications
            </Link>
            <Link href="#stack" className="hover:text-emerald-400 transition-colors">
              Technical Stack
            </Link>
            <Link href="#credentials" className="hover:text-emerald-400 transition-colors">
              Credentials
            </Link>
            <Link href="#gallery" className="hover:text-emerald-400 transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            © 2026 Dr. Jaswanth Boddupalli. All rights reserved. Peer-reviewed research and monographs indexed on Google Scholar & Scilit.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_DATA.affiliation.directoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <span>IISc OMI Directory</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span>•</span>
            <a
              href={PROFILE_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
