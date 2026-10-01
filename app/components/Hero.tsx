"use client";

import React from "react";
import Image from "next/image";
import { Download, ArrowRight, ExternalLink, Award, Building2, BookOpen } from "lucide-react";
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
    { label: "Current Appointment", val: "IISc Bengaluru", sub: "OMI Lab · Dept. of IAP" },
    { label: "Doctoral Degree", val: "Ph.D. Biotechnology", sub: "Conferred 2026 · VSU" },
    { label: "Academic Honor", val: "University Gold Medalist", sub: "1st Rank · M.Sc. Cohort" },
    { label: "Translational Focus", val: "Bench to In Silico", sub: "Wet-Lab + Python + AutoDock" },
  ];

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background ambient lighting and scientific grid glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[450px] bg-gradient-to-b from-emerald-500/15 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Profile Avatar Section - Clean, Centered, Authoritative (matching sailikhithk portfolio standard) */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6 group">
            {/* Ambient avatar pulse glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 via-teal-400 to-sky-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-sky-500 shadow-2xl">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900 shadow-inner">
                <Image
                  src="/images/profile_photo.png"
                  alt="Dr. Jaswanth Boddupalli, Ph.D."
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Verified Active Status Pill */}
              <div
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-lg"
                title="Active Postdoctoral Fellow @ IISc Bengaluru"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Institutional & Honor Credential Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-5 max-w-3xl">
            <a
              href={PROFILE_DATA.affiliation.directoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 border border-teal-500/40 text-teal-300 hover:border-teal-400 hover:bg-slate-800 transition-all shadow-sm"
            >
              <Building2 className="w-3.5 h-3.5 text-teal-400" />
              <span>IISc Bengaluru · OMI Lab</span>
              <ExternalLink className="w-3 h-3 text-teal-400/80" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 border border-blue-500/40 text-blue-300 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Ph.D. Conferred 2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 border border-amber-500/40 text-amber-300 shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>University Gold Medalist (1st Rank)</span>
            </span>
          </div>

          {/* Name Heading with Responsive Fluid Sizing */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            {PROFILE_DATA.name}
          </h1>

          {/* Headline */}
          <p className="text-lg sm:text-2xl font-semibold text-emerald-400 mb-3 max-w-3xl">
            {PROFILE_DATA.headline}
          </p>

          {/* Subheadline / Bio Description */}
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {PROFILE_DATA.subheadline}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#pipeline"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Research Pipeline</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-slate-900 text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download Academic CV</span>
            </a>
            <a
              href={PROFILE_DATA.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-slate-900/70 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white transition-all"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Scholarly Indexing & Backlinks Bar */}
          <div className="w-full max-w-4xl pt-6 border-t border-slate-800/80 mb-14">
            <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-500 mb-3">
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

        {/* Quick Highlights 4-Column Grid - Fluid, Expansive, Responsive across all viewports */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all shadow-sm"
            >
              <span className="text-[11px] font-semibold text-emerald-400/90 block mb-1 uppercase tracking-wider">
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
