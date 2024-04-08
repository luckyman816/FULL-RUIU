"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Thumb from "@/public/images/product-details/thumb.png";
import one from "@/public/images/product-details/one.png";
import two from "@/public/images/product-details/two.png";
import three from "@/public/images/product-details/three.png";

const ProductDetailsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="product__thumb">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[FreeMode, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="large-product-img"
      >
        <SwiperSlide>
          <div className="single-lg-img">
            <Image src={Thumb} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-lg-img">
            <Image src={Thumb} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-lg-img">
            <Image src={Thumb} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-lg-img">
            <Image src={Thumb} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        slidesPerGroup={1}
        modules={[FreeMode, Thumbs]}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
        }}
        className="small-product-img"
        onSwiper={setThumbsSwiper}
        observer={true}
        observeParents={true}
        watchSlidesProgress={true}
        freeMode={true}
      >
        <SwiperSlide>
          <div className="single-sm-img">
            <Image src={one} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-sm-img">
            <Image src={two} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-sm-img">
            <Image src={three} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-sm-img">
            <Image src={one} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductDetailsSlider;
