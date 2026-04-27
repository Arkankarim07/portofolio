import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    label: "GITHUB",
    href: "#!",
    icon: <FaGithub size={25} />,
    bg: "bg-gray-700",
  },
  {
    label: "LINKEDIN",
    href: "#!",
    icon: <FaLinkedin size={25} />,
    bg: "bg-blue-600",
  },
  {
    label: "INSTAGRAM",
    href: "#!",
    icon: <FaInstagram size={25} />,
    bg: "bg-purple-600",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full px-8 md:px-24 py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left - Name */}
        <h1 className="text-2xl self-end font-rubik md:text-3xl font-bold tracking-widest">
          MUHAMMAD ARKAN KARIM
        </h1>

        {/* Right - Navigation */}
        <div className="flex flex-col gap-3 text-sm text-gray-300">
          <h1 className="header-font font-rubik border-b-2 border-white uppercase italic text-[#D4EF7D]">
            Navigation
          </h1>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header-font hover:text-[#D4EF7D] font-rubik italic transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Buttons */}
        <div className="flex gap-2 md:gap-4 w-auto ">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`border flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 ${link.bg} text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-2xl`}
            >
              {link.icon}
              {/* <span>{link.label}</span> */}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">©2026 ARKAN KARIM</p>
      </div>
    </footer>
  );
}
