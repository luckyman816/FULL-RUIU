"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const NextSlider = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const deviceWidth = window.innerWidth;

    if (deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bg-null-wrapper",
          start: "top center",
          end: "+=100%",
          scrub: 1,
          pin: false,
        },
      });

      tl.to(".bg-null-wrapper", {
        y: "390px",
        scale: 2,
        zIndex: -1,
        opacity: "0.2",
        duration: 6,
      });
    }
  }, []);

  return (
    <div className="bg-null-wrapper" style={{ overflow: "visible" }}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={10000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="b-text-slider b-g-text-slider"
      >
        <SwiperSlide>
          <div className="single">
            <p className="l-t">NEXT LEVEL AI</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single">
            <p className="l-t">NEXT LEVEL AI</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single">
            <p className="l-t">NEXT LEVEL AI</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single">
            <p className="l-t">NEXT LEVEL AI</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single">
            <p className="l-t">NEXT LEVEL AI</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single">
            <p className="l-t">NEXT LEVEL AI</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NextSlider;
