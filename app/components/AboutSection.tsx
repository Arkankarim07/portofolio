"use client";
import { useEffect, useRef } from "react";
import { RiUser3Fill } from "react-icons/ri";
import Lanyard from "./Lanyard/Lanyard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const titleBoxRef = useRef(null);
  const shadowRef = useRef(null); // Ref untuk bayangan
  const textContainerRef = useRef(null);

  // --- GSAP Hover Animations ---
  const onHover = () => {
    // Efek menekan: kotak pindah ke posisi bayangan
    gsap.to(titleBoxRef.current, {
      x: 8,
      y: 8,
      duration: 0.2,
      ease: "power2.out",
    });
    // Bayangan sedikit mengecil/menghilang untuk efek kedalaman
    gsap.to(shadowRef.current, {
      x: 4,
      y: 4,
      opacity: 0.5,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const onHoverExit = () => {
    // Kembali ke posisi semula
    gsap.to(titleBoxRef.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(shadowRef.current, {
      x: 8,
      y: 8,
      opacity: 1,
      duration: 0.3,
      ease: "elastic.out(1, 0.5)",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation (About Me Box)
      gsap.from(".about-box-container", {
        x: -100,
        opacity: 0,
        rotate: -5,
        duration: 1.2,
        ease: "elastic.out(1, 0.7)",
        scrollTrigger: {
          trigger: ".about-box-container",
          start: "top 85%",
        },
      });

      // Text Reveal Animation
      const textElements = textContainerRef.current.children;
      gsap.from(textElements, {
        y: 40,
        opacity: 0,
        skewY: 2,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-0 bg-surface-container-low overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-12 py-24">
            {/* Box Container */}
            <div
              className="about-box-container relative inline-block cursor-pointer"
              onMouseEnter={onHover}
              onMouseLeave={onHoverExit}
            >
              {/* Efek Bayangan */}
              <div
                ref={shadowRef}
                className="absolute inset-0 bg-[#4A5043] translate-x-4 translate-y-4"
              />

              {/* Kotak Konten Utama */}
              <div
                ref={titleBoxRef}
                className="relative bg-[#E5F581] p-8 border-[3px] border-black min-w-[300px] md:min-w-[500px]"
              >
                <div className="flex justify-between items-start mb-6">
                  <h2 className="header-font text-black text-4xl md:text-5xl font-black tracking-tighter uppercase select-none">
                    ABOUT ME
                  </h2>
                  <RiUser3Fill className="text-black" size={40} />
                </div>
                <p className="text-black text-xl font-medium italic select-none">
                  "Full of yapping about myself"
                </p>
              </div>
            </div>

            {/* Deskripsi */}
            <div ref={textContainerRef} className="space-y-6 max-w-xl">
              <div className="overflow-hidden">
                <p className="text-2xl leading-relaxed font-lexend text-on-surface">
                  I am a student at{" "}
                  <span className="text-primary font-bold underline decoration-4 underline-offset-4">
                    Universitas Gunadarma
                  </span>
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="text-xl leading-relaxed font-lexend text-on-surface opacity-90">
                  Majoring in{" "}
                  <span className="font-bold text-black bg-[#E5F581] rotate-2 px-1 inline-block">
                    Informatics
                  </span>
                  . I have a deep interest in web development and software
                  engineering.
                </p>
              </div>

              {/* Animasi tambahan: Link/Button hover effect */}
              <div className="pt-4 overflow-hidden">
                <button className="group relative px-6 py-3 font-bold text-black border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300">
                  Download CV
                  <span className="absolute inset-0 translate-x-1 translate-y-1 border-2 border-black -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Lanyard */}
          <div className="relative flex justify-center lg:justify-end pt-0">
            {/* Anchor bar — tempat lanyard "menggantung" */}
            <div className="absolute top-0 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-0 w-3/4 lg:w-full h-3 bg-[#4A5043] border-2 border-black z-20" />

            {/* Nail kiri */}
            <div className="absolute top-0 left-1/2 lg:left-auto lg:right-[15%] -translate-x-1/2 lg:translate-x-0 w-4 h-4 bg-zinc-400 border-2 border-black rounded-full z-30 -translate-y-1/2" />
            {/* Nail kanan */}
            <div className="absolute top-0 left-1/2 lg:left-auto lg:right-[75%] -translate-x-1/2 lg:translate-x-0 w-4 h-4 bg-zinc-400 border-2 border-black rounded-full z-30 -translate-y-1/2" />

            <div className="w-full h-[500px] lg:h-[600px]">
              <Lanyard
                position={[0, 0, 15]}
                gravity={[0, -40, 0]}
                fov={20}
                transparent={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
