import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* GRID SCAFFOLD */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-[1280px] h-full border-l border-white/10 border-r border-white/10 relative">
          <div className="absolute top-[80px] w-full h-px bg-white/10" />
          <div className="absolute top-[600px] w-full h-px bg-white/10" />
          <div className="absolute bottom-[300px] w-full h-px bg-white/10" />
        </div>
      </div>

      {/* LIGHTING */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[80vw] h-[80vh] top-[-20vh] left-1/2 -translate-x-1/2 
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)]" />

        <div className="absolute w-[30vw] h-screen left-[20%] top-[-10vh]
          bg-[linear-gradient(160deg,rgba(139,92,246,0.08),transparent)]
          rotate-[-15deg] blur-[40px]" />

        <div className="absolute w-[30vw] h-screen right-[20%] top-[-10vh]
          bg-[linear-gradient(200deg,rgba(139,92,246,0.08),transparent)]
          rotate-[15deg] blur-[40px]" />
      </div>

      {/* CONTENT */}
      <main className="relative z-10 max-w-[1280px] mx-auto px-10">
        <Navbar />
        <Hero />
        <Services />
        <Carousel />
        <CTA />
      </main>

      <Footer />
    </>
  );
}