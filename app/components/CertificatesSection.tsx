"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

const certificates = [
  {
    image: "https://picsum.photos/seed/1/400/300",
    category: "INTERNSHIP",
    title: "MOBILE APP DEV\nCERTIFICATION",
    tag: "Verified",
    number: "01",
  },
  {
    image: "https://picsum.photos/seed/2/400/300",
    category: "GOOGLE",
    title: "DATA ANALYTICS\nPROFESSIONAL",
    tag: "Certified",
    number: "02",
  },
  {
    image: "https://picsum.photos/seed/3/400/300",
    category: "AWS",
    title: "CLOUD PRACTITIONER\nCORE KNOWLEDGE",
    tag: "Amazon",
    number: "03",
  },
  {
    image: "https://picsum.photos/seed/4/400/300",
    category: "META",
    title: "FRONTEND DEV\nPROFESSIONAL",
    tag: "Verified",
    number: "04",
  },
  {
    image: "https://picsum.photos/seed/5/400/300",
    category: "MICROSOFT",
    title: "AZURE\nFUNDAMENTALS",
    tag: "Certified",
    number: "05",
  },
];

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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
      gsap.to(card, {
        x: isMobile ? 0 : distance * 280,
        y: isMobile ? distance * 40 : Math.abs(distance) * 25,
        rotation: isMobile ? 0 : distance * 10,
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

  // UPDATE: Logic Observer untuk mengunci scroll halaman
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

      /** * CRITICAL UPDATE:
       * preventDefault: true akan menghentikan event scroll asli browser
       * saat kursor/jari berada di atas target (trackRef).
       */
      preventDefault: true,
    });

    return () => obs.kill();
  }, [activeIndex, isMobile]); // Ditambahkan activeIndex agar logic limit (0 atau max) terupdate

  return (
    <section
      ref={sectionRef}
      className="relative py-24 min-h-screen overflow-hidden bg-[#1a2408] flex flex-col justify-center"
    >
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="header-font font-rubik uppercase italic"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "#fff",
              lineHeight: 0.9,
            }}
          >
            Certificates{" "}
            <span className="block" style={{ color: "#D4EF7D" }}>
              Gallery
            </span>
          </h2>
          <p className="text-[#D4EF7D]/50 text-[10px] tracking-[0.4em] uppercase mt-4">
            Drag or Scroll to Explore
          </p>
        </div>

        {/* UPDATE PADA TRACK:
            Ditambahkan 'touch-none' untuk mematikan gestur scroll default browser di area ini.
        */}
        <div
          ref={trackRef}
          className="relative h-[500px] flex justify-center items-center touch-none cursor-grab active:cursor-grabbing mx-auto w-full max-w-[1000px]"
          style={{ touchAction: "none" }}
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="absolute w-[280px] md:w-[320px]"
              style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
              onClick={() => !animating.current && setActiveIndex(i)}
            >
              <div className="inner-card relative group">
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 -z-10" />
                <div className="bg-[#2C3515] border-2 border-black overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] relative bg-black">
                    <img
                      src={cert.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 right-4 text-5xl font-black text-[#D4EF7D]/20 italic">
                      {cert.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[#D4EF7D] text-[10px] font-bold tracking-widest uppercase italic">
                      {cert.category}
                    </span>
                    <h3 className="text-white text-lg font-bold leading-tight mt-1 mb-4 uppercase">
                      {cert.title}
                    </h3>
                    <div className="flex justify-between border-t border-white/10 pt-4 text-[9px] font-bold text-[#D4EF7D]/40 uppercase italic tracking-widest">
                      Verified Record 2026
                      <span className="text-white/20">Swipe to Slide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {certificates.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-10 bg-[#D4EF7D]" : "w-2 bg-white/10"}`}
            />
          ))}
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-8 mt-8 pt-6"
        style={{ borderTop: "1px solid rgba(212,239,125,0.1)" }}
      >
        {[
          { num: "3+", label: "Certificates" },
          { num: "2024", label: "Latest Year" },
          { num: "100%", label: "Verified" },
        ].map((item, i, arr) => (
          <div key={i} className="flex items-center gap-8">
            <div className="text-center">
              <div
                className="header-font font-rubik"
                style={{ fontSize: 36, color: "#D4EF7D", lineHeight: 1 }}
              >
                {item.num}
              </div>
              <div
                className="uppercase mt-1"
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
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
                  height: 32,
                  background: "rgba(212,239,125,0.15)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
