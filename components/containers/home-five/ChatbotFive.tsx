"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Wheel from "@/public/images/wheel.png";
import Thumb from "@/public/images/h-chatbot-thumb.png";
import six from "@/public/images/partner/six.png";
import seven from "@/public/images/partner/seven.png";
import eight from "@/public/images/partner/eight.png";
import nine from "@/public/images/partner/nine.png";

const ChatbotFive = () => {
  return (
    <section className="section h-chatbot">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5">
            <div className="section__content">
              <div className="s-thumb">
                <Image src={Wheel} alt="Image" priority />
              </div>
              <h2 className="title title-animation">
                Use To Easy Chatbot Your Daily Life
              </h2>
              <p>
                With its deep understanding of context and ability to learn from
                every interaction, our chatbot delivers efficient and accurate
                responses, saving you time and effort. Experience the future of
                communication with our AI chatbot and unlock a world of
                possibilities.
              </p>
              <div className="section__content-cta">
                <Link href="sign-in" className="btn btn--primary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className="h-chatbot__thumb text-start text-lg-end reveal-img parallax-img">
              <Image src={Thumb} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="sponsor section pb-0 overflow-hidden">
        <Swiper
          slidesPerView={2}
          slidesPerGroup={1}
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
          className="sponsor__slider"
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
        </Swiper>
      </div>
    </section>
  );
};

export default ChatbotFive;
