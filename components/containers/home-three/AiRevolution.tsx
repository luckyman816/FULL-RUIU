import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/revolution/one.png";
import two from "@/public/images/revolution/two.png";
import three from "@/public/images/revolution/three.png";

const AiRevolution = () => {
  return (
    <section className="section revolution pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="section__header text-center">
              <span className="sub-title-two text-primary">Ai Gaming</span>
              <h2 className="title title-animation">
                Revolutionizing Gaming with Artificial Intelligence
              </h2>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="revolution__single fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={one} alt="Image" priority />
                </Link>
                <span className="tag">VR</span>
              </div>
              <div className="content">
                <Link href="service-single" className="primary-text">
                  Design
                  <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="revolution__single fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={two} alt="Image" priority />
                </Link>
                <span className="tag">VR</span>
              </div>
              <div className="content">
                <Link href="service-single" className="primary-text">
                  VR
                  <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="revolution__single fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={three} alt="Image" priority />
                </Link>
                <span className="tag">VR</span>
              </div>
              <div className="content">
                <Link href="service-single" className="primary-text">
                  Robo
                  <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiRevolution;
