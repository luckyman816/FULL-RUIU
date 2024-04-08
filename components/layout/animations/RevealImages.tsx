"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const RevealImages = () => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);
      const revealImages = document.querySelectorAll(".reveal-img");
      revealImages.forEach((el) => {
        gsap.to(el, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            markers: false,
            onEnter: () => {
              el.classList.add("reveal-img-active");
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
              });
            },
          },
        });
      });
    }
  }, []);
  return null;
};

export default RevealImages;
