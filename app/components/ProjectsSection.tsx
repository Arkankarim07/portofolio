const projects = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAO0-emrrCfJOHsBaLY22pCDcxMPV_8aWVuditLvGcWeCAcciRomTOHH7MJK5yVhgm1SysZfhQhWeqpQ0i2kMpkcsrQKZefXq5jKpAcylnePwftxl1vPnZDu9lNm8DzVd0FB2uFWuoPbIKMg_isq6VCM5no8k6qZ-juZrvXmK4FI0zzU0c4VM2SgLxVI-HFBXfKfMQpE2VIq0veRMpeZTe1-qwwqkJ6GeOQs6-In6Ycgfo5yGvtq0mQGAuncboGmm_5sdomreRUAE",
    alt: "MBG Project",
    title: "MBG - WEB DESIGN",
    tags: ["NEXT.JS", "REACT", "NODE.JS"],
    desc: "A comprehensive web-based management system for digital assets and project tracking.",
    offset: false,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3CmJoWmKowfg87_ZCGSdWGV9g3krXUY9K4QMuASNdT5ry7ezU9sx6F8c46wS9GSpLpvVXI7AhxmUURS4rbvralbFIbm1zzwY-Dbd458tjxK723ZS-j3K8nYzynnudhKnyMwh1iSv_tA7HslX71uUN2I6k1eVlj-_AebFUc536wifc4IU4hTHkusoT5qAOAPTVqtVV5JLIPUYXBVUMWEOK_QYxhWcLilkugFINMw4Z9YamRobIWqTLOTx9iNL6dQlsqZt1SFSDh5I",
    alt: "Data Vis Project",
    title: "DATA VIS ENGINE",
    tags: ["PYTHON", "D3.JS", "FLASK"],
    desc: "Advanced data processing and visualization engine for large scale laboratory datasets.",
    offset: true,
  },
];

const filterButtons = ["ALL", "MOBILE", "WEB DESIGN", "COMP SCIENCE"];

export default function ProjectsSection() {
  return (
    <section className="relative py-24 bg-surface-container-low overflow-hidden" id="projects">
      {/* Giant BG text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="header-font text-[30vw] rotate-12">PROJECT</div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="header-font text-5xl md:text-7xl text-white">
              SELECTED<br />
              <span className="text-primary">WORKS</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {filterButtons.map((label, i) => (
              <button
                key={i}
                className={`px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] header-font text-xs cursor-pointer ${
                  i === 0
                    ? "bg-primary text-black"
                    : "bg-surface text-on-surface hover:bg-primary hover:text-black transition-colors"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group bg-surface-container-highest border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col items-stretch ${
                project.offset ? "md:translate-y-12" : ""
              }`}
            >
              <div className="h-64 overflow-hidden border-b-2 border-black">
                <img
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={project.image}
                />
              </div>
              <div className="p-8 space-y-4 flex-1 flex-grow">
                <h3 className="header-font text-2xl text-white">{project.title}</h3>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] header-font bg-surface px-2 py-1 border border-black">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm flex-1">{project.desc}</p>
                <div className="flex gap-4 pt-4 mt-auto">
                  <a
                    className="flex-1 text-center py-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] header-font text-xs hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    href="#!"
                  >
                    GITHUB
                  </a>
                  <a
                    className="flex-1 text-center py-3 bg-primary text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] header-font text-xs hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    href="#!"
                  >
                    LIVE VIEW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
