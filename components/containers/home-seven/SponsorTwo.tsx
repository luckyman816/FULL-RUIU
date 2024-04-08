"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import six from "@/public/images/partner/six.png";
import seven from "@/public/images/partner/seven.png";
import eight from "@/public/images/partner/eight.png";
import nine from "@/public/images/partner/nine.png";

const SponsorTwo = () => {
  return (
    <div className="sponsor  overflow-hidden">
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        speed={8000}
        loop={true}
        roundLengths={true}
        centeredSlides={true}
        centeredSlidesBounds={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="sponsor__slider"
        breakpoints={{
          1200: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={six} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={seven} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={eight} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={nine} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={six} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={seven} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={eight} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={nine} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={eight} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={nine} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={six} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={seven} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={eight} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={nine} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={nine} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={six} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={seven} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={eight} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={nine} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SponsorTwo;
