"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, X, ZoomIn } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const gallery = PROFILE_DATA.gallery;

  return (
    <section id="gallery" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Camera className="w-3.5 h-3.5" />
            Bench Work & Keynotes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Fieldwork, Lab Instrumentation & Conference Keynotes
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Direct visual provenance from the experimental laboratory, scientific conference presentations, and published dose-response assays.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-lg shadow-black/40 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    Enlarge Photo
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-sm text-slate-100 group-hover:text-emerald-400 transition-colors mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-2 italic line-clamp-1">{item.subtitle}</p>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-slate-950">
                <Image
                  src={gallery[selectedImage].image}
                  alt={gallery[selectedImage].title}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
                  {gallery[selectedImage].tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {gallery[selectedImage].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 italic mb-2">
                  {gallery[selectedImage].subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {gallery[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
