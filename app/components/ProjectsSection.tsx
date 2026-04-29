"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiGithubLine,
  RiGlobalLine,
  RiCloseLine,
  RiZoomInLine,
} from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";

// ─── DATA PROJECTS ───
const projectsData = [
  {
    image: "/assets/project/vclass.jpeg",
    alt: "AppTugas Project",
    title: "AppTugas",
    period: "January 2026",
    tags: ["Flutter", "SQL", "Node.JS", "Python Scraping", "Tailwind"],
    category: "MOBILE",
    desc: "The application was created for task reminders, where the data can come from posts and also automation by scraping to the campus website (Vclass)",
    offset: false,
  },
  {
    image: "/assets/project/quiz.jpeg",
    alt: "QuizzEng Project",
    title: "QuizzEng",
    period: "Juny 2025",
    tags: ["Flutter", "Tailwind", "Next.JS", "SQL"],
    category: "MOBILE",
    desc: "Application for English quizzes, in multiple choice format",
    offset: true,
  },
  {
    image: "/assets/project/humandetect.png",
    alt: "HumanForklift Detech",
    title: "HumanForklift Detech",
    period: "May 2025",
    tags: ["Python", "Roboflow", "Ultralytics", "ESP-32", "React JS", "SQL"],
    category: "COMP SCIENCE",
    desc: "application to detect humans and forklifts using a camera, using a dataset from Roboflow, and if detected will send a signal to the ESP-32",
    offset: false,
  },
  {
    image: "/assets/project/perpuskan.png",
    alt: "Perpuskan",
    title: "Perpuskan ",
    period: "June 2025",
    tags: ["PHP", "Laravel", "SQL", "Tailwind"],
    category: "WEB",
    desc: "Highly interactive agency website with smooth GSAP animations and neubrutalism style.",
    offset: false,
  },
  {
    image: "/assets/project/wh.png",
    alt: "Warehouse Monitoring",
    title: "Warehouse Monitoring ",
    period: "January 2025",
    tags: ["Tailwind", "React JS", "Chart.JS"],
    category: "WEB",
    desc: "application for monitoring stock in the warehouse, I only made the interface display (not using real data), this project was given during an internship at Denso",
    offset: true,
  },
  {
    image: "/assets/project/absenqr.png",
    alt: "AbsenScanQR",
    title: "AbsenScanQR ",
    period: "January 2025",
    tags: ["Tailwind", "Laravel", "SQL", "InstanScan"],
    category: "WEB",
    desc: "Application for automatic attendance using barcode scanning, barcode scanning is filled with NIs, class ID and department ID, divided into 2 pages, namely for students and teachers, students have their QR code while teachers have their cameras",
    offset: true,
  },
];

const filterButtons = ["MOBILE", "WEB", "COMP SCIENCE"];

// ─── COMPONENT: PROJECT LIGHTBOX (GAYA SERTIFIKAT) ───
function ProjectLightbox({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    ).fromTo(
      panelRef.current,
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)" },
      "-=0.15",
    );

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(panelRef.current, {
      y: 30,
      opacity: 0,
      scale: 0.96,
      duration: 0.25,
      ease: "power2.in",
    }).to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && handleClose()}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(8px)" }}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
      >
        {/* Shadow Effect */}
        <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 -z-10" />

        <div className="bg-white border-[3px] border-black overflow-hidden flex flex-col">
          {/* Header Lightbox */}
          <div className="flex items-center justify-between px-5 py-3 border-b-[3px] border-black bg-[#E5F581]">
            <h3 className="font-black text-black uppercase tracking-tighter text-sm md:text-lg">
              Project Preview: {project.title}
            </h3>
            <button
              onClick={handleClose}
              className="p-1 hover:rotate-90 transition-transform duration-300"
            >
              <RiCloseLine size={28} className="text-black" />
            </button>
          </div>

          {/* Image Container */}
          <div
            className="overflow-auto bg-zinc-100 p-2 flex justify-center items-center"
            style={{ maxHeight: "calc(80vh - 100px)" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full h-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] select-none"
            />
          </div>

          {/* Footer Lightbox */}
          <div className="p-4 md:p-6 bg-white border-t-[3px] border-black flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
                {project.category}
              </span>
              <p className="text-zinc-600 text-xs md:text-sm max-w-2xl">
                {project.desc}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-black text-white font-bold text-xs flex items-center gap-2 border-2 border-black hover:bg-[#4A5043] transition-colors shadow-[3px_3px_0px_0px_rgba(229,245,129,1)]">
                <RiGithubLine size={16} /> CODE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN SECTION COMPONENT ───
export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("MOBILE");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const itemsPerPage = 2; // Jumlah project per halaman
  const projectTitleRef = useRef(null);
  const projectShadowRef = useRef(null);

  // Filter Logic
  const filteredProjects =
    activeFilter === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // GSAP Title Animations
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
    <>
      {/* Lightbox Overlay */}
      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

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

            {/* Filter Buttons */}
            <div className="flex gap-2 md:gap-4 pb-1 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              {filterButtons.map((label) => (
                <button
                  key={label}
                  onClick={() => setActiveFilter(label)}
                  className={`
                    flex-shrink-0 px-4 py-2 md:px-5 md:py-2.5 font-rubik font-black text-[10px] md:text-xs uppercase tracking-widest border-[3px] border-black transition-all duration-200 cursor-pointer select-none relative shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:scale-95
                    ${activeFilter === label ? "bg-[#E5F581] text-black" : "bg-white text-black hover:bg-[#4A5043] hover:text-white"}
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
            {currentProjects.length > 0 ? (
              currentProjects.map((project, i) => (
                <div
                  key={i}
                  className={`
                    group bg-white border-2 text-black border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col transition-all duration-500
                    ${project.offset ? "md:translate-y-12" : ""}
                  `}
                >
                  {/* Image with Click for Lightbox */}
                  <div
                    className="h-48 md:h-64 overflow-hidden border-b-2 border-black bg-zinc-200 relative cursor-zoom-in"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={project.image}
                    />
                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-[#E5F581] p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                        <RiZoomInLine size={24} className="text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-8 space-y-3 md:space-y-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="header-font text-lg md:text-2xl font-rubik font-black leading-tight uppercase">
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
                      {project.tags.map((tag, idx) => (
                        <span
                          key={tag}
                          className={`text-[9px] md:text-[10px] font-black uppercase px-2.5 py-1 md:px-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${idx % 2 === 0 ? "rotate-[1.5deg] bg-[#E5F581]" : "-rotate-[1.5deg] bg-white"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-2.5 md:py-3 bg-[#E5F581] text-black border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold text-xs md:text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                      >
                        <RiZoomInLine size={18} />
                        <span>PREVIEW</span>
                      </button>
                      <a
                        className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-2.5 md:py-3 bg-black text-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold text-xs md:text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                        href="#"
                      >
                        <RiGithubLine size={18} />
                        <span>GITHUB</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center border-4 border-dashed border-black">
                <p className="text-lg md:text-2xl font-black font-rubik uppercase">
                  NO PROJECTS FOUND
                </p>
              </div>
            )}
          </div>

          {/* ── Navigation (Pagination) ── */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center text-black gap-4 md:gap-8 mt-12 md:mt-20 mb-6 md:mb-12">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className={`group flex items-center gap-1 md:gap-3 px-2 md:px-6 py-2.5 md:py-3 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-[#E5F581] disabled:opacity-30 disabled:cursor-not-allowed`}
              >
                <RiArrowLeftSLine
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span className="font-rubik font-bold text-xs md:text-lg tracking-tighter">
                  PREV
                </span>
              </button>

              <div className="px-3 md:px-4 py-2 bg-[#E5F581] border-2 border-black font-bold font-rubik shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase text-xs md:text-md whitespace-nowrap">
                Page {currentPage} of {totalPages}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className={`group flex items-center gap-1 md:gap-3 px-2 md:px-6 py-2.5 md:py-3 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-[#E5F581] disabled:opacity-30 disabled:cursor-not-allowed`}
              >
                <span className="font-rubik font-bold text-xs md:text-lg tracking-tighter">
                  NEXT
                </span>
                <RiArrowRightSLine
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
