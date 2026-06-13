import BottomNav from "@/components/BottomNav";
import Hero from "@/components/sections/Hero";
import Projects from "./Projects/page";
import Experience from "./Experience/page";
import Skills from "./Skills/page";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* No background color here — ParticleBackground in layout.tsx handles it */}
      <Hero />

      {/* Each section: transparent bg so particles show through,
          but needs relative + zIndex to sit above the canvas */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Experience />
        <Projects />
        <Skills />
        <Footer/>
      </div>

      <BottomNav />
    </>
  );
}