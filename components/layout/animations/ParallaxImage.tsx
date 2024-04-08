"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ParallaxImage = () => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);

      if (
        document.querySelectorAll(".parallax-img").length > 0 &&
        window.innerWidth >= 992
      ) {
        document.querySelectorAll(".parallax-img").forEach((el) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "center center",
              end: "+=40%",
              scrub: 1,
              pin: false,
              invalidateOnRefresh: true,
            },
          });

          tl.to(el, {
            y: "120px",
            zIndex: "-1",
            opacity: 0.3,
            duration: 2,
          });
        });
      }
    }
  }, []);
  return null;
};

export default ParallaxImage;
