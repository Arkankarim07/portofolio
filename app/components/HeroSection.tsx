import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  RiGitBranchLine,
  RiShareLine,
  RiCameraLine,
  RiArrowRightLine,
} from "react-icons/ri";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      id="home"
    >
      {/* Shadow Effect Overlay */}
      <div className="absolute inset-0 bg-black/30 shadow-[inset_0_0_250px_rgba(0,0,0,0.9)] pointer-events-none z-0"></div>

      {/* Text Background Layer */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-10 select-none overflow-hidden z-0">
        {/* Row 1: Kiri ke Kanan */}
        <div className="flex w-max animate-marquee-right">
          <div className="header-font text-[12vw] font-semibold font-rubik leading-none whitespace-nowrap pr-16">
            BACKEND BACKEND BACKEND{" "}
          </div>
          <div className="header-font text-[12vw] font-semibold font-rubik leading-none whitespace-nowrap pr-16">
            FRONTEND FRONTEND FRONTEND{" "}
          </div>
        </div>
        {/* Row 2: Kanan ke Kiri */}
        <div className="flex w-max animate-marquee-left">
          <div className="header-font text-[12vw] font-semibold font-rubik leading-none whitespace-nowrap pr-16">
            BACKEND BACKEND BACKEND{" "}
          </div>
          <div className="header-font text-[12vw] font-semibold font-rubik leading-none whitespace-nowrap pr-16">
            FRONTEND FRONTEND FRONTEND{" "}
          </div>
        </div>
        {/* Row 3: Kiri ke Kanan */}
        <div className="flex w-max animate-marquee-right">
          <div className="header-font text-[12vw] font-semibold font-rubik leading-none whitespace-nowrap pr-16">
            BACKEND BACKEND BACKEND{" "}
          </div>
          <div className="header-font text-[12vw] font-semibold font-rubik leading-none whitespace-nowrap pr-16">
            FRONTEND FRONTEND FRONTEND{" "}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 py-12">
        {/* LEFT CONTENT (Urutan 1 di Mobile & Desktop) */}
        <div className="lg:col-span-5 space-y-6 font-lexend order-1">
          <div className="space-y-2">
            <h2 className="text-[#E5F581] font-bold tracking-widest text-xl">
              HELLO I&apos;M
            </h2>
            <h1 className="header-font font-extrabold text-5xl md:text-7xl leading-tight text-white">
              MUHAMMAD
              <br />
              ARKAN
              <br />
              KARIM
            </h1>
          </div>
          <p className="text-2xl font-bold text-white">An IT Enthusiast</p>

          <div className="flex gap-4">
            {[
              {
                icon: <FaGithub size={22} />,
                label: "GitHub",
                href: "https://github.com/Arkankarim07",
              },
              {
                icon: <FaLinkedin size={22} />,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/muhammad-arkan-karim-647b72364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                icon: <FaInstagram size={22} />,
                label: "Instagram",
                href: "https://www.instagram.com/rkannno_?igsh=MXo4MmdyYndwbmhn",
              },
            ].map((social, index) => (
              <a
                key={index}
                className="w-12 h-12 flex bg-[#E5F581] text-black items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                href={social.href}
                target="_blank"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT CTA / LOOK PROJECT (Urutan 2 di Mobile, Urutan 3 di Desktop) */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end order-2 lg:order-3">
          <a
            className="group flex bg-[#E5F581] text-black font-rubik items-center gap-4 px-8 py-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all w-full lg:w-auto justify-center"
            href="#projects"
          >
            <span className="header-font text-lg font-bold">LOOK PROJECT</span>
            <RiArrowRightLine
              size={30}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
        </div>

        {/* CENTER CHARACTER / FOTO (Urutan 3 di Mobile, Urutan 2 di Desktop) */}
        <div className="lg:col-span-4 flex justify-center relative group order-3 lg:order-2">
          <div className="relative w-full aspect-square max-w-md">
            <Image
              alt="Hero Image"
              src="/tes.jpeg"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain filter md:grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="bg-[#E5F581] font-rubik absolute -bottom-4 -right-4 bg-primary text-black px-6 py-2 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] header-font text-sm rotate-3 group-hover:rotate-0 transition-all">
              AVAILABLE FOR WORK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
