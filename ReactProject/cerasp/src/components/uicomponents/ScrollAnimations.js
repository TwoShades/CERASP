import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollFadeInSection({
  id,
  scrollDuration = 1000,
  start = "top center",
  markers = false,
  pin = true,
  children,
}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start,
            end: `+=${scrollDuration}`, // your extended scroll length
            scrub: 1,
            pin,
            markers,
            id: `trigger-${id}`,
          },
        })
        .fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, ease: "none", duration: 0.3 } // fade in: 0 -> 1
        )
        .to(
          sectionRef.current,
          { opacity: 0, ease: "none", duration: 0.55 }, // fade out: 1 -> 0
          ">0" // immediately after fade in
        )
        .to(
          sectionRef.current,
          { opacity: 0, ease: "none", duration: 0.15 }, // hold at 0
          ">0" // immediately after fade out
        );
    }, sectionRef.current);

    return () => ctx.revert();
  }, [scrollDuration, id, start, markers, pin]);

  return (
    <section ref={sectionRef} className="scroll-section" style={{ opacity: 0 }}>
      {children}
    </section>
  );
}

export function ScrollSwipeInSection({
  id,
  scrollDuration = 1000,
  start = "top center",
  markers = false,
  pin = false,
  direction = "left", // swipe from left by default
  children,
}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    // Set initial offset based on direction
    const xStart =
      direction === "left" ? -100 : direction === "right" ? 100 : 0;
    const yStart =
      direction === "top" ? -100 : direction === "bottom" ? 100 : 0;

    gsap.set(sectionRef.current, { opacity: 0, x: xStart, y: yStart });

    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start,
            end: `+=${scrollDuration}`,
            scrub: 1,
            pin,
            markers,
            id: `trigger-${id}`,
          },
        })
        .to(sectionRef.current, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power1.out",
        });
    }, sectionRef.current);

    return () => ctx.revert();
  }, [scrollDuration, id, start, markers, pin, direction]);

  return (
    <section ref={sectionRef} className="scroll-section">
      {children}
    </section>
  );
}
