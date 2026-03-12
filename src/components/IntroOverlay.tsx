"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const overlay = overlayRef.current;
    const introText = introTextRef.current;
    const targetLogo = document.querySelector(".brand-small");

    if (!overlay || !introText || !targetLogo) {
      document.body.style.overflow = "";
      return;
    }

    const introRect = introText.getBoundingClientRect();
    const targetRect = targetLogo.getBoundingClientRect();

    const deltaX =
      targetRect.left +
      targetRect.width / 2 -
      (introRect.left + introRect.width / 2);

    const deltaY =
      targetRect.top +
      targetRect.height / 2 -
      (introRect.top + introRect.height / 2);

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        document.body.style.overflow = "";
        setHidden(true);
      },
    });

    tl.fromTo(
      introText,
      {
        opacity: 0,
        scale: 0.92,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.1,
      },
    );

    tl.to({}, { duration: 0.55 });

    tl.to(introText, {
      x: deltaX,
      y: deltaY,
      scale: 0.28,
      opacity: 0.95,
      duration: 1.2,
    });

    tl.to(
      overlay,
      {
        opacity: 0,
        duration: 0.7,
      },
      ">-0.25",
    );

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div ref={overlayRef} className="intro-overlay">
      <div ref={introTextRef} className="intro-logo">
        Pagani Automobili
      </div>
    </div>
  );
}
