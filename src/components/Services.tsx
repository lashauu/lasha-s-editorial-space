import { useEffect, useRef, useState } from "react";

const valueBullets = [
  "Build brands that scale with your business and leave a lasting impression",
  "Create design systems that keep your marketing consistent across every channel",
  "Turn complex products into clear, usable interfaces that people actually enjoy using",
  "Support growth with design that performs, converts, and not just looks good",
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
    <section className="py-24 md:py-40" id="services" aria-label="Services offered">
      <div className="container max-w-5xl px-5 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 md:mb-16">
            Services
          </h2>
        </ScrollReveal>

        {/* Value bullets */}
        <div className="grid sm:grid-cols-2 gap-4 mb-20 md:mb-24">
          {valueBullets.map((bullet, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex items-start gap-3 sm:gap-4 py-4 border-t border-border">
                <svg className="w-3 h-3 mt-1.5 shrink-0 text-accent-blue" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M2 6h8M7 3l3 3-3 3" />
                </svg>
                <p className="text-sm md:text-base leading-relaxed">{bullet}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Service blocks */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <article className="group border-t border-border py-8 md:py-12">
                <div className="md:grid md:grid-cols-12 md:gap-6 lg:gap-8">
                  <div className="md:col-span-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5 mt-2 md:mt-0">
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 mt-3 md:mt-0 flex flex-wrap gap-1.5 sm:gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground border border-border px-2.5 sm:px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Services;