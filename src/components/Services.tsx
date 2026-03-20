import { useEffect, useRef, useState } from "react";

const valueBullets = [
  "Build brands that scale with your business",
  "Create design systems that keep your marketing consistent",
  "Turn complex products into clear, usable interfaces",
  "Support growth with design that performs, not just looks good",
];

const services = [
  {
    title: "Branding & Identity",
    description: "Designing visual systems that define how your brand is seen and remembered.",
    tags: ["Logo Design", "Brand Identity Systems", "Brand Guidelines", "Rebranding"],
  },
  {
    title: "Digital & Marketing Design",
    description: "Building scalable visuals for campaigns and day-to-day marketing.",
    tags: ["Social Media Systems", "Campaign Creatives", "Ad Design", "Landing Pages"],
  },
  {
    title: "UI / Product Design",
    description: "Designing interfaces that make digital products usable and clear.",
    tags: ["Web & App Interfaces", "Dashboard Design", "Wireframing", "Design Systems"],
  },
  {
    title: "Print & Editorial",
    description: "Translating brand into physical formats.",
    tags: ["Menus", "Brochures", "Posters", "Stationery"],
  },
  {
    title: "Art Direction",
    description: "Ensuring everything stays consistent and strategically aligned.",
    tags: ["Visual Direction", "Campaign Concepts", "Brand Supervision"],
  },
];

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

const Services = () => {
  return (
    <section className="py-32 md:py-40" id="services">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16">
            Services
          </h2>
        </ScrollReveal>

        {/* Value bullets */}
        <div className="grid md:grid-cols-2 gap-4 mb-24">
          {valueBullets.map((bullet, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex items-start gap-4 py-4 border-t border-border">
                <span className="w-8 h-px bg-accent-blue mt-2.5 shrink-0" />
                <p className="text-sm md:text-base leading-relaxed">{bullet}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Service blocks */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="group border-t border-border py-10 md:py-12">
                <div className="md:grid md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-4">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5 mt-3 md:mt-0">
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 mt-4 md:mt-0 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-wider text-muted-foreground border border-border px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Services;
