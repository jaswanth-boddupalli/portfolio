import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import PipelineSection from "./components/PipelineSection";
import PublicationsSection from "./components/PublicationsSection";
import TechStackSection from "./components/TechStackSection";
import GallerySection from "./components/GallerySection";
import CredentialsSection from "./components/CredentialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <PipelineSection />
      <PublicationsSection />
      <TechStackSection />
      <GallerySection />
      <CredentialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
