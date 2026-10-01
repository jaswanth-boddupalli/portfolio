"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Cpu, FlaskConical, Sparkles, Layers } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function PipelineSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stages = PROFILE_DATA.pipelineStages;
  const current = stages[activeStep];

  return (
    <section id="pipeline" className="py-24 bg-slate-950/90 text-slate-100 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Layers className="w-3.5 h-3.5" />
            Core Research Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            The Bench-to-Computation Research Pipeline
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Rather than treating wet-lab biology and dry-lab computation as isolated silos, my research links endangered botanical conservation with spectroscopic metabolomics and in silico drug discovery in a cohesive translational loop.
          </p>
        </div>

        {/* 4-Step Interactive Stepper Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stages.map((stg, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={stg.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left transition-all border relative overflow-hidden ${
                  isActive
                    ? "bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-950/50"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? "bg-emerald-500/20 text-emerald-300" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    STEP {stg.step}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    {stg.category}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-100 mb-0.5">{stg.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-1">{stg.subtitle}</p>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Breakdown Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 mb-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Description & Protocols */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Stage {current.step} Focus
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span className="text-xs text-slate-400">{current.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {current.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Verified Protocols Bullet List */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Experimental Protocols & Methodologies
                </h4>
                <ul className="space-y-2">
                  {current.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: The Dual Moat (Bench + Computation) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Bench Moat Card */}
              <div className="p-5 rounded-xl bg-slate-950 border border-teal-500/20 shadow-sm">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <FlaskConical className="w-4 h-4" />
                  <span>Wet-Lab Experimental Moat</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{current.benchMoat}</p>
              </div>

              {/* Computational Coupling Card */}
              <div className="p-5 rounded-xl bg-slate-950 border border-indigo-500/20 shadow-sm">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Cpu className="w-4 h-4" />
                  <span>Computational & Data Coupling</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{current.computationalCoupling}</p>
              </div>

              {/* Quantified Outcome */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/50 to-teal-950/50 border border-emerald-500/30">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Demonstrated Research Output</span>
                </div>
                <p className="text-sm font-semibold text-emerald-200">{current.metrics}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Pipeline Vector Diagram Visualizer */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 overflow-hidden shadow-xl text-center">
          <div className="flex items-center justify-between mb-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-slate-200">High-Resolution Pipeline Schematic</h4>
              <p className="text-xs text-slate-500">Vector architectural diagram mapping the 4 translational phases</p>
            </div>
            <a
              href="/images/pipeline_diagram.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-400 hover:text-emerald-300 underline font-medium"
            >
              Open Raw Vector SVG
            </a>
          </div>
          <div className="relative w-full aspect-[860/280] rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950">
            <Image
              src="/images/pipeline_diagram.png"
              alt="The Bench-to-Computation Research Pipeline Diagram"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
