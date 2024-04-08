"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";

const AboutTool = () => {
  const [isHover, setIsHover] = useState(0);
  return (
    <section className="section overview lilu-view">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Ai Tool</span>
              <h2 className="title title-animation">
                Our AI Tool You Can Use All Of Place
              </h2>
              <p>
                AI image generation tools have emerged as powerful resources in
                the realm of digital art and design. These cutting-edge tools
                leverage advanced machine learning algorithms
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1 fade-wrapper">
            <div className="row gaper">
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 0 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(0)}
                >
                  <div className="overview__thumb">
                    <Image src={one} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Smooth AI Tools</h4>
                    <p className="tertiary-text">
                      Deep Dream is a mesmerizing AI image generator that
                      generates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 1 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(1)}
                >
                  <div className="overview__thumb">
                    <Image src={two} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Image Generator</h4>
                    <p className="tertiary-text">
                      Deep Dream is a mesmerizing AI image generator that
                      generates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 2 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(2)}
                >
                  <div className="overview__thumb">
                    <Image src={three} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Online Editing</h4>
                    <p className="tertiary-text">
                      Deep Dream is a mesmerizing AI image generator that
                      generates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 3 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(3)}
                >
                  <div className="overview__thumb">
                    <Image src={four} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Use All Place</h4>
                    <p className="tertiary-text">
                      Deep Dream is a mesmerizing AI image generator that
                      generates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTool;
