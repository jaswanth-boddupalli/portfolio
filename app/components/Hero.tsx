"use client";

import React from "react";
import Image from "next/image";
import { Download, ArrowRight, ExternalLink, Award, Sparkles } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function Hero() {
  const scholarlyBadges = [
    { name: "Google Scholar", url: PROFILE_DATA.links.scholar, color: "hover:border-blue-500/60 hover:text-blue-400" },
    { name: "ResearchGate", url: PROFILE_DATA.links.researchgate, color: "hover:border-teal-500/60 hover:text-teal-400" },
    { name: "Frontiers Loop", url: PROFILE_DATA.links.frontiers, color: "hover:border-red-500/60 hover:text-red-400" },
    { name: "Scilit", url: PROFILE_DATA.links.scilit, color: "hover:border-emerald-500/60 hover:text-emerald-400" },
    { name: "HAL Science", url: PROFILE_DATA.links.hal, color: "hover:border-indigo-500/60 hover:text-indigo-400" },
    { name: "Medium", url: PROFILE_DATA.links.medium, color: "hover:border-zinc-400/60 hover:text-zinc-200" },
    { name: "LinkedIn", url: PROFILE_DATA.links.linkedin, color: "hover:border-sky-500/60 hover:text-sky-400" },
  ];

  const highlights = [
    { label: "Institutional Affiliation", val: "IISc Bengaluru", sub: "OMI Lab, Dept. of IAP" },
    { label: "Doctoral Dissertation", val: "Ph.D. Conferred 2026", sub: "Biotechnology & Metabolomics" },
    { label: "Academic Honor", val: "University Gold Medalist", sub: "1st Rank M.Sc. Biotechnology" },
    { label: "Translational Pipeline", val: "Bench to In Silico", sub: "Wet-Lab + Python + AutoDock" },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Hero Header Banner (if available) */}
        <div className="relative w-full h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl mb-10 group">
          <Image
            src="/images/cover_banner.png"
            alt="Dr. Jaswanth Boddupalli Research Banner"
            fill
            priority
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Active Postdoctoral Research Fellow
            </span>
          </div>
        </div>

        {/* Profile Avatar Overlapping Banner */}
        <div className="relative -mt-20 sm:-mt-24 mb-6 flex justify-center z-10">
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-sky-500 shadow-2xl shadow-emerald-950/80">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900">
              <Image
                src="/images/profile_photo.png"
                alt="Dr. Jaswanth Boddupalli, Ph.D."
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <div
              className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-lg"
              title="Active Postdoctoral Fellow @ IISc"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Hero Main Copy */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Institutional & Honor Credential Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6">
            <a
              href={PROFILE_DATA.affiliation.directoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-teal-500/30 text-teal-300 hover:border-teal-400 hover:bg-slate-850 transition-all shadow-sm"
            >
              <span>🏛️ IISc Bengaluru · OMI Lab</span>
              <ExternalLink className="w-3 h-3 text-teal-400/80" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-blue-500/30 text-blue-300 shadow-sm">
              🎓 Ph.D. Biotechnology (2026)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-amber-500/30 text-amber-300 shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              🥇 University Gold Medalist (1st Rank)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            {PROFILE_DATA.name}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-emerald-400 mb-3 max-w-3xl mx-auto">
            {PROFILE_DATA.headline}
          </p>
          <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {PROFILE_DATA.subheadline}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Research Pipeline</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-slate-900 text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download Academic CV</span>
            </a>
            <a
              href={PROFILE_DATA.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-slate-900/70 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white transition-all"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Scholarly Indexing & Backlinks Bar */}
          <div className="pt-6 border-t border-slate-800/80">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3">
              Indexed Across Verified Scholarly Registries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {scholarlyBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-400 border border-slate-800 transition-all ${badge.color}`}
                >
                  {badge.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Highlights 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all"
            >
              <span className="text-[11px] font-medium text-slate-400 block mb-1 uppercase tracking-wider">
                {item.label}
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-100 block leading-tight mb-1">
                {item.val}
              </span>
              <span className="text-xs text-slate-400 block">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
