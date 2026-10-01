"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, ExternalLink, Menu, X, Microscope, BookOpen, Layers, Award, Mail, Image as ImageIcon, Briefcase } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Pipeline", href: "#pipeline", icon: Layers },
    { label: "Publications", href: "#publications", icon: BookOpen },
    { label: "Stack", href: "#stack", icon: Microscope },
    { label: "Credentials", href: "#credentials", icon: Award },
    { label: "Gallery", href: "#gallery", icon: ImageIcon },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-600 via-teal-500 to-sky-500 p-0.5 shadow-md shadow-emerald-900/30">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <Microscope className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors block leading-tight">
              Dr. Jaswanth Boddupalli
            </span>
            <span className="text-[11px] font-medium text-emerald-400/90 block leading-tight">
              IISc Bengaluru · OMI Lab
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PROFILE_DATA.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 hover:border-emerald-400/50 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Academic CV</span>
          </a>
          <a
            href={PROFILE_DATA.affiliation.directoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-colors"
          >
            <span>IISc Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-900 transition-colors"
            >
              <item.icon className="w-4 h-4 text-slate-400" />
              <span>{item.label}</span>
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={PROFILE_DATA.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Academic CV (PDF)</span>
            </a>
            <a
              href={PROFILE_DATA.affiliation.directoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>View Official IISc Directory Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
