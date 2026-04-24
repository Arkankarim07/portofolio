"use client";

import {
  RiHomeFill,
  RiUser3Line,
  RiFolderLine,
  RiAtLine,
  RiAwardLine,
  RiBriefcaseLine,
} from "react-icons/ri";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TopNavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // 1. Progress Bar Animation
    // Pastikan menggunakan class yang unik dan z-index super tinggi
    gsap.to(".nav-progress-bar", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body", // Gunakan body sebagai trigger
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // 2. Visibility & Active State Logic
    const sections = [
      "home",
      "about",
      "experience",
      "projects",
      "certificates",
      "contact",
    ];

    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 40%",
        end: "bottom 40%",
        onEnter: () => {
          setActiveSection(id);
          if (id !== "home") setIsVisible(true);
        },
        onEnterBack: () => {
          setActiveSection(id);
          if (id !== "home") setIsVisible(true);
        },
        onLeaveBack: () => {
          if (id === "about") setIsVisible(false);
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const navItems = [
    { id: "home", icon: <RiHomeFill size={20} />, href: "#home" },
    { id: "about", icon: <RiUser3Line size={20} />, href: "#about" },
    {
      id: "experience",
      icon: <RiBriefcaseLine size={20} />,
      href: "#experience",
    },
    { id: "projects", icon: <RiFolderLine size={20} />, href: "#projects" },
    {
      id: "certificates",
      icon: <RiAwardLine size={20} />,
      href: "#certificates",
    },
    { id: "contact", icon: <RiAtLine size={20} />, href: "#contact" },
  ];

  return (
    <>
      {/* PROGRESS BAR: Dibuat lebih tebal dan fixed di paling atas */}
      <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] pointer-events-none bg-black/20">
        <div className="nav-progress-bar h-full bg-[#d8f481] origin-left scale-x-0 shadow-[0_0_10px_#d8f481]" />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-[999] flex items-center justify-center gap-1 px-2 py-1.5 bg-[#243003]/90 backdrop-blur-md rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-20 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`relative px-3 py-2 rounded-full transition-all duration-300 flex items-center justify-center group ${
                isActive
                  ? "text-black bg-[#d8f481] scale-110 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="absolute -bottom-10 bg-black text-[#d8f481] text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase border border-black">
                {item.id}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
