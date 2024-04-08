"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import overviewThumb from "@/public/images/overview/three.png";

const RevolutionHover = () => {
  // mousemove animation
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".revolution-f__single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section revolution-f fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xxl-6">
            <div className="section__header text-center">
              <div className="s-thumb">
                <Image src={overviewThumb} alt="Image" priority />
              </div>
              <h2 className="title title-animation">
                Revolutionizing Gaming with Artificial Intelligence
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="revolution-f__content">
              <div className="revolution-f__single fade-top">
                <div className="thumb">
                  <p className="light-title-sm">01</p>
                </div>
                <div className="content rev-f-content">
                  <h3>
                    <Link href="service-single">Image Generated</Link>
                  </h3>
                </div>
                <div
                  className="case-study-hover d-none d-sm-block"
                  style={{ backgroundImage: "url('/images/hover-thumb.png')" }}
                ></div>
              </div>
              <div className="revolution-f__single fade-top">
                <div className="thumb">
                  <p className="light-title-sm">02</p>
                </div>
                <div className="content rev-f-content">
                  <h3>
                    <Link href="service-single">AI Voice Generated</Link>
                  </h3>
                </div>
                <div
                  className="case-study-hover d-none d-sm-block"
                  style={{ backgroundImage: "url('/images/hover-thumb.png')" }}
                ></div>
              </div>
              <div className="revolution-f__single fade-top">
                <div className="thumb">
                  <p className="light-title-sm">03</p>
                </div>
                <div className="content rev-f-content">
                  <h3>
                    <Link href="service-single">AI Chatbot</Link>
                  </h3>
                </div>
                <div
                  className="case-study-hover d-none d-sm-block"
                  style={{ backgroundImage: "url('/images/hover-thumb.png')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionHover;
