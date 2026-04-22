import { RiUser3Fill } from "react-icons/ri";

export default function AboutSection() {
  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-12">
            <div className="inline-flex items-center gap-4 bg-primary px-6 py-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <RiUser3Fill className="text-black" size={24} />
              <span className="header-font text-black text-xl">ABOUT ME</span>
            </div>
            <div className="space-y-6 max-w-xl">
              <p className="text-xl leading-relaxed text-on-surface">
                I am a student at{" "}
                <span className="text-primary font-bold">Universitas Gunadarma</span>, majoring in
                Informatics. I have a deep interest in web development and software engineering.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                My journey in tech began with a curiosity about how digital systems operate. Today, I
                archive my progress through real-world projects and continuous learning in modern
                frameworks. I focus on creating clean, efficient, and accessible code.
              </p>
            </div>
          </div>

          {/* Right: ID Badge */}
          <div className="flex justify-center lg:justify-end pt-12 lg:pt-0">
            <div className="lanyard-container relative cursor-pointer swing-idle z-10">
              {/* Lanyard Strap */}
              <div className="lanyard-strap absolute top-[-100px] left-1/2 -translate-x-1/2 w-48 h-[120px] border-[6px] border-black rounded-b-full z-0 pointer-events-none"></div>
              <div className="lanyard-strap absolute top-[-120px] left-1/2 -translate-x-1/2 w-2 h-[120px] bg-black z-0"></div>
              {/* Lanyard Clip */}
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-400 border-2 border-black rounded-sm z-20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-black"></div>
              </div>
              {/* ID Badge */}
              <div className="id-badge-wrap relative z-10 mt-6">
                <div className="relative w-72 h-96 bg-secondary border-4 border-black shadow-[12px_12px_0px_0px_rgba(216,244,129,1)] flex flex-col items-center p-6 -rotate-2">
                  <div className="w-12 h-4 bg-black rounded-full mb-8"></div>
                  <div className="w-full aspect-square bg-surface mb-6 border-2 border-black overflow-hidden relative">
                    <img
                      alt=""
                      className="w-full h-full object-cover grayscale"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMXtHg_Lc0NwMZF7EM2f9qHVLdM6a8Rp4mACj_Ul-F3vfu42LqTW6y6mN-8VIom5zP5Ix_wjLx1773d3JYfuQXzwqiXsHGOJ_ZJKLiTtjKhvV-C1HorPG-mwsNiIA6Txr_-Xt0YikKCJ7OHmLqn2qzgRYxRs9SqFpnHUJlhux16uOC1sVr0ywWxY5wHRuiyM-l51HedqJl_E61T-E24QiIlad3h2JhwaqC3FbZXy9ltJuuSd-YydIVn70yIiIZsk9yvU6Mopp8meU"
                    />
                  </div>
                  <div className="text-center w-full">
                    <div className="header-font text-black text-xs mb-1">ARKAN KARIM</div>
                    <div className="text-[10px] text-zinc-500 tracking-widest font-bold uppercase">
                      ID NO: 2024-0802
                    </div>
                    <div className="mt-4 flex justify-center gap-1">
                      <div className="w-1 h-8 bg-black"></div>
                      <div className="w-2 h-8 bg-black"></div>
                      <div className="w-0.5 h-8 bg-black"></div>
                      <div className="w-3 h-8 bg-black"></div>
                      <div className="w-1 h-8 bg-black"></div>
                      <div className="w-1 h-8 bg-black"></div>
                      <div className="w-0.5 h-8 bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
