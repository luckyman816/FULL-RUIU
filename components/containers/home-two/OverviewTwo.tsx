import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/o-one.png";
import Two from "@/public/images/o-two.png";
import Three from "@/public/images/o-three.png";

const OverviewTwo = () => {
  return (
    <section className="section overview-two fade-wrapper pb-0">
      <div className="container">
        <div className="row align-items-center justify-content-center gaper">
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={One} alt="Image" priority />
              </div>
              <div className="content">
                <h4>
                  <Link href="service-single">Analytics and Insights</Link>
                </h4>
                <p className="tertiary-text">
                  AI chatbots can learn from user interactions and improve over
                  time
                </p>
                <div className="section__content-cta">
                  <Link href="service-single">
                    <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="content">
                <h4>
                  <Link href="service-single">Advance Programing</Link>
                </h4>
                <p className="tertiary-text">
                  AI chatbots can learn from user interactions and improve over
                  time
                </p>
                <div className="section__content-cta">
                  <Link href="service-single">
                    <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="content">
                <h4>
                  <Link href="service-single">Cloud Ai Intergration</Link>
                </h4>
                <p className="tertiary-text">
                  AI chatbots can learn from user interactions and improve over
                  time
                </p>
                <div className="section__content-cta">
                  <Link href="service-single">
                    <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewTwo;
