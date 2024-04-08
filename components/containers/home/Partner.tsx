"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/partner/one.png";
import Two from "@/public/images/partner/two.png";
import Three from "@/public/images/partner/three.png";
import Four from "@/public/images/partner/four.png";
import Five from "@/public/images/partner/five.png";

const Partner = () => {
  const pathname = usePathname();
  const isHomeTwoRoute = pathname === "/index-two";

  return (
    <div className={"partner section" + (isHomeTwoRoute ? " pb-0" : " ")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <h2 className="title sub-title-two mt-0 title-animation">
                Our Partner&apos;s
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              speed={2000}
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
                992: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 4,
                },
                425: {
                  slidesPerView: 3,
                },
              }}
              className="partner__slider"
            >
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={One} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Two} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Three} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Four} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Five} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={One} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Two} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Three} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Four} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Five} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={One} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Two} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Three} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Four} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Five} alt="Image" priority />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
