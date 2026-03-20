import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;