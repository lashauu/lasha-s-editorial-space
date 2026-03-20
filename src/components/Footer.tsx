const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/lasha_u" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lasha-u/" },
  { label: "X", href: "https://x.com/lasha_uu" },
  { label: "Instagram", href: "https://www.instagram.com/lasha_u/" },
  { label: "Pinterest", href: "https://www.pinterest.com/lasha_u/" },
  { label: "Soundcloud", href: "https://soundcloud.com/lasha_u" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container max-w-5xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="text-xs text-muted-foreground">
          © 2026 Lasha Uchaneishvili. Designed with love, pixels, and caffeine.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
