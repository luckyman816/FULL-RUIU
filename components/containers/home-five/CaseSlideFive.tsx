"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/case/one.png";
import two from "@/public/images/case/two.png";
import three from "@/public/images/case/three.png";
import four from "@/public/images/case/four.png";

const CaseSlideFive = () => {
  return (
    <div className="c-slide section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              slidesPerGroup={1}
              speed={2000}
              loop={true}
              roundLengths={true}
              centeredSlides={false}
              centeredSlidesBounds={false}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                },
              }}
              className="c-slide__wrapper"
            >
              <SwiperSlide>
                <div className="c-slide-single">
                  <Link href="case-study-single">
                    <Image src={one} alt="Image" priority />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c-slide-single">
                  <Link href="case-study-single">
                    <Image src={two} alt="Image" priority />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c-slide-single">
                  <Link href="case-study-single">
                    <Image src={three} alt="Image" priority />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c-slide-single">
                  <Link href="case-study-single">
                    <Image src={four} alt="Image" priority />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c-slide-single">
                  <Link href="case-study-single">
                    <Image src={one} alt="Image" priority />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c-slide-single">
                  <Link href="case-study-single">
                    <Image src={two} alt="Image" priority />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c-slide-single">
                  <Link href="case-study-single">
                    <Image src={three} alt="Image" priority />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c-slide-single">
                  <Link href="case-study-single">
                    <Image src={four} alt="Image" priority />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSlideFive;
