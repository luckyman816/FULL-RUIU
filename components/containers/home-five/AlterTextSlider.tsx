"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const AlterTextSlider = () => {
  return (
    <section className="text-slider-large-wrapper section pt-0 alter-l-text">
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
        className="text-slider-large"
      >
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                Next
                <span> Level AI</span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                Next
                <span> Level AI</span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                Next
                <span> Level AI</span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                Next
                <span> Level AI</span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                Next
                <span> Level AI</span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                Next
                <span> Level AI</span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default AlterTextSlider;
