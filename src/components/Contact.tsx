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
    <section className="py-32 md:py-40" id="contact">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight mb-8 text-accent-blue">
            Let's work together.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="max-w-xl text-muted-foreground leading-relaxed mb-10 text-sm md:text-base">
            Have a project in mind or want to talk design? I'm open to freelance
            work, collaborations, and full-time opportunities.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <a
            href="mailto:hello@lashauchaneishvili.com"
            className="inline-flex items-center gap-3 text-lg md:text-xl font-black hover:text-accent transition-colors duration-200 group"
          >
            hello@lashauchaneishvili.com
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 8h14M9 2l6 6-6 6" />
            </svg>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
