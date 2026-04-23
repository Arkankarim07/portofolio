import TopNavBar from "./components/TopNavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#1E2E12] selection:bg-primary selection:text-on-primary-container m-0 p-0 overflow-x-hidden min-h-screen">
      <HeroSection />
      <TopNavBar />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
