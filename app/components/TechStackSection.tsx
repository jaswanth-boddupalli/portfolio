"use client";

import React from "react";
import { FlaskConical, Terminal, CheckCircle2 } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function TechStackSection() {
  const { wetLab, computational } = PROFILE_DATA.stack;

  return (
    <section id="stack" className="py-24 bg-slate-950/95 text-slate-100 border-t border-slate-900 relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            Interdisciplinary Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Bridging Wet-Lab Precision with Computational Rigor
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Eliminating the traditional disconnect between the lab bench and computational modeling by combining cell culture techniques and analytical chromatography with automated Python pipelines and structure-based virtual screening.
          </p>
        </div>

        {/* 2-Column Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Experimental Wet-Lab Moat */}
          <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-teal-500/30 shadow-xl shadow-teal-950/20">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Experimental Wet-Lab Moat</h3>
                <p className="text-xs text-teal-400/90 font-medium">Cell Biology · Analytical Phytochemistry · Elicitation</p>
              </div>
            </div>

            <div className="space-y-4">
              {wetLab.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-teal-500/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="font-bold text-sm text-slate-100">{item.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Computational Cheminformatics & Python Stack */}
          <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-indigo-500/30 shadow-xl shadow-indigo-950/20">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Computational & Data Stack</h3>
                <p className="text-xs text-indigo-400/90 font-medium">Molecular Docking · Scientific Python · Cheminformatics</p>
              </div>
            </div>

            <div className="space-y-4">
              {computational.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="font-bold text-sm text-slate-100">{item.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
