"use client";
import { useRef, useState } from "react";
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
    title: "MBG - WEB",
    period: "Feb 2025",
    tags: ["NEXT.JS", "REACT", "NODE.JS"],
    category: "WEB",
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
    category: "WEB",
    desc: "Highly interactive agency website with smooth GSAP animations and neubrutalism style.",
    offset: true,
  },
];

const filterButtons = ["MOBILE", "WEB", "COMP SCIENCE"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("MOBILE");

  const projectTitleRef = useRef(null);
  const projectShadowRef = useRef(null);

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
      className="relative py-16 md:py-24 bg-surface-container-low overflow-hidden"
      id="projects"
    >
      {/* Giant BG text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="header-font text-[40vw] md:text-[30vw] rotate-12">
          PROJECT
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* ── Header ── */}
        <div className="flex flex-col gap-6 mb-10 md:mb-16 md:flex-row md:justify-between md:items-end">
          {/* Title */}
          <div
            className="relative inline-block self-start cursor-pointer"
            onMouseEnter={onProjectHover}
            onMouseLeave={onProjectHoverExit}
          >
            <div
              ref={projectShadowRef}
              className="absolute inset-0 bg-[#4A5043] translate-x-[6px] translate-y-[6px] md:translate-x-3 md:translate-y-3 -rotate-[4deg]"
            />
            <div
              ref={projectTitleRef}
              className="relative bg-[#E5F581] px-5 py-3 md:px-8 md:py-4 border-[3px] border-black -rotate-[4deg]"
            >
              <span className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase select-none font-rubik">
                PROJECTS
              </span>
            </div>
          </div>

          {/* Filter Buttons — horizontal scroll on mobile */}
          <div className="flex gap-2 md:gap-4  pb-1 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {filterButtons.map((label) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={`
                  flex-shrink-0
                  px-4 py-2 md:px-5 md:py-2.5
                  font-rubik font-black text-[10px] md:text-xs
                  uppercase tracking-widest
                  border-[3px] border-black
                  transition-all duration-200
                  cursor-pointer select-none relative
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
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
                  <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-black rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 min-h-[300px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <div
                key={i}
                className={`
                  group bg-white border-2 text-black border-black
                  shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  overflow-hidden flex flex-col transition-all duration-500
                  ${project.offset ? "md:translate-y-12" : ""}
                `}
              >
                {/* Image */}
                <div className="h-48 md:h-64 overflow-hidden border-b-2 border-black bg-zinc-200">
                  <img
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.image}
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-8 space-y-3 md:space-y-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="header-font text-lg md:text-2xl font-rubik font-black leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 gap-1.5 p-1.5 md:p-2 items-center bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <BiCalendar size={14} />
                      <span className="text-[9px] md:text-[10px] font-bold whitespace-nowrap">
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={`
                          text-[9px] md:text-[10px] font-black uppercase
                          px-2.5 py-1 md:px-3 border-2 border-black
                          shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          ${index % 2 === 0 ? "rotate-[1.5deg] bg-[#E5F581]" : "-rotate-[1.5deg] bg-white"}
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2 mt-auto">
                    <a
                      className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-2.5 md:py-3 bg-[#374151] text-white border-[3px] md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-xs md:text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                      href="#"
                    >
                      <RiGithubLine size={18} />
                      <span>GITHUB</span>
                    </a>
                    <a
                      className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-2.5 md:py-3 bg-[#22C55E] text-white border-[3px] md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-xs md:text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                      href="#"
                    >
                      <RiGlobalLine size={18} />
                      <span>LIVE</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center border-4 border-dashed border-black">
              <p className="text-lg md:text-2xl font-black font-rubik">
                NO PROJECTS FOUND IN THIS CATEGORY
              </p>
            </div>
          )}
        </div>

        {/* ── Navigation ── */}
        <div className="flex justify-center items-center text-black gap-4 md:gap-8 mt-12 md:mt-20 mb-6 md:mb-12">
          <button className="group flex items-center gap-1 md:gap-3 px-2 md:px-6 py-2.5 md:py-3 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-[#E5F581]">
            <RiArrowLeftSLine
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-rubik font-bold text-xs md:text-lg tracking-tighter">
              PREV
            </span>
          </button>

          <div className="px-3 md:px-4 py-2 bg-[#E5F581] border-2 border-black font-bold font-rubik shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase text-xs md:text-md whitespace-nowrap">
            Page 1 of 3
          </div>

          <button className="group flex items-center gap-1 md:gap-3 px-2 md:px-6 py-2.5 md:py-3 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-[#E5F581]">
            <span className="font-rubik font-bold text-xs md:text-lg tracking-tighter">
              NEXT
            </span>
            <RiArrowRightSLine
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
