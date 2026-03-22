import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const invertRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const visible = useRef(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const cursor = cursorRef.current;
    const invert = invertRef.current;
    if (!cursor || !invert) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        cursor.style.opacity = "1";
        invert.style.opacity = "1";
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
      }
    };

    const onMouseLeave = () => {
      visible.current = false;
      cursor.style.opacity = "0";
      invert.style.opacity = "0";
    };

    const onMouseEnter = () => {
      visible.current = true;
      cursor.style.opacity = "1";
      invert.style.opacity = "1";
    };

    const animate = () => {
      const ease = 0.15;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      const tx = `translate3d(${pos.current.x - 12}px, ${pos.current.y - 12}px, 0)`;
      cursor.style.transform = tx;
      invert.style.transform = tx;

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const shared: React.CSSProperties = {
    width: 24,
    height: 24,
    borderRadius: "50%",
    opacity: 0,
    willChange: "transform",
    transition: "opacity 0.3s ease",
    position: "fixed",
    top: 0,
    left: 0,
  };

  return (
    <>
      {/* Inversion layer */}
      <div
        ref={invertRef}
        className="pointer-events-none z-[9998] hidden md:block"
        style={{
          ...shared,
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
      />
      {/* Accent color layer */}
      <div
        ref={cursorRef}
        className="pointer-events-none z-[9999] hidden md:block"
        style={{
          ...shared,
          backgroundColor: "hsl(var(--accent))",
          mixBlendMode: "normal",
          opacity: 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
