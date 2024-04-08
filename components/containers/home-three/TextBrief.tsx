"use client";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Thumb from "@/public/images/t-thumb-one.png";
import ThumbTwo from "@/public/images/t-thumb-two.png";
import Wheel from "@/public/images/wheel.png";

const TextBrief = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const textBrief = document.querySelector(".text-brief");
    const deviceWidth = window.innerWidth;

    if (textBrief && deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textBrief,
          start: "center center",
          end: "+=40%",
          scrub: 1,
          pin: false,
        },
      });

      tl.to(".t-br-one img", {
        transform: "scale(1.2)",
        y: "60px",
        opacity: 0.5,
        duration: 2,
      });

      tl.to(
        ".t-br-two img",
        {
          y: "60px",
          opacity: 0.5,
          duration: 2,
        },
        "<"
      );
    }
  }, []);

  return (
    <section className="text-brief section pb-0" id="scrollPosition">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-brief__inner">
              <div className="t-br-one">
                <Image src={Thumb} alt="Image" priority />
                <h2 className="light-title fw-7 text-white title-animation">
                  {" "}
                  Next-Level Gaming with AI
                </h2>
              </div>

              <div className="t-br-two">
                <h3 className="light-title fw-7 text-white title-animation">
                  Explore the Future of
                </h3>
                <Image src={ThumbTwo} alt="Image" priority />
              </div>
              <div className="t-br-three">
                <Image src={Wheel} alt="Image" priority />
                <h4 className="light-title fw-7 text-white title-animation">
                  Interactive Entertainment
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBrief;
