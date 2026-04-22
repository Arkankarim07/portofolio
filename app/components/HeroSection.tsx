import { RiGitBranchLine, RiShareLine, RiCameraLine, RiArrowRightLine } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="home">
      {/* Text Background Layer */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-10 select-none overflow-hidden">
        <div className="header-font text-[12vw] leading-none whitespace-nowrap -ml-20">SOFTWARE DEV SOFTWARE DEV</div>
        <div className="header-font text-[12vw] leading-none whitespace-nowrap ml-20">SOFTWARE DEV SOFTWARE DEV</div>
        <div className="header-font text-[12vw] leading-none whitespace-nowrap -ml-40">SOFTWARE DEV SOFTWARE DEV</div>
      </div>

      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        {/* Left Content */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h2 className="text-primary font-bold tracking-widest text-xl">HELLO I&apos;M</h2>
            <h1 className="header-font text-5xl md:text-7xl leading-tight text-white">
              MUHAMMAD<br />ARKAN<br />KARIM
            </h1>
          </div>
          <p className="text-2xl font-light text-secondary">
            An IT Enthusiast focused on building high-performance digital experiences.
          </p>
          <div className="flex gap-4">
            <a
              className="w-12 h-12 flex items-center justify-center bg-surface-container-highest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              href="#!"
              aria-label="GitHub"
            >
              <RiGitBranchLine size={22} />
            </a>
            <a
              className="w-12 h-12 flex items-center justify-center bg-surface-container-highest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              href="#!"
              aria-label="Share"
            >
              <RiShareLine size={22} />
            </a>
            <a
              className="w-12 h-12 flex items-center justify-center bg-surface-container-highest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              href="#!"
              aria-label="Gallery"
            >
              <RiCameraLine size={22} />
            </a>
          </div>
        </div>

        {/* Center Character (Decorative Image) */}
        <div className="lg:col-span-4 flex justify-center relative">
          <div className="relative w-full aspect-square max-w-md">
            <img
              alt=""
              className="w-full h-full object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP0l65XtACcQVl7DQ2NMpY-GyWfNsXufEslOSr6IidIC_TNF9zAFPbLWeW9LT168wJpMYXZ6H8Bh5pQOagrQ2QXj2oVBM7R_iuK5THyQZrVb683rJo8sDBQpNBtJWAe-vY4uRfRGd2WSBdhIpGT9EbFJRjVpChs0i4pxbY_4lCspXBnFOfLJzuj5_ft8PmMtBeq9YoX9YFkjel6m5neMCHlEO7Uix8WXx2NLe9DhT00JSoWjV_pSlnVe1ueTkhfF9ZVoUBcO_1iJs"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-black px-6 py-2 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] header-font text-sm rotate-3">
              AVAILABLE FOR WORK
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <div className="lg:col-span-3 flex lg:justify-end">
          <a
            className="group flex items-center gap-4 bg-primary text-on-primary-container px-8 py-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            href="#projects"
          >
            <span className="header-font text-lg">LOOK PROJECT</span>
            <RiArrowRightLine size={30} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
