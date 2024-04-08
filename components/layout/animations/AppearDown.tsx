"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AppearDown = () => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);
      const appearDownSections = document.querySelectorAll(".appear-down");
      appearDownSections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: section,
              scrub: 1,
              start: "top bottom",
              end: "bottom center",
              markers: false,
            },
          }
        );
      });
    }
  }, []);
  return null;
};

export default AppearDown;
