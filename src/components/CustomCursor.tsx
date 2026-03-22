import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const visible = useRef(false);

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        cursor.style.opacity = "1";
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
      }
    };

    const onMouseLeave = () => {
      visible.current = false;
      cursor.style.opacity = "0";
    };

    const onMouseEnter = () => {
      visible.current = true;
      cursor.style.opacity = "1";
    };

    const animate = () => {
      const ease = 0.15;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (cursor) {
        cursor.style.transform = `translate3d(${pos.current.x - 12}px, ${pos.current.y - 12}px, 0)`;
      }

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

  // Hide on touch devices via CSS too
  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "hsl(var(--accent))",
        opacity: 0,
        willChange: "transform",
        transition: "opacity 0.3s ease",
      }}
    />
  );
};

export default CustomCursor;
