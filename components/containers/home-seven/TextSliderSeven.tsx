"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TextSliderSeven = () => {
  return (
    <div className="h-seven-text-wrapper section">
      <div className="text-slider-large-wrapper">
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          speed={8000}
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
                  AI
                  <span className="text-stroke" data-text="Prompt">
                    {" "}
                    Prompt
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Image Generator">
                    {" "}
                    Image Generator
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Prompt">
                    {" "}
                    Prompt
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Image Generator">
                    {" "}
                    Image Generator
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Prompt">
                    {" "}
                    Prompt
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Image Generator">
                    {" "}
                    Image Generator
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          speed={8000}
          loop={true}
          centeredSlides={false}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="text-slider-large-rtl"
        >
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Prompt">
                    {" "}
                    Prompt
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Image Generator">
                    {" "}
                    Image Generator
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Prompt">
                    {" "}
                    Prompt
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Image Generator">
                    {" "}
                    Image Generator
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Prompt">
                    {" "}
                    Prompt
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title">
                <Link href="services">
                  AI
                  <span className="text-stroke" data-text="Image Generator">
                    {" "}
                    Image Generator
                  </span>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TextSliderSeven;
