"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/t-one.png";
import Two from "@/public/images/t-two.png";
import Three from "@/public/images/t-three.png";

const Review = () => {
  const pathname = usePathname();
  const isAbout = pathname === "/about-us" || pathname === "/services";

  return (
    <section className={`section review ${isAbout ? " lilu-review" : ""}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <span className="sub-title-two">Review</span>
              <h2 className="title title-animation">Our User Review</h2>
              <p>
                AI chatbots can generate analytics and insights on user
                interactions,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              slidesPerGroup={1}
              speed={1200}
              loop={true}
              roundLengths={true}
              centeredSlides={false}
              centeredSlidesBounds={false}
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                el: ".review-pagination",
                clickable: true,
              }}
              breakpoints={{
                992: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                },
              }}
              className="review__slider"
            >
              <SwiperSlide>
                <div className="review__slider-single">
                  <p>
                    I recently had the pleasure of experiencing the
                    transformative power of chatbots, and I must say, I am
                    thoroughly impressed.
                  </p>
                  <div className="review__meta">
                    <div className="thumb">
                      <Image src={One} alt="Image" priority />
                    </div>
                    <div className="content">
                      <h5>Devon Lane</h5>
                      <p className="tertiary-text">Nursing Assistant</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p>
                    I recently had the pleasure of experiencing the
                    transformative power of chatbots, and I must say, I am
                    thoroughly impressed.
                  </p>
                  <div className="review__meta">
                    <div className="thumb">
                      <Image src={Two} alt="Image" priority />
                    </div>
                    <div className="content">
                      <h5>Kathryn Murphy</h5>
                      <p className="tertiary-text">Web Designer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p>
                    I recently had the pleasure of experiencing the
                    transformative power of chatbots, and I must say, I am
                    thoroughly impressed.
                  </p>
                  <div className="review__meta">
                    <div className="thumb">
                      <Image src={Three} alt="Image" priority />
                    </div>
                    <div className="content">
                      <h5>Ralph Edwards</h5>
                      <p className="tertiary-text">Marketing Expert</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p>
                    I recently had the pleasure of experiencing the
                    transformative power of chatbots, and I must say, I am
                    thoroughly impressed.
                  </p>
                  <div className="review__meta">
                    <div className="thumb">
                      <Image src={One} alt="Image" priority />
                    </div>
                    <div className="content">
                      <h5>Devon Lane</h5>
                      <p className="tertiary-text">Nursing Assistant</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p>
                    I recently had the pleasure of experiencing the
                    transformative power of chatbots, and I must say, I am
                    thoroughly impressed.
                  </p>
                  <div className="review__meta">
                    <div className="thumb">
                      <Image src={Two} alt="Image" priority />
                    </div>
                    <div className="content">
                      <h5>Kathryn Murphy</h5>
                      <p className="tertiary-text">Web Designer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p>
                    I recently had the pleasure of experiencing the
                    transformative power of chatbots, and I must say, I am
                    thoroughly impressed.
                  </p>
                  <div className="review__meta">
                    <div className="thumb">
                      <Image src={Three} alt="Image" priority />
                    </div>
                    <div className="content">
                      <h5>Ralph Edwards</h5>
                      <p className="tertiary-text">Marketing Expert</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta">
              <div className="slider-pagination-group slider-dots review-pagination d-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
