"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Cpu,
  ExternalLink,
  Radio,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  FileCode2,
  Atom,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function ActiveResearchSection() {
  const [twinActiveTab, setTwinActiveTab] = useState<"overview" | "reflectance" | "schematic">("overview");

  return (
    <section id="active-rd" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900 relative overflow-hidden">
      {/* Background Corporate Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-teal-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 mb-4 shadow-sm shadow-emerald-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>CURRENT ENGINEERING & LIVING LAB PLATFORMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            AI Digital Twins & Hyperspectral Plant Biosensing
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Active deep-tech architectures bridging physical canopy radiative transfer (<span className="text-emerald-400 font-medium">PROSAIL</span>), chemometric machine learning inversion (<span className="text-teal-400 font-medium">PLS / XGBoost</span>), and cheminformatic molecular toxicology (<span className="text-indigo-400 font-medium">RDKit & Tox21</span>) for real-time ecotoxicological forecasting.
          </p>
        </div>

        {/* 2-Column Corporate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ========================================================= */}
          {/* CARD 1: LIVING LAB DIGITAL TWIN (7 COLS ON DESKTOP)       */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-teal-500/40 transition-all duration-300 shadow-2xl shadow-black/60 p-6 sm:p-8 backdrop-blur-xl relative group">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-teal-500/10 via-indigo-500/5 to-transparent rounded-tr-3xl pointer-events-none" />

            <div>
              {/* Header Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    FLAGSHIP DIGITAL TWIN
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-slate-300 flex items-center gap-1.5">
                    <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                    MQTT :1883 Telemetry
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 shadow-sm">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Confidential R&D · Patent & Paper Pending</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                Living Lab Digital Twin: Biosensing & Plant Ecotoxicology
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                An industrial-grade cyber-physical system transforming living vegetation into real-time bio-indicators. Simulates 601 hyperspectral optical channels (400–1000 nm), inverts noisy canopy reflectance to physiological traits, and scores contaminant pathway risk via Tox21 neural surrogates.
              </p>

              {/* Confidentiality & IP Notice Banner */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5 mb-6">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-300">Confidentiality & IP Notice:</strong> Currently under active translational development and provisional patent filing. Core repository, machine learning model weights, and calibration matrices are maintained in a <strong>private repository</strong> pending formal patent disclosure and manuscript release. Live sandbox access and technical whitepaper available on request under NDA.
                </p>
              </div>

              {/* Interactive Dashboard Asset Viewer */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 mb-6 overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3 px-1">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                    <Activity className="w-3.5 h-3.5 text-teal-400" />
                    <span>Real-Time Telemetry Views:</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setTwinActiveTab("overview")}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
                        twinActiveTab === "overview"
                          ? "bg-teal-600 text-white shadow"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Hazard Telemetry
                    </button>
                    <button
                      type="button"
                      onClick={() => setTwinActiveTab("reflectance")}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
                        twinActiveTab === "reflectance"
                          ? "bg-teal-600 text-white shadow"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Hyperspectral Inversion
                    </button>
                    <button
                      type="button"
                      onClick={() => setTwinActiveTab("schematic")}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
                        twinActiveTab === "schematic"
                          ? "bg-teal-600 text-white shadow"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      System Architecture
                    </button>
                  </div>
                </div>

                {/* Display Area */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/60 flex items-center justify-center">
                  {twinActiveTab === "overview" && (
                    <Image
                      src="/images/digital_twin/dashboard_overview.png"
                      alt="Real-Time Hazard Alert & Physiological Trait Telemetry"
                      fill
                      className="object-contain p-1"
                    />
                  )}
                  {twinActiveTab === "reflectance" && (
                    <Image
                      src="/images/digital_twin/dashboard_reflectance.png"
                      alt="In-Situ Canopy Spectral Reflectance (400–1000 nm) & Molecular Profile"
                      fill
                      className="object-contain p-1"
                    />
                  )}
                  {twinActiveTab === "schematic" && (
                    <Image
                      src="/images/digital_twin/pipeline_schematic.png"
                      alt="Living Lab Multi-Omics Pipeline Schematic"
                      fill
                      className="object-contain p-1"
                    />
                  )}
                </div>
              </div>

              {/* 4 Architectural Layers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300 mb-1">
                    <Atom className="w-3.5 h-3.5" />
                    <span>1. PROSAIL Optical Forward Model</span>
                  </div>
                  <p className="text-[11.5px] text-slate-300 leading-relaxed">
                    Generates 601 canopy reflectance bands across visible to NIR regimes under variable chlorophyll (C<sub>ab</sub>), water (C<sub>w</sub>), and structural LAI.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 mb-1">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>2. Chemometric PLS Inversion</span>
                  </div>
                  <p className="text-[11.5px] text-slate-300 leading-relaxed">
                    Inverts noisy 400–1000 nm signals back into real physiological traits, detecting chlorosis, cellular desiccation, and biomass loss in real time.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-1">
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>3. RDKit & Tox21 AhR Classifier</span>
                  </div>
                  <p className="text-[11.5px] text-slate-300 leading-relaxed">
                    Encodes chemical SMILES into 1,024-bit Morgan circular fingerprints to classify Aryl Hydrocarbon Receptor pathway activation probability.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>4. EPA ECOTOX Risk Benchmarking</span>
                  </div>
                  <p className="text-[11.5px] text-slate-300 leading-relaxed">
                    Fuses physical biosensor stress with 96-hr LC<sub>50</sub> thresholds (<em>Pimephales promelas</em>, <em>Daphnia magna</em>) for automated environmental warnings.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills & Bottom CTA */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["PROSAIL 2.0", "RDKit", "PLSRegression", "MQTT Broker", "Streamlit", "Tox21", "EPA ECOTOX"].map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 py-0.5 rounded-md text-[10.5px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-slate-400 italic hidden sm:inline">
                  Private Repository (Under IP Embargo)
                </span>
                <a
                  href={`mailto:${PROFILE_DATA.email}?subject=Confidential%20Inquiry:%20Living%20Lab%20Digital%20Twin&body=Dear%20Dr.%20Jaswanth,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20Living%20Lab%20Digital%20Twin%20platform%20and%20would%20like%20to%20request%20access%20to%20the%20technical%20whitepaper%20or%20demonstration%20under%20appropriate%20confidentiality/NDA.`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition shadow-lg shadow-amber-950/40"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request NDA Access / Demo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 2: PLANT BIOSENSING & OPTICAL RETRIEVAL (5 COLS)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 shadow-2xl shadow-black/60 p-6 sm:p-8 backdrop-blur-xl relative group">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/10 via-teal-500/5 to-transparent rounded-tr-3xl pointer-events-none" />

            <div>
              {/* Header Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    OPTICAL BIOSENSING CORE
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-slate-300">
                    Non-Destructive Sensing
                  </span>
                </div>
                <Link
                  href="https://github.com/jaswanth-boddupalli/Biosensing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/90 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700/80 transition shadow-sm"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </Link>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Plant Biosensing & Optical Phenotyping Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Computational proof-of-concept for non-destructive plant physiological trait retrieval from canopy reflectance, designed for autonomous controlled-environment agriculture and precision phenotyping.
              </p>

              {/* Pipeline Highlights List */}
              <div className="space-y-3.5 bg-slate-950/80 rounded-2xl border border-slate-800/80 p-5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Computational Methodologies</span>
                </h4>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Latin Hypercube Sampling (LHS)</strong>
                      <span>Generates multidimensional training datasets spanning non-linear canopy parameter distributions.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Synthetic Sensor Noise Injection</strong>
                      <span>Models atmospheric interference, instrument drift, and leaf surface roughness.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Machine Learning Inversion (XGBoost & RF)</strong>
                      <span>Extracts C<sub>ab</sub>, equivalent water thickness (C<sub>w</sub>), and structural LAI with minimal residual error (R&sup2; &gt; 0.90).</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">High-Throughput CEA Automation</strong>
                      <span>Readily integrates into closed-loop NFT hydroponics and automated indoor growing chambers.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantified Outcome Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-slate-900 border border-emerald-500/30 mb-6">
                <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Targeted Application Moat</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Eliminates destructive leaf clipping and extraction chemicals by providing continuous, non-invasive metabolic and hydration health scores.
                </p>
              </div>
            </div>

            {/* Tech Stack Pills & Bottom CTA */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["PROSAIL", "Latin Hypercube", "XGBoost", "Random Forest", "Scikit-Learn", "Jupyter"].map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 py-0.5 rounded-md text-[10.5px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <Link
                href="https://github.com/jaswanth-boddupalli/Biosensing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-lg shadow-emerald-950/50"
              >
                <span>View Biosensing Repo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
