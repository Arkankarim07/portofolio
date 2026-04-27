// components/IntroScreen.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface IntroScreenProps {
  onComplete?: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const introRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Scanline sweep (looping)
      gsap.to(scanlineRef.current, {
        top: "120%",
        duration: 1.2,
        ease: "none",
        repeat: -1,
        repeatDelay: 1.5,
      });

      // Logo pop in
      tl.to(
        logoWrapRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.8)",
        },
        0.3,
      );

      // Tagline fade in
      tl.to(
        taglineRef.current,
        {
          opacity: 0.6,
          duration: 0.4,
          ease: "power2.out",
        },
        0.8,
      );

      // Counter fade in
      tl.to(counterRef.current, { opacity: 1, duration: 0.3 }, 0.8);

      // Count up
      tl.to(
        {},
        {
          duration: 1.6,
          onUpdate: function () {
            const p = Math.round(this.progress() * 100);
            if (counterRef.current) {
              counterRef.current.textContent = String(p).padStart(3, "0");
            }
          },
        },
        0.9,
      );

      // Progress bar
      tl.to(
        barRef.current,
        {
          width: "100%",
          duration: 1.6,
          ease: "power1.inOut",
        },
        0.9,
      );

      // Logo flash
      tl.to(
        logoTextRef.current,
        {
          color: "#ffffff",
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "none",
        },
        2.3,
      );

      // EXIT — curtain wipe up
      tl.to(
        introRef.current,
        {
          yPercent: -100,
          duration: 0.7,
          ease: "power3.inOut",
          onComplete: () => {
            if (introRef.current) introRef.current.style.display = "none";
            onComplete?.();
          },
        },
        2.7,
      );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f1a04] overflow-hidden"
    >
      {/* Scanline */}
      <div
        ref={scanlineRef}
        className="absolute left-0 w-full h-16 pointer-events-none"
        style={{
          top: "-100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(212,239,125,0.04), transparent)",
        }}
      />

      {/* Logo */}
      <div
        ref={logoWrapRef}
        className="relative flex flex-col items-center"
        style={{ opacity: 0, transform: "scale(0.7)" }}
      >
        <div className="relative border-[3px] border-[#D4EF7D] px-8 py-5 sm:px-10 sm:py-6">
          {/* Corner accents */}
          <span className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] border-t-2 border-l-2 border-[#E5F581]" />
          <span className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] border-t-2 border-r-2 border-[#E5F581]" />
          <span className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px] border-b-2 border-l-2 border-[#E5F581]" />
          <span className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] border-b-2 border-r-2 border-[#E5F581]" />

          {/* Shadow block */}
          <div className="absolute inset-0 border-[3px] border-[#4A5043] translate-x-[6px] translate-y-[6px] -z-10" />

          {/* Logo text */}
          <div
            ref={logoTextRef}
            className="font-mono font-black text-[#D4EF7D] select-none"
            style={{
              fontSize: "clamp(40px, 10vw, 64px)",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            {"</>"}
          </div>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mt-6 font-mono text-[10px] sm:text-[11px] tracking-[6px] text-[#D4EF7D] uppercase opacity-0"
        >
          ARKAN KARIM &bull; DEV
        </p>
      </div>

      {/* Counter */}
      <div
        ref={counterRef}
        className="absolute bottom-7 right-8 font-mono text-[11px] tracking-[3px] text-[#D4EF7D]/40 opacity-0"
      >
        000
      </div>

      {/* Progress bar */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-[3px] bg-[#D4EF7D]"
        style={{ width: "0%" }}
      />
    </div>
  );
}
