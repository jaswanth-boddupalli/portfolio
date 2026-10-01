"use client";

import React, { useState } from "react";
import { BookOpen, ExternalLink, Copy, Check, FileText } from "lucide-react";
import { PROFILE_DATA, Publication } from "../data/profile";

export default function PublicationsSection() {
  const [filter, setFilter] = useState<"all" | "journal" | "chapter" | "hydroponics">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const publications = PROFILE_DATA.publications;

  const filtered = filter === "all" ? publications : publications.filter((p) => p.type === filter);

  const copyBibtex = (pub: Publication) => {
    const bibtex = `@article{boddupalli${pub.year}${pub.id.replace(/[^a-zA-Z0-9]/g, "")},
  author = {${pub.authors}},
  title = {${pub.title}},
  journal = {${pub.venue}},
  year = {${pub.year}},
  url = {${pub.url}}${pub.doi ? `,\n  doi = {${pub.doi}}` : ""}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Peer-Reviewed Scholarly Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Selected Publications & Monographs
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Original peer-reviewed articles, monographs, and book chapters spanning in vitro micropropagation, secondary metabolite elicitation kinetics, and controlled-environment agricultural modeling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 shrink-0">
            {[
              { id: "all", label: "All Works" },
              { id: "journal", label: "Journal Articles" },
              { id: "chapter", label: "Book Chapters" },
              { id: "hydroponics", label: "Hydroponics & Agritech" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Publication Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((pub) => (
            <div
              key={pub.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-black/30"
            >
              <div>
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-800 text-slate-300">
                      {pub.year}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                        pub.type === "chapter"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : pub.type === "journal"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      }`}
                    >
                      {pub.type === "chapter" ? "Book Chapter" : pub.type === "journal" ? "Journal Article" : "Hydroponics"}
                    </span>
                  </div>

                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>DOI: {pub.doi}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>

                {/* Venue & Authors */}
                <p className="text-xs font-semibold text-slate-400 mb-2 italic">{pub.venue}</p>
                <p className="text-xs text-slate-500 mb-4">{pub.authors}</p>

                {/* Highlight */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60 mb-5 text-xs text-slate-300 leading-relaxed">
                  {pub.highlight}
                </div>
              </div>

              {/* Bottom Actions & Tags */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10.5px] font-medium bg-slate-800/80 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs">
                  <button
                    onClick={() => copyBibtex(pub)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">BibTeX Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy BibTeX</span>
                      </>
                    )}
                  </button>

                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    <span>Read Paper / Chapter</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scholar Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-100">Looking for Complete Citation Metrics & Co-Authors?</h4>
              <p className="text-xs text-slate-400">Indexed profile with h-index, i10-index, and full scholarly bibliography.</p>
            </div>
          </div>
          <a
            href={PROFILE_DATA.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors shrink-0 shadow-md shadow-blue-900/20"
          >
            <span>View Google Scholar Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
