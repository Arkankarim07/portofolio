import TopNavBar from "./components/TopNavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import IntroScreen from "./components/Intro";

export default function Home() {
  return (
    <div className="bg-[#1E2E12] selection:bg-primary selection:text-on-primary-container m-0 p-0 overflow-x-hidden min-h-screen">
      <IntroScreen />
      <TopNavBar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="certificates">
        <CertificatesSection />
      </section>
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
