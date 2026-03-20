const Footer = () => {
  return (
    <footer className="border-t border-border py-8 md:py-10" role="contentinfo">
      <div className="container max-w-5xl px-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © 2026 Lasha Uchaneishvili
        </p>
        <p className="text-xs text-muted-foreground">
          Designed with love, pixels, and caffeine.
        </p>
      </div>
    </footer>
  );
};

export default Footer;