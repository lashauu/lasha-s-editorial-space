import { useEffect, useRef, useState } from "react";

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/lasha_u" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lasha-u/" },
  { label: "X", href: "https://x.com/lasha_uu" },
  { label: "Instagram", href: "https://www.instagram.com/lasha_u/" },
  { label: "Pinterest", href: "https://www.pinterest.com/lasha_u/" },
  { label: "Soundcloud", href: "https://soundcloud.com/lasha_u" },
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

const Contact = () => {
  return (
    <section className="py-24 md:py-40" id="contact" aria-label="Contact information">
      <div className="container max-w-5xl px-5 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 md:mb-8 text-accent-blue">
            Let's work together.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="max-w-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
            Have a project in mind or want to talk design? I'm open to freelance work or collaborations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <a
            href="mailto:hello@lashauchaneishvili.com"
            className="inline-flex items-center gap-3 text-base sm:text-lg md:text-xl font-black hover:text-accent transition-colors duration-200 group"
          >
            hello@lashauchaneishvili.com
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M1 8h14M9 2l6 6-6 6" />
            </svg>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex items-center gap-3 mt-12 md:mt-14 mb-5 md:mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent-blue font-bold">Connect with me</span>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-wrap gap-x-5 sm:gap-x-6 gap-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
                <svg
                  className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M3 9L9 3M9 3H4.5M9 3v4.5" />
                </svg>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;