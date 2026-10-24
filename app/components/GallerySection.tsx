"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [cardImageIndices, setCardImageIndices] = useState<Record<number, number>>({});
  const [modalSubIndex, setModalSubIndex] = useState<number>(0);

  const gallery = PROFILE_DATA.gallery;

  const handleOpenModal = (idx: number) => {
    setSelectedImage(idx);
    setModalSubIndex(cardImageIndices[idx] || 0);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleCardPrev = (e: React.MouseEvent, cardIdx: number, total: number) => {
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [cardIdx]: ((prev[cardIdx] || 0) - 1 + total) % total,
    }));
  };

  const handleCardNext = (e: React.MouseEvent, cardIdx: number, total: number) => {
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [cardIdx]: ((prev[cardIdx] || 0) + 1) % total,
    }));
  };

  const handleModalPrev = useCallback(() => {
    if (selectedImage === null) return;
    const item = gallery[selectedImage];
    const total = item.images?.length || 1;
    setModalSubIndex((prev) => (prev - 1 + total) % total);
  }, [selectedImage, gallery]);

  const handleModalNext = useCallback(() => {
    if (selectedImage === null) return;
    const item = gallery[selectedImage];
    const total = item.images?.length || 1;
    setModalSubIndex((prev) => (prev + 1) % total);
  }, [selectedImage, gallery]);

  useEffect(() => {
    if (selectedImage === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowLeft") handleModalPrev();
      if (e.key === "ArrowRight") handleModalNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleModalPrev, handleModalNext]);

  return (
    <section id="gallery" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => {
            const hasMultiple = Boolean(item.images && item.images.length > 1);
            const activeSub = hasMultiple ? (cardImageIndices[idx] || 0) : 0;
            const currentImg = hasMultiple && item.images ? item.images[activeSub].src : item.image;
            const currentLabel = hasMultiple && item.images ? item.images[activeSub].label : null;

            return (
              <div
                key={idx}
                onClick={() => handleOpenModal(idx)}
                className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={currentImg}
                    alt={currentLabel || item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Top Left Tag */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-950/85 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {item.tag}
                    </span>
                    {hasMultiple && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                        {activeSub + 1} / {item.images!.length}
                      </span>
                    )}
                  </div>

                  {/* Numbered Subtitle Badge for Multi-Image items */}
                  {currentLabel && (
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-950/90 text-white border border-slate-700/80 shadow-md backdrop-blur-md">
                        {currentLabel}
                      </span>
                    </div>
                  )}

                  {/* Interactive Carousel Nav Arrows for Multi-image */}
                  {hasMultiple && (
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 opacity-80 group-hover:opacity-100 transition-opacity z-20">
                      <button
                        type="button"
                        onClick={(e) => handleCardPrev(e, idx, item.images!.length)}
                        className="p-1.5 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-slate-200 hover:text-white transition shadow border border-slate-700/60"
                        title="Previous photo in series"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleCardNext(e, idx, item.images!.length)}
                        className="p-1.5 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-slate-200 hover:text-white transition shadow border border-slate-700/60"
                        title="Next photo in series"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Enlarge Overlay Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px] pointer-events-none">
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

                  {/* Mini thumbnail indicators for multiple photos */}
                  {hasMultiple && (
                    <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-800/80">
                      {item.images!.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardImageIndices((prev) => ({ ...prev, [idx]: sIdx }));
                          }}
                          className={`h-1.5 rounded-full transition-all ${
                            activeSub === sIdx
                              ? "w-6 bg-emerald-400"
                              : "w-2 bg-slate-700 hover:bg-slate-500"
                          }`}
                          title={sub.label}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const item = gallery[selectedImage];
                const hasMultiple = Boolean(item.images && item.images.length > 1);
                const currentImg = hasMultiple && item.images ? item.images[modalSubIndex].src : item.image;
                const currentLabel = hasMultiple && item.images ? item.images[modalSubIndex].label : null;

                return (
                  <>
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-slate-950 flex items-center justify-center">
                      <Image
                        src={currentImg}
                        alt={currentLabel || item.title}
                        fill
                        className="object-contain"
                      />

                      {/* Lightbox Navigation Buttons */}
                      {hasMultiple && (
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleModalPrev();
                            }}
                            className="pointer-events-auto p-2.5 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition-colors border border-slate-700/80 shadow-xl"
                            title="Previous photo (Left Arrow)"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleModalNext();
                            }}
                            className="pointer-events-auto p-2.5 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition-colors border border-slate-700/80 shadow-xl"
                            title="Next photo (Right Arrow)"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {item.tag}
                        </span>
                        {hasMultiple && currentLabel && (
                          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                            {currentLabel} ({modalSubIndex + 1} of {item.images!.length})
                          </span>
                        )}
                      </div>

                      {/* Dots inside modal */}
                      {hasMultiple && (
                        <div className="flex items-center gap-1.5">
                          {item.images!.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() => setModalSubIndex(sIdx)}
                              className={`h-2 rounded-full transition-all ${
                                modalSubIndex === sIdx
                                  ? "w-7 bg-emerald-400"
                                  : "w-2 bg-slate-700 hover:bg-slate-500"
                              }`}
                              title={sub.label}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 italic mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.caption}
                    </p>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
