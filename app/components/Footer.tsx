const socialLinks = [
  { label: "GITHUB",    href: "#!" },
  { label: "LINKEDIN",  href: "#!" },
  { label: "INSTAGRAM", href: "#!" },
];

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1000] border-t-8 border-black w-full">
      <div className="flex flex-col md:flex-row justify-between items-start px-8 md:px-24 py-16 gap-12 w-full">
        {/* Brand */}
        <div className="space-y-6">
          <div className="header-font text-3xl uppercase text-[#d8f481]">
            MUHAMMAD<br />ARKAN KARIM
          </div>
          <div className="text-sm tracking-tighter text-[#e2e2e2] opacity-80">
            © 2026 THE DIGITAL ARCHIVIST. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="px-6 py-3 bg-secondary text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-primary transition-colors font-bold text-sm"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="px-6 py-3 bg-primary text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-sm"
            href="#contact"
          >
            CONTACT
          </a>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#d8f481] uppercase tracking-widest text-xs">NAVIGATION</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-[#e2e2e2] opacity-80 hover:opacity-100 hover:text-[#d8f481] transition-opacity duration-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
