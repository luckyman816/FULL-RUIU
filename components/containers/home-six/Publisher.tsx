"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import publisherData from "@/public/data/publisher";

const Publisher = () => {
  return (
    <section className="section pb-0 publisher">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center">
              <h2 className="title title-animation mt-12">
                This week Top Publisher
              </h2>
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
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 5,
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
              className="publisher__slider"
            >
              {publisherData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="publisher__single">
                      <div className="thumb">
                        <Image src={item.publisherImage} alt="Image" priority />
                      </div>
                      <div className="content">
                        <h5>{item.publisherName}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publisher;
