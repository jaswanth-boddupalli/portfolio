"use client";

import React from "react";
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function ExperienceSection() {
  const experiences = PROFILE_DATA.experience;

  return (
    <section id="experience" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Professional Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Academic & Research Appointments
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A continuous progression across premier Indian research institutions, doctoral bio-instrumentation stewardship, and postdoctoral investigation at the Indian Institute of Science.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-4 md:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500/50 to-indigo-500/20 hidden md:block" />
          <div className="absolute top-6 bottom-6 left-6 -ml-px w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500/50 to-indigo-500/20 md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-1.5 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-slate-950 border-2 border-emerald-500 shadow-lg shadow-emerald-950/80 flex items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Left / Right Card Content */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/40 transition-all shadow-xl shadow-black/40 hover:-translate-y-0.5 ${
                        isEven ? "md:mr-10" : "md:ml-10"
                      }`}
                    >
                      {/* Top Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>

                        {exp.badge && (
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                              exp.type === "current"
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                : exp.type === "doctoral"
                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                                : "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                            }`}
                          >
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      {/* Role & Institution */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300 font-medium mb-3">
                        <span className="flex items-center gap-1 text-slate-200">
                          <Building2 className="w-3.5 h-3.5 text-teal-400" />
                          {exp.institution}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 italic mb-4">
                        {exp.department}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      {/* Highlights */}
                      <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/60 mb-5 space-y-2">
                        {exp.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Pills & Link */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/60">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded text-[10.5px] font-medium bg-slate-800/80 text-slate-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {exp.url && (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            <span>Official Record</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
