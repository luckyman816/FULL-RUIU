import Image from "next/image";
import one from "@/public/images/o-one.png";
import two from "@/public/images/o-two.png";
import three from "@/public/images/o-three.png";

const AboutOverview = () => {
  return (
    <section className="section overview-two fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div className="section__header section__content text-center">
              <span className="sub-title">Ai Tool</span>
              <h2 className="title title-animation">
                Revolutionizing Gaming with Artificial Intelligence
              </h2>
              <p>
                AI image generation tools have emerged as powerful resources in
                the realm of digital art and design. These cutting-edge tools.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center gaper">
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={one} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-white">Analytics and Insights</h4>
                <p className="tertiary-text">
                  AI chatbots can learn from user interactions and improve over
                  time
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={two} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-white">Advance Programing</h4>
                <p className="tertiary-text">
                  AI chatbots can learn from user interactions and improve over
                  time
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={three} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-white">Cloud Ai Intergration</h4>
                <p className="tertiary-text">
                  AI chatbots can learn from user interactions and improve over
                  time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
