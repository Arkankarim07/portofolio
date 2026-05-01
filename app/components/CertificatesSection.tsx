"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { RiZoomInLine } from "react-icons/ri";
import PreviewLightbox from "./PreviewLightbox";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, Observer);

const certificates = [
  {
    image: "/assets/certificate/denso.jpg",
    category: "INTERNSHIP",
    title: "PT DENSO INDONESIA INTERNSHIP",
    tag: "Verified",
    number: "01",
  },
  {
    image: "/assets/certificate/cloubee.jpg",
    category: "AWS",
    title: "AWS - GRAND FINALIST",
    tag: "Certified",
    number: "02",
  },
  {
    image: "/assets/certificate/dart.jpg",
    category: "Dicoding",
    title: "Memulai Pemrograman dengan Dart",
    tag: "Certified",
    number: "03",
  },
  {
    image: "/assets/certificate/dcd_flutter.jpg",
    category: "Dicoding",
    title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    tag: "Certified",
    number: "04",
  },
  {
    image: "/assets/certificate/dcd_ai.jpg",
    category: "Dicoding",
    title: "Belajar Dasar AI",
    tag: "Certified",
    number: "05",
  },
  {
    image: "/assets/certificate/cyber.jpg",
    category: "CISCO - Networking Academy",
    title: "Introduction to Cybersecurity",
    tag: "Certified",
    number: "06",
  },
];

type Certificate = (typeof certificates)[number];

// ─────────────────────────────────────────────
// Main Section
// ─────────────────────────────────────────────
export default function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const animating = useRef(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const animateCards = (index: number) => {
    animating.current = true;
    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card, i) => {
      const distance = i - index;

      if (isMobile) {
        gsap.to(card, {
          x: distance * 6,
          y: distance * 8,
          rotation: distance * 2,
          scale:
            i === index ? 1 : Math.max(0.88 - Math.abs(distance) * 0.04, 0.78),
          opacity: Math.abs(distance) > 2 ? 0 : 1 - Math.abs(distance) * 0.3,
          zIndex: certificates.length - Math.abs(distance),
          duration: 0.45,
          ease: "power2.out",
          overwrite: true,
          onComplete: () => {
            if (i === index) animating.current = false;
          },
        });
      } else {
        gsap.to(card, {
          x: distance * 280,
          y: Math.abs(distance) * 25,
          rotation: distance * 10,
          scale: i === index ? 1 : 0.85,
          opacity: Math.abs(distance) > 2 ? 0 : 1 - Math.abs(distance) * 0.35,
          zIndex: certificates.length - Math.abs(distance),
          duration: 0.5,
          ease: "power2.out",
          overwrite: true,
          onComplete: () => {
            if (i === index) animating.current = false;
          },
        });
      }

      if (!card) return;
      const inner = card.querySelector(".inner-card");
      gsap.to(inner, {
        filter: i === index ? "grayscale(0%)" : "grayscale(100%) blur(2px)",
        duration: 0.4,
      });
    });
  };

  useEffect(() => {
    animateCards(activeIndex);
  }, [activeIndex, isMobile]);

  useEffect(() => {
    if (!trackRef.current) return;

    const gotoNext = () => {
      if (animating.current || activeIndex === certificates.length - 1) return;
      setActiveIndex((prev) => prev + 1);
    };
    const gotoPrev = () => {
      if (animating.current || activeIndex === 0) return;
      setActiveIndex((prev) => prev - 1);
    };

    const obs = Observer.create({
      target: trackRef.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onUp: gotoPrev,
      onDown: gotoNext,
      onLeft: gotoNext,
      onRight: gotoPrev,
      tolerance: 60,
      preventDefault: true,
    });

    return () => obs.kill();
  }, [activeIndex, isMobile]);

  return (
    <>
      {/* ── Lightbox ── */}
      {selectedCert && (
        <PreviewLightbox
          item={selectedCert}
          type="certificate"
          onClose={() => setSelectedCert(null)}
        />
      )}

      <section
        ref={sectionRef}
        className="relative pt-16 pb-6 md:pt-24 min-h-screen overflow-hidden bg-[#1a2408] flex flex-col justify-center"
      >
        <div className="relative container mx-auto px-4 sm:px-6">
          {/* ── Header ── */}
          <div className="text-center mb-10 md:mb-16">
            <h2
              className="header-font font-rubik uppercase italic"
              style={{
                fontSize: "clamp(32px, 8vw, 72px)",
                color: "#fff",
                lineHeight: 0.9,
              }}
            >
              Certificates{" "}
              <span className="block" style={{ color: "#D4EF7D" }}>
                Gallery
              </span>
            </h2>
            <p className="text-[#D4EF7D]/50 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase mt-3 md:mt-4">
              {isMobile
                ? "Swipe to Explore • Tap to View"
                : "Drag or Scroll to Explore • Click to View"}
            </p>
          </div>

          {/* ── Card Track ── */}
          <div
            ref={trackRef}
            className="
              relative flex justify-center items-center
              touch-none cursor-grab active:cursor-grabbing
              mx-auto w-full
              h-[380px] sm:h-[440px] md:h-[520px]
              max-w-[340px] sm:max-w-[420px] md:max-w-[1000px]
            "
            style={{ touchAction: "none" }}
          >
            {certificates.map((cert, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="absolute w-[260px] sm:w-[300px] md:w-[320px]"
                style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
                onClick={() => {
                  if (animating.current) return;
                  if (i !== activeIndex) {
                    setActiveIndex(i);
                  }
                }}
              >
                <div className="inner-card relative group">
                  <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 -z-10" />
                  <div className="bg-[#2C3515] border-2 border-black overflow-hidden shadow-2xl">
                    {/* Image */}
                    <div className="aspect-[4/3] relative bg-black overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 right-3 text-4xl md:text-5xl font-black text-[#D4EF7D]/20 italic pointer-events-none">
                        {cert.number}
                      </span>

                      {/* View overlay — hanya muncul saat card aktif di-hover */}
                      {i === activeIndex && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCert(cert);
                          }}
                          className="
                            absolute inset-0 flex flex-col items-center justify-center gap-2
                            bg-black/0 hover:bg-black/60
                            opacity-0 group-hover:opacity-100
                            transition-all duration-300
                          "
                        >
                          <RiZoomInLine
                            size={32}
                            className="text-white drop-shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                          />
                          <span className="font-mono text-white text-[10px] tracking-[3px] uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            View Full
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5">
                      <span className="text-[#D4EF7D] text-[9px] md:text-[10px] font-bold tracking-widest uppercase italic">
                        {cert.category}
                      </span>
                      <h3 className="text-white text-sm md:text-base font-bold leading-tight mt-1 mb-3 uppercase line-clamp-2">
                        {cert.title}
                      </h3>

                      {/* CTA button — hanya di card aktif */}
                      {i === activeIndex ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCert(cert);
                          }}
                          className="
                            w-full flex items-center justify-center gap-2
                            py-2 mt-1
                            border-2 border-[#D4EF7D]/40
                            text-[#D4EF7D] font-mono font-bold text-[10px] tracking-[3px] uppercase
                            hover:bg-[#D4EF7D] hover:text-[#1a2408] hover:border-[#D4EF7D]
                            transition-all duration-200
                            shadow-[3px_3px_0px_0px_rgba(212,239,125,0.2)]
                            hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
                          "
                        >
                          <RiZoomInLine size={13} />
                          View Certificate
                        </button>
                      ) : (
                        <div className="flex justify-between border-t border-white/10 pt-3 text-[8px] font-bold text-[#D4EF7D]/40 uppercase italic tracking-widest">
                          <span>Verified Record 2026</span>
                          <span className="text-white/20">
                            {isMobile ? "Swipe ›" : "← →"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Dots + Counter ── */}
          <div className="flex flex-col items-center gap-3 mt-6 md:mt-12">
            <div className="flex justify-center gap-2">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => !animating.current && setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-8 bg-[#D4EF7D]" : "w-2 bg-white/10"
                  }`}
                />
              ))}
            </div>
            <p className="text-[#D4EF7D]/30 text-[9px] tracking-[0.3em] uppercase">
              {activeIndex + 1} / {certificates.length}
            </p>
          </div>

          {/* ── Mobile Arrows ── */}
          {isMobile && (
            <div className="flex justify-center gap-4 mt-5">
              <button
                disabled={activeIndex === 0}
                onClick={() =>
                  !animating.current && setActiveIndex((p) => p - 1)
                }
                className="w-10 h-10 flex items-center justify-center border border-[#D4EF7D]/20 text-[#D4EF7D]/50 disabled:opacity-20 active:bg-[#D4EF7D]/10 transition-all rounded-sm"
              >
                ←
              </button>
              <button
                disabled={activeIndex === certificates.length - 1}
                onClick={() =>
                  !animating.current && setActiveIndex((p) => p + 1)
                }
                className="w-10 h-10 flex items-center justify-center border border-[#D4EF7D]/20 text-[#D4EF7D]/50 disabled:opacity-20 active:bg-[#D4EF7D]/10 transition-all rounded-sm"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* ── Stats Footer ── */}
        <div
          className="flex items-center justify-center gap-4 sm:gap-8 mt-8 pt-6 px-4"
          style={{ borderTop: "1px solid rgba(212,239,125,0.1)" }}
        >
          {[
            { num: "6", label: "Certificates" },
            { num: "2025", label: "Latest Year" },
            // { num: "100%", label: "Verified" },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-center gap-4 sm:gap-8">
              <div className="text-center">
                <div
                  className="header-font font-rubik"
                  style={{
                    fontSize: "clamp(24px, 6vw, 36px)",
                    color: "#D4EF7D",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>
                <div
                  className="uppercase mt-1"
                  style={{
                    fontSize: 8,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {item.label}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div
                  style={{
                    width: 1,
                    height: 28,
                    background: "rgba(212,239,125,0.15)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
