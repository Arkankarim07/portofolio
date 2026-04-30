"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { RiCloseLine, RiGithubLine, RiDownloadLine } from "react-icons/ri";

export default function PreviewLightbox({
  item,
  type,
  onClose,
}: {
  item: any;
  type: "project" | "certificate";
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
    
    // Support Escape key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
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
              {type === "project" ? "Project Preview:" : "Certificate:"} {item.title}
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
            className="overflow-auto bg-zinc-100 p-2 flex justify-center items-center relative"
            style={{ maxHeight: "calc(80vh - 100px)" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="max-w-full h-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] select-none"
            />
            {type === "certificate" && item.number && (
               <span
               className="absolute bottom-4 right-6 font-black text-black/10 italic pointer-events-none select-none"
               style={{ fontSize: "clamp(48px, 10vw, 80px)" }}
             >
               {item.number}
             </span>
            )}
          </div>

          {/* Footer Lightbox */}
          <div className="p-4 md:p-6 bg-white border-t-[3px] border-black flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
                {item.category} {type === "certificate" && item.tag && `• ${item.tag}`}
              </span>
              {item.desc && (
                <p className="text-zinc-600 text-xs md:text-sm max-w-2xl mt-1">
                  {item.desc}
                </p>
              )}
            </div>
            <div className="flex gap-3">
              {type === "project" ? (
                <a 
                  href={item.link || "#"}
                  className="px-4 py-2 bg-black text-white font-bold text-xs flex items-center gap-2 border-2 border-black hover:bg-[#4A5043] transition-colors shadow-[3px_3px_0px_0px_rgba(229,245,129,1)]"
                >
                  <RiGithubLine size={16} /> CODE
                </a>
              ) : (
                <a 
                  href={item.image}
                  download
                  className="px-4 py-2 bg-black text-white font-bold text-xs flex items-center gap-2 border-2 border-black hover:bg-[#4A5043] transition-colors shadow-[3px_3px_0px_0px_rgba(229,245,129,1)]"
                >
                  <RiDownloadLine size={16} /> DOWNLOAD
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
