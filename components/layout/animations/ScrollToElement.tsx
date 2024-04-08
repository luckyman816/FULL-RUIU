"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const ScrollToElement = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = e.currentTarget.getAttribute("href");
      if (target) {
        gsap.to(window, {
          scrollTo: {
            y: target,
            offsetY: 200,
          },
          duration: 1.5,
          ease: "power3.inOut",
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor: any) => {
      anchor.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((anchor: any) => {
        anchor.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
  return null;
};

export default ScrollToElement;
