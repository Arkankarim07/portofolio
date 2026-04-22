"use client";
import { useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiReact,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { RiDatabase2Line, RiJavaLine } from "react-icons/ri";

const techStack = [
  { label: "PYTHON",     icon: <SiPython size={36} /> },
  { label: "JAVASCRIPT", icon: <SiJavascript size={36} /> },
  { label: "PHP",        icon: <SiPhp size={36} /> },
  { label: "JAVA",       icon: <RiJavaLine size={36} /> },
  { label: "REACT",      icon: <SiReact size={36} /> },
  { label: "SQL",        icon: <RiDatabase2Line size={36} /> },
  { label: "DOCKER",     icon: <SiDocker size={36} /> },
  { label: "GIT",        icon: <SiGit size={36} /> },
];

const experiences = [
  {
    period: "2023 - PRESENT",
    title: "LAB ASSISTANT",
    desc: "Guiding junior students in Computer Science fundamentals and lab procedures at Universitas Gunadarma.",
    dotColor: "bg-primary",
    textColor: "text-primary-fixed-dim",
  },
  {
    period: "2022 - 2023",
    title: "INTERN DEVELOPER",
    desc: "Developing internal tools and maintaining web modules for local enterprise clients.",
    dotColor: "bg-secondary",
    textColor: "text-secondary-dim",
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "techstack">("experience");

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-8">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            className={`px-8 py-4 header-font text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${
              activeTab === "experience"
                ? "bg-primary text-black"
                : "bg-surface-container-highest text-white hover:bg-primary/20"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            EXPERIENCE
          </button>
          <button
            className={`px-8 py-4 header-font text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${
              activeTab === "techstack"
                ? "bg-primary text-black"
                : "bg-surface-container-highest text-white hover:bg-primary/20"
            }`}
            onClick={() => setActiveTab("techstack")}
          >
            TECH STACK
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Content */}
          {activeTab === "experience" && (
            <div className="space-y-8 transition-all duration-300 opacity-100" id="content-experience">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l-4 border-surface-container-highest py-2">
                  <div className={`absolute -left-[14px] top-0 w-6 h-6 rounded-full ${exp.dotColor} border-4 border-black`}></div>
                  <div className={`text-sm font-bold ${exp.textColor}`}>{exp.period}</div>
                  <h4 className="header-font text-xl text-white mt-1">{exp.title}</h4>
                  <p className="text-on-surface-variant mt-2">{exp.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Content */}
          {activeTab === "techstack" && (
            <div className="transition-all duration-300 opacity-100" id="content-techstack">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-surface-container-highest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center p-4 hover:bg-primary hover:text-black transition-colors group cursor-pointer"
                  >
                    <span className="mb-2">{tech.icon}</span>
                    <div className="header-font text-[10px]">{tech.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
