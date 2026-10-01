"use client";

import React, { useState } from "react";
import { Mail, MapPin, Download, Send, CheckCircle2, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      formState.subject || "Research Collaboration Inquiry"
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Academic Outreach & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Connect & Collaborate
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Open to international postdoctoral fellowships, translational biopharma R&D collaborations, and interdisciplinary research initiatives bridging botanical metabolomics with scientific computing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Institutional Coordinates</h3>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                    Current Appointment
                  </span>
                  <p className="text-sm font-bold text-slate-100">
                    Optics & Microfluidics Instrumentation Lab
                  </p>
                  <p className="text-xs text-slate-400">
                    Dept. of Instrumentation & Applied Physics, IISc Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="text-sm font-bold text-emerald-400 hover:underline"
                  >
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Dossier Download Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30">
              <h4 className="font-bold text-base text-white mb-1.5">Academic Curriculum Vitae</h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Download the complete academic dossier including publication history, conference talks, and technical instrumentation competencies.
              </p>
              <a
                href={PROFILE_DATA.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md shadow-emerald-950/40"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Network Links */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 block mb-3 uppercase tracking-wider">
                Scholarly Networking
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href={PROFILE_DATA.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                <a
                  href={PROFILE_DATA.links.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                <a
                  href={PROFILE_DATA.links.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>ResearchGate</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                <a
                  href={PROFILE_DATA.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Send Collaboration Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Messages launch your primary email client pre-filled with your inquiry parameters.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Prof. / Dr. / Researcher"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="researcher@institution.edu"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Postdoctoral Research / Elicitation Collaboration / Seminar"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message Details</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline the scope of your inquiry, research synergy, or proposed timeline..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950/40"
              >
                <Send className="w-4 h-4" />
                <span>Compose & Send Email</span>
              </button>

              {sent && (
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400 pt-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Email client opened with pre-filled inquiry.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
