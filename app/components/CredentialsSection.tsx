"use client";

import React from "react";
import { Award, GraduationCap, Building2, Dna, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function CredentialsSection() {
  const credentials = PROFILE_DATA.credentials;

  const icons = [Award, GraduationCap, Building2, Dna];

  return (
    <section id="credentials" className="py-24 bg-slate-950/90 text-slate-100 border-t border-slate-900 relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Award className="w-3.5 h-3.5" />
            Scholarly Pedigree
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Academic Distinctions, Honors & Affiliations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A rigorous trajectory spanning university-level academic excellence, competitive doctoral research, hands-on genome editing certification, and postdoctoral bio-instrumentation at the Indian Institute of Science.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${cred.accent} border backdrop-blur-sm transition-all hover:scale-[1.01]`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/70 border border-slate-700/50 text-slate-200">
                    {cred.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{cred.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-3">{cred.institution}</p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{cred.badge}</p>
              </div>
            );
          })}
        </div>

        {/* Institutional Verification Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-slate-100">Official Indian Institute of Science (IISc) Lab Directory</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Verified active listing under the Optics & Microfluidics Instrumentation Laboratory, Department of Instrumentation & Applied Physics.
            </p>
          </div>
          <a
            href={PROFILE_DATA.affiliation.directoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shrink-0 shadow-md shadow-emerald-950/40"
          >
            <span>Verify Official IISc Directory</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
