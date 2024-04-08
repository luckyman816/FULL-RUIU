"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "@/public/images/service-slider/one.png";
import two from "@/public/images/service-slider/two.png";
import three from "@/public/images/service-slider/three.png";
import four from "@/public/images/service-slider/four.png";
import Frame from "@/public/images/frame-two.png";

const ServiceSlider = () => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".service-slider__item");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <div className="service-slider_wrapper" ref={slider}>
      <div className="service-slider">
        <div className="service-slider__item">
          <Link href="services">
            <Image src={one} alt="Image" priority />
          </Link>
        </div>
        <div className="service-slider__item">
          <Link href="services">
            <Image src={two} alt="Image" priority />
          </Link>
        </div>
        <div className="service-slider__item">
          <Link href="services">
            <Image src={three} alt="Image" priority />
          </Link>
        </div>
        <div className="service-slider__item">
          <Link href="services">
            <Image src={four} alt="Image" priority />
          </Link>
        </div>
        <div className="service-slider__item">
          <Link href="services">
            <Image src={one} alt="Image" priority />
          </Link>
        </div>
        <div className="service-slider__item">
          <Link href="services">
            <Image src={two} alt="Image" priority />
          </Link>
        </div>
        <div className="service-slider__item">
          <Link href="services">
            <Image src={three} alt="Image" priority />
          </Link>
        </div>
        <div className="service-slider__item">
          <Link href="services">
            <Image src={four} alt="Image" priority />
          </Link>
        </div>
        <div className="service-slider__item">
          <Link className="video-frame video-btn" href="services">
            <Image src={Frame} alt="Image" priority />
            <i className="bi bi-arrow-down-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
