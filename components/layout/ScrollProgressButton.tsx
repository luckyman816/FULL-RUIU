"use client";
import { useState, useEffect, useRef } from "react";

const ScrollProgressButton = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const scrollRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    setIsActive(window.scrollY > 50);
  };

  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      ref={scrollRef}
      className={`progress-wrap ${isActive ? "active-progress" : ""}`}
      onClick={handleProgressClick}
      title="Go To Top"
    >
      <span></span>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          stroke="#3887FE"
          strokeWidth="4"
          fill="none"
          style={{
            strokeDasharray: "308.66px",
            strokeDashoffset: `${308.66 - scrollProgress * 3.0866}px`,
          }}
        />
      </svg>
    </button>
  );
};

export default ScrollProgressButton;
