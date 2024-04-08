"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Thumb from "@/public/images/banner/banner-three-thumb.png";
import smThumb from "@/public/images/banner/banner-three-s-thumb.png";
import Frame from "@/public/images/frame-one.png";

const HomeThreeBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bannerThree = document.querySelector(".banner-three");
    const deviceWidth = window.innerWidth;

    if (bannerThree && deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerThree,
          start: "center center",
          end: "+=40%",
          scrub: 1,
          pin: false,
        },
      });

      tl.to(".banner-t-s-thumb", {
        transform: "scale(1.2)",
        y: "300px",
        opacity: 0.5,
        duration: 3,
      });
    }
  }, []);

  return (
    <section className="banner-three">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            <div className="banner-three__content text-center">
              <h1 className="fw-7 title-animation">
                Welcome to the
                <span>AI Game</span> World
              </h1>
              <div className="banner-three__thumb">
                <Image src={Thumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-t-s-thumb">
        <Image src={smThumb} alt="Image" priority />
      </div>
      <Link className="scroll-position-btn" href="#scrollPosition">
        <Image src={Frame} alt="Image" priority />
        <i className="bi bi-arrow-down"></i>
      </Link>
    </section>
  );
};

export default HomeThreeBanner;
