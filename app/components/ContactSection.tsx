import { RiMailLine } from "react-icons/ri";

export default function ContactSection() {
  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="container mx-auto px-8 text-center flex flex-col items-center">
        <h2 className="header-font text-5xl md:text-8xl text-white mb-12 flex flex-wrap justify-center gap-4">
          <span>HAVE A</span>
          <span className="text-stroke-outline">PROJECT</span>
          <span>IN MIND?</span>
        </h2>
        <a
          className="inline-flex items-center gap-6 px-12 py-8 bg-primary text-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
          href="mailto:hello@arkan.dev"
        >
          <span className="header-font text-2xl md:text-4xl">LET&apos;S CONNECT</span>
          <RiMailLine size={48} />
        </a>
      </div>
    </section>
  );
}
