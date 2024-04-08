import Image from "next/image";
import Link from "next/link";
import Counter from "../Counter";
import one from "@/public/images/s-j-thumb.png";
import two from "@/public/images/s-j-l-thumb.png";
import framer from "@/public/images/frame-one.png";

const OurJourney = () => {
  return (
    <section className="s-journey section hg-i" id="scrollPosition">
      <div className="container">
        <div className="row gaper align-items-center section__header--secondary">
          <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
            <div className="section__content">
              <h2 className="title mt-12 title-animation">
                a Journey of <span className="text-primary">AI Generated</span>
                Visual Dreams
              </h2>
              <p>
                Artificial Intelligence (AI) is revolutionizing the way we live
                and work. It is a field of computer science that focuses on
                creating intelligent machines capable of performing.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-4 offset-lg-1 col-xxl-3 offset-xxl-3">
            <div className="s-h-thumb parallax-img">
              <Image src={one} alt="Image" priority />
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end">
          <div className="col-12 col-lg-8 col-xxl-9">
            <div className="w-r">
              <div className="s-journey__thumb reveal-img parallax-img">
                <Image src={two} alt="Image" priority />
              </div>
              <Link className="scroll-position-btn" href="sign-in">
                <Image src={framer} alt="Image" priority />
                <i className="bi bi-arrow-down"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xxl-3">
            <div className="s-journey__content">
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={80} />
                  </span>
                  <span className="prefix"> k</span>
                </h2>
                <p className="primary-text">Active User</p>
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={100} />
                  </span>
                  <span className="prefix"> +</span>
                </h2>
                <p className="primary-text">Years of Business</p>
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={2000} />
                  </span>
                  <span className="prefix"> +</span>
                </h2>
                <p className="primary-text">Daily User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
