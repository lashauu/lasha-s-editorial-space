const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-5 sm:px-6 md:px-0" aria-label="Introduction">
      <div className="container max-w-5xl">
        <div className="space-y-6 md:space-y-8">
          <h1
            className="text-[clamp(2.2rem,7.5vw,7rem)] font-black uppercase leading-[0.9] tracking-tight text-accent-blue opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s", lineHeight: "0.9" }}
          >
            Lasha
            <br />
            Uchaneishvili
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wide opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Art Director & Graphic Designer
          </p>

          <div
            className="w-12 md:w-16 h-px bg-accent-blue opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
            role="separator"
          />

          <p
            className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            I work at the intersection of structure and emotion, rooted in
            mathematics, symmetry, and the quiet elegance of{" "}
            <span className="text-accent-blue">minimalism</span>.
          </p>

          <a
            href="https://www.behance.net/lasha_u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-foreground px-6 sm:px-7 py-3 text-[11px] sm:text-xs font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97] opacity-0 animate-fade-up group"
            style={{ animationDelay: "0.65s" }}
          >
            View Portfolio
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M1 8h14M9 2l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;