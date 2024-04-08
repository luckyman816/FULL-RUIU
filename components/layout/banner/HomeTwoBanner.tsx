import Image from "next/image";
import Link from "next/link";
import bannerThumb from "@/public/images/banner/banner-two-thumb.png";
import Frame from "@/public/images/frame-three.png";

const HomeTwoBanner = () => {
  return (
    <section className="banner-two">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-two__content">
              <h1 className="title-animation">
                <span>Intelligent</span> Conversations Made Simple
              </h1>
              <p className="primary-text">
                Intelligent Conversations Made Simple Harness the Power of AI
                Chat to Streamline Interactions
              </p>
              <div className="section__content-cta">
                <Link href="content-gen" className="btn btn--primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-two__thumb">
        <Image src={bannerThumb} alt="Image" priority />
      </div>
      <Link className="scroll-position-btn" href="#scrollPosition">
        <Image src={Frame} alt="Image" priority />
        <i className="bi bi-arrow-down"></i>
      </Link>
    </section>
  );
};

export default HomeTwoBanner;
