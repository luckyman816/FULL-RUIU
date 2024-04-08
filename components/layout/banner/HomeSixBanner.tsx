import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/banner/six-one.png";
import two from "@/public/images/banner/six-two.png";

const HomeSixBanner = () => {
  return (
    <>
      <section className="banner-six fade-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-xxl-9">
              <div className="banner-six__content">
                <h1 className="title title-animation fw-7">
                  AI-Driven Prompts for Limitless Creativity
                </h1>
              </div>
            </div>
          </div>
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="banner-six__single fade-top">
                <div className="thumb">
                  <Link href="service-single">
                    <Image src={one} alt="Image" priority />
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-single">
                      AI-Driven Prompts for Limitless Creativity
                    </Link>
                  </h4>
                  <p className="tertiary-text text-uppercase">16 JUN 2022</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="banner-six__single fade-top">
                <div className="thumb">
                  <Link href="service-single">
                    <Image src={two} alt="Image" priority />
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-single">
                      AI-Driven Prompts for Limitless Creativity
                    </Link>
                  </h4>
                  <p className="tertiary-text text-uppercase">16 JUN 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <hr className="horizon" />
        </div>
      </div>
    </>
  );
};

export default HomeSixBanner;
