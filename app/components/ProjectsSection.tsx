"use client";
import { useRef, useState } from "react";
import { FaFolder } from "react-icons/fa";
import gsap from "gsap";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiGithubLine,
  RiGlobalLine,
} from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";

const projectsData = [
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    alt: "MBG Project",
    title: "MBG - WEB DESIGN",
    period: "Feb 2025",
    tags: ["NEXT.JS", "REACT", "NODE.JS"],
    category: "WEB DESIGN", // Pastikan kategori sama dengan label filter
    desc: "A comprehensive web-based management system for digital assets and project tracking.",
    offset: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bbda48652ad8?q=80&w=1000",
    alt: "Data Vis Project",
    title: "DATA VIS ENGINE",
    period: "Apr 2025",
    tags: ["PYTHON", "D3.JS", "FLASK"],
    category: "COMP SCIENCE",
    desc: "Advanced data processing and visualization engine for large scale laboratory datasets.",
    offset: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000",
    alt: "Mobile App",
    title: "E-HEALTH MOBILE",
    period: "May 2025",
    tags: ["FLUTTER", "FIREBASE"],
    category: "MOBILE",
    desc: "Mobile application for tracking health metrics and telemedicine consultations.",
    offset: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    alt: "Agency Site",
    title: "AGENCY PORTFOLIO",
    period: "June 2025",
    tags: ["GSAP", "TAILWIND"],
    category: "WEB DESIGN",
    desc: "Highly interactive agency website with smooth GSAP animations and neubrutalism style.",
    offset: true,
  },
];

const filterButtons = ["MOBILE", "WEB DESIGN", "COMP SCIENCE"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("MOBILE");

  const projectTitleRef = useRef(null);
  const projectShadowRef = useRef(null);

  // Logic Filter
  const filteredProjects =
    activeFilter === "ALL"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const onProjectHover = () => {
    gsap.to(projectTitleRef.current, {
      x: 8,
      y: 8,
      duration: 0.2,
      ease: "power2.out",
    });
    gsap.to(projectShadowRef.current, {
      x: 4,
      y: 4,
      opacity: 0.5,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const onProjectHoverExit = () => {
    gsap.to(projectTitleRef.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(projectShadowRef.current, {
      x: 8,
      y: 8,
      opacity: 1,
      duration: 0.3,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      className="relative py-24 bg-surface-container-low overflow-hidden"
      id="projects"
    >
      {/* Giant BG text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="header-font text-[30vw] rotate-12">PROJECT</div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex flex-col font-rubik md:flex-row justify-center items-stretch md:items-center gap-4">
              <div
                className="relative inline-block cursor-pointer"
                onMouseEnter={onProjectHover}
                onMouseLeave={onProjectHoverExit}
              >
                <div
                  ref={projectShadowRef}
                  className="absolute inset-0 bg-[#4A5043] translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 -rotate-6"
                />
                <div
                  ref={projectTitleRef}
                  className="relative bg-[#E5F581] px-8 py-4 border-[3px] border-black -rotate-6"
                >
                  <span className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase select-none">
                    PROJECTS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {filterButtons.map((label) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={`
                  px-5 py-2.5 
                  font-rubik font-black text-[11px] md:text-xs 
                  uppercase tracking-widest
                  border-[3px] border-black 
                  transition-all duration-200
                  cursor-pointer select-none relative
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]
                  active:scale-95
                  ${
                    activeFilter === label
                      ? "bg-[#E5F581] text-black"
                      : "bg-white text-black hover:bg-[#4A5043] hover:text-white"
                  }
                `}
              >
                <span className="relative z-10">{label}</span>
                {activeFilter === label && (
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 border-2 border-black rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[400px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <div
                key={i}
                className={`group bg-white border-2 text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col items-stretch transition-all duration-500 ${
                  project.offset ? "md:translate-y-12" : ""
                }`}
              >
                {/* Image Section */}
                <div className="h-64 overflow-hidden border-b-2 border-black bg-zinc-200">
                  <img
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.image}
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="header-font text-2xl font-rubik leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 gap-2 p-2 items-center bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <BiCalendar size={18} />
                      <span className="text-[10px] font-bold">
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-black uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                        ${index % 2 === 0 ? "rotate-2 bg-[#E5F581]" : "-rotate-2 bg-white"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4 mt-auto">
                    <a
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#374151] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                      href="#"
                    >
                      <RiGithubLine size={24} />
                      <span>GITHUB</span>
                    </a>
                    <a
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#22C55E] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                      href="#"
                    >
                      <RiGlobalLine size={24} />
                      <span>LIVE</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-4 border-dashed border-black">
              <p className="text-2xl font-black font-rubik">
                NO PROJECTS FOUND IN THIS CATEGORY
              </p>
            </div>
          )}
        </div>

        {/* Navigasi */}
        <div className="flex justify-center items-center text-black gap-8 mt-20 mb-12">
          <button className="group flex items-center gap-3 px-6 py-3 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-[#E5F581]">
            <RiArrowLeftSLine
              size={24}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-rubik font-bold text-lg tracking-tighter">
              PREV
            </span>
          </button>

          <div className="flex gap-2">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-10 h-10 flex items-center justify-center border-2 border-black font-bold font-rubik shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${num === 1 ? "bg-[#E5F581]" : "bg-white hover:bg-zinc-100"}`}
              >
                {num}
              </button>
            ))}
          </div>

          <button className="group flex items-center gap-3 px-6 py-3 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-[#E5F581]">
            <span className="font-rubik font-bold text-lg tracking-tighter">
              NEXT
            </span>
            <RiArrowRightSLine
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
