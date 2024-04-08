"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "swiper/swiper-bundle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ThumbLogo from "@/public/images/banner/banner-bg-logo.png"
import ThumbOne from "@/public/images/banner/banner-thumb-one.png";
import Frame from "@/public/images/frame-one.png";

const HomeBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      const deviceWidth = window.innerWidth;
      if (document.querySelector(".banner") && deviceWidth >= 768) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "top top",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(".banner-thumb-one img", {
          transform: "rotate(14deg)",
          x: "300px",
          opacity: 1,
          duration: 3,
        });

        tl.to(".banner .banner-anime", {
          "--transformY": "300px",
          opacity: 0,
          duration: 3,
        });
      }
    }
  }, []);

  return (
    <section className="banner bg-img">

        <div className="row justify-content-center">
          
          <div className="col-12 col-sm-8 col-md-7 col-lg-7 col-xxl-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div className="banner__content text-center">
              <h1 className="title-animation">
                Ai Marketplace: <span>Create, Sell, Transform Business, Build Success</span>
              </h1>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-7 col-lg-7 col-xxl-6">
            <div className="banner__thumb">
                <Image src={ThumbLogo} alt="Image" priority/>
              </div>
          </div>
        </div>
      <div className="banner-thumb-one">
        <Image src={ThumbOne} alt="Image" priority />
      </div>
    </section>
  );
};

export default HomeBanner;
