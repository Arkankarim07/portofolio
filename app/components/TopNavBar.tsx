"use client";

import { RiHomeFill, RiUser3Line, RiFolderLine, RiAtLine } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function TopNavBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        if (window.scrollY >= aboutSection.offsetTop - 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-4 px-2 py-2 min-w-max bg-[#243003]/70 backdrop-blur-md rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20 pointer-events-none"
      }`}
    >
      <a
        className="text-black bg-[#d8f481] font-black rounded-full px-3 py-1 hover:scale-105 transition-transform duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center"
        href="#home"
      >
        <RiHomeFill size={22} />
      </a>
      <a
        className="text-[#e2e2e2] px-3 py-1 hover:scale-105 transition-transform duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center"
        href="#about"
      >
        <RiUser3Line size={22} />
      </a>
      <a
        className="text-[#e2e2e2] px-3 py-1 hover:scale-105 transition-transform duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center"
        href="#projects"
      >
        <RiFolderLine size={22} />
      </a>
      <a
        className="text-[#e2e2e2] px-3 py-1 hover:scale-105 transition-transform duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center"
        href="#contact"
      >
        <RiAtLine size={22} />
      </a>
    </nav>
  );
}
