import { useRef, useEffect, useState } from "react";
import "./css/RevealOnScroll.css"; // Or use a global file

export default function RevealOnScroll({
  children,
  className = "",
  direction = "right",
}) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // ← updates both true and false
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${className} ${
        isVisible ? "visible" : ""
      } from-${direction}`}
    >
      {children}
    </div>
  );
}
