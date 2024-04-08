"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/showcase/one.png";
import two from "@/public/images/showcase/two.png";
import three from "@/public/images/showcase/three.png";
import four from "@/public/images/showcase/four.png";
import five from "@/public/images/showcase/five.png";
import six from "@/public/images/showcase/six.png";

const ShowCaseThree = () => {
  return (
    <div className="section showcase">
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        speed={3000}
        loop={true}
        roundLengths={true}
        centeredSlides={true}
        centeredSlidesBounds={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 3,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          1400: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          425: {
            slidesPerView: 2,
          },
        }}
        className="showcase__slider"
      >
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={one} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={two} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={three} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={four} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={five} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={six} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={one} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={two} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={three} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={four} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={five} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={six} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={one} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={two} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={three} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={four} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={five} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase__single">
            <Link href="product-single">
              <Image src={six} alt="Image" priority />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShowCaseThree;
