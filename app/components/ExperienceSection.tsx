"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiReact,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { RiDatabase2Line, RiJavaLine, RiStackFill } from "react-icons/ri";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";

// Daftarkan plugin
gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { label: "PYTHON", icon: <SiPython size={32} /> },
  { label: "JAVASCRIPT", icon: <SiJavascript size={32} /> },
  { label: "PHP", icon: <SiPhp size={32} /> },
  { label: "JAVA", icon: <RiJavaLine size={32} /> },
  { label: "REACT", icon: <SiReact size={32} /> },
  { label: "SQL", icon: <RiDatabase2Line size={32} /> },
  { label: "DOCKER", icon: <SiDocker size={32} /> },
  { label: "GIT", icon: <SiGit size={32} /> },
];

const experiences = [
  {
    period: "2023 - PRESENT",
    title: "LAB ASSISTANT",
    desc: "Guiding junior students in Computer Science fundamentals and lab procedures at Universitas Gunadarma.",
    dotColor: "bg-[#A3E635]",
  },
  {
    period: "2022 - 2023",
    title: "INTERN DEVELOPER",
    desc: "Developing internal tools and maintaining web modules for local enterprise clients.",
    dotColor: "bg-blue-400",
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "techstack">(
    "experience",
  );
  const sectionRef = useRef(null);
  const projectRef = useRef(null); // Ref untuk section project
  const whiteContainerRef = useRef(null); // Ref kontainer putih
  const blackContainerRef = useRef(null); // Ref kontainer hitam
  const isFirstRender = useRef(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animasi Tab Buttons & Cards (Existing)
      gsap.from(".tab-button", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        clearProps: "all",
      });

      gsap.from(".animate-card", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
        clearProps: "all",
      });

      // 2. Animasi Scroll Project Section
      // Animasi Putih dari Kiri
      gsap.fromTo(
        whiteContainerRef.current,
        { xPercent: -120 },
        {
          xPercent: 0,
          duration: 1.5, // Atur durasi dalam detik (misal: 1.5 detik)
          ease: "power4.out", // Pakai power4 agar terasa lebih smooth/premium
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 85%",
            // once: true membuat animasi hanya jalan sekali sampai di-refresh
            once: true,
          },
        },
      );

      // Animasi Hitam dari Kanan
      gsap.fromTo(
        blackContainerRef.current,
        { xPercent: 120 },
        {
          xPercent: 0,
          duration: 1.5, // Samakan durasi atau bedakan sedikit agar dinamis
          ease: "power4.out",
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 85%",
            once: true, // Hanya sekali eksekusi
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Re-animate content when switching tabs (Existing)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    gsap.fromTo(
      ".tab-content-wrapper",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        clearProps: "all",
      },
    );
  }, [activeTab]);

  return (
    <div ref={sectionRef}>
      <section className="py-12 md:py-24 bg-[#E5F581] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col font-rubik md:flex-row justify-center items-stretch md:items-center gap-4 mb-12 md:mb-16">
            <button
              onClick={() => setActiveTab("experience")}
              className={`tab-button px-6 py-4 font-bold gap-4 text-black flex items-center justify-center text-lg md:text-2xl border-[3px] border-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${
                activeTab === "experience"
                  ? "bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            >
              <span>EXPERIENCE</span>
              <BsFillBarChartFill size={24} className="shrink-0" />
            </button>

            <button
              onClick={() => setActiveTab("techstack")}
              className={`tab-button mt-0 md:mt-12 px-6 py-4 font-bold gap-4 text-black flex items-center justify-center text-lg md:text-2xl border-[3px] border-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${
                activeTab === "techstack"
                  ? "bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            >
              <span>TECH STACK</span>
              <RiStackFill size={24} className="shrink-0" />
            </button>
          </div>

          <div className="max-w-4xl text-black mx-auto tab-content-wrapper">
            {activeTab === "experience" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="animate-card group relative bg-white border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    <div className="inline-block md:absolute -top-4 md:-right-2 mb-4 md:mb-0 px-3 py-1 border-[2px] border-black bg-[#4A5043] font-bold text-xs md:text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:rotate-2 text-white">
                      {exp.period}
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className={`w-4 h-4 mt-1.5 shrink-0 border-2 border-black rounded-full ${exp.dotColor}`}
                      />
                      <div className="space-y-3">
                        <h4 className="text-xl md:text-2xl font-black uppercase leading-tight">
                          {exp.title}
                        </h4>
                        <div className="w-12 h-1.5 bg-black" />
                        <p className="text-sm md:text-base font-medium leading-relaxed opacity-90">
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "techstack" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="animate-card aspect-square bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center p-2 md:p-4 hover:bg-[#A3E635] transition-all group cursor-pointer"
                  >
                    <span className="scale-110 md:scale-150 mb-3 md:mb-4 group-hover:rotate-12 transition-transform">
                      {tech.icon}
                    </span>
                    <div className="text-[10px] md:text-xs font-black tracking-widest uppercase text-center">
                      {tech.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROJECT SECTION DENGAN ANIMASI */}
      <div
        ref={projectRef}
        className="bg-[#E5F581] relative overflow-hidden pt-20"
      >
        {/* Kontainer Putih (Miring) - Masuk dari Kiri */}
        <div
          ref={whiteContainerRef}
          className="bg-white w-[130%] left-[-15%] rotate-[-4deg] flex justify-center items-end relative z-20 pt-16 shadow-lg"
        >
          <h1 className="text-8xl font-bold font-rubik text-black tracking-tighter">
            PROJECT PROJECT
          </h1>
        </div>

        {/* Kontainer Hitam (Lurus/Background) - Masuk dari Kanan */}
        <div
          ref={blackContainerRef}
          className="bg-black w-full  flex justify-end pt-32 relative z-10 -mt-16"
        >
          <div className="flex gap-24 items-center pr-10">
            <FaFolder size={96} className="text-white" />
            <h1 className="text-8xl text-white font-bold font-rubik tracking-tighter">
              PROJECT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
