import { useEffect, useRef, useState } from "react";
import lashaPhoto from "@/assets/lasha-photo.jpg";
const ScrollReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-5 blur-[4px]"} ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <section className="py-32 md:py-40 bg-secondary" id="about">
      <div className="container max-w-5xl">
        <div className="md:grid md:grid-cols-12 md:gap-16">
          {/* Photo placeholder */}
          <ScrollReveal className="md:col-span-5 mb-12 md:mb-0">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={lashaPhoto}
                alt="Lasha Uchaneishvili"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <p className="text-accent-blue text-xs font-black uppercase tracking-[0.2em] mb-6">
                Graphic Designer. Visual Thinker. Problem Solver.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-10">
                About
              </h2>
            </ScrollReveal>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              <ScrollReveal delay={280}>
                <p>
                  Art Director & Graphic Designer based in Tbilisi, Georgia, specializing in branding, visual identity, and art direction. My work lies at the intersection of structure and emotion, rooted in mathematics, symmetry, and the quiet elegance of minimalism.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={340}>
                <p>
                  Design, for me, isn't just about decoration. It's about communication. Solving problems, creating visual harmony, and translating ideas into clear, compelling visuals that speak without noise.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p>
                  Over the past decade, I've worked with clients across industries and continents, from architecture studios and hospitality brands to government institutions and tech startups. Today I serve as Art Director at Normatech and Normativo, two Czech-based companies, leading creative direction across branding, UI/UX, and campaigns. I also co-founded EasyDesign, a creative studio operating between Tbilisi and Prague.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={460}>
                <p>
                  My work has been recognized at Young Lions Georgia (Print Category, 2023 & 2024). I believe in learning constantly, evolving with tools and technologies, including AI, while staying grounded in design fundamentals. My approach is clean, intentional, and collaborative.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={520}>
                <p>
                  Outside of work, I find inspiration in architecture, mathematics, music, and the quiet corners of everyday life. Design is everywhere, in rhythm, balance, light, and shadow.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={580}>
                <p className="text-foreground font-black">
                  Always curious. Always learning.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
