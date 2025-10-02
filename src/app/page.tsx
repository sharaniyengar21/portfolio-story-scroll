import Navbar from '@/components/Navbar';
import ProgressIndicator from '@/components/ProgressIndicator';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ProductsSection from '@/sections/ProductsSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <ProgressIndicator />
      <main className="pt-14">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </>
  );
}
