"use client";
import VanillaTilt from "vanilla-tilt";

const VanillaTiltHover = () => {
  if (window.innerWidth >= 992) {
    const tiltElements = document.querySelectorAll(".topy-tilt");
    tiltElements.forEach((element) => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }
  return null;
};

export default VanillaTiltHover;
