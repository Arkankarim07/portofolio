import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const certificates = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwKkBNxkBAXmtKvE7j0tlNJ9NMcbfmPf5RQthXSMZtJqTH-Ai6yVimxE5tqc3_etwHAGRaF_C2yjNpQCE9lMw1JXO9WJMXaPJGJYbnAf6Skdqq4TXM0qfyRmL7dkndti9DleG9u_E4A0R6mW20JKpya_G61hbJucmIb75ApIFeC2YK9Fc5fJV9DYwnI4TGdbNazxXz4d97tAIfx0ZobucCylSBX3Qu-JURRXwv05u0naDfveszTAbksZ1NPNMMBrjR6Dt3Np0zAfw",
    category: "INTERNSHIP",
    title: "MOBILE APP DEV\nCERTIFICATION",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOYVkKDViar1wHBDVLtlH_OyIshKGVARdtrILIaEk5j0XcJkVZkIeB7wV1k4nUrIGcXt93tAHUkhqfPIqhMdbIC-PE2F5ZsPDjXVEHVu88NjI5N1GCMFDkSWC4ldAYpgNnZHPHgtV8CVDt4ORXMTOM91pcOuhC820GFucaBvqSyKJoqIqVhDJEStuZQ_Msg3qMbAnUk9wPwELdgPrQIYMWMgjouch4zIrQNmTiVys2A7_GEv_xWu8hRj8j6TRoYBezKrN3dSdWhyc",
    category: "GOOGLE",
    title: "DATA ANALYTICS\nPROFESSIONAL",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa8Lk4K3bq9tLWbrxWRuHRFmwpox7biGWO6NlMZeTyX2WRGrJJtS9m0lYhdcHI_gcYc-gPmCJUbVJARa8h3pVTxKDiOTK7cKgGZE2lnjj1ve54md442hGNLuTXSvmeJoO2NNmOG7YDeevyi-N2z21tfTyJd2r-shiXWvRuaeZnRLZn99sZkkpnNyPYvn3ia36THHZIqhYxg2IVxBZuaMmYqhJpfOVMwHjLM5rtp4XI9JDvmLRwc0X6w4xfGO0qreQov_ChkfCVDU4",
    category: "AWS",
    title: "CLOUD PRACTITIONER\nCORE KNOWLEDGE",
  },
];

export default function CertificatesSection() {
  return (
    <section className="py-24 bg-[#E5F581] mt-24">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="header-font text-3xl md:text-5xl text-black">
            CERTIFICATES &amp;
            <br />
            ACHIEVEMENT
          </h2>
          <div className="flex gap-4">
            <button className="w-16 h-16 flex items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
              <RiArrowLeftSLine size={28} className="text-black" />
            </button>
            <button className="w-16 h-16 flex items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
              <RiArrowRightSLine size={28} className="text-black" />
            </button>
          </div>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="bg-surface border-4 border-black p-4 space-y-4 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="aspect-[4/3] bg-zinc-800 border-2 border-black overflow-hidden relative">
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={cert.image}
                />
              </div>
              <div className="space-y-2">
                <h4 className="header-font text-xs text-primary">
                  {cert.category}
                </h4>
                <p className="header-font text-sm leading-tight text-white whitespace-pre-line">
                  {cert.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
