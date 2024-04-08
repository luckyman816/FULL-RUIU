"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SubTitleAnimations = () => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);

      if (typeof window !== "undefined") {
        if (document.querySelectorAll(".sub-title-two").length > 0) {
          document.querySelectorAll(".sub-title-two").forEach((el) => {
            gsap.to(el, {
              "--width": "40px",
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                markers: false,
              },
            });
          });
        }
      }
    }
  }, []);

  return null;
};

export default SubTitleAnimations;
