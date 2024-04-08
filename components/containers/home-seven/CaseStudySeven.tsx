"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/home-seven/one.png";
import two from "@/public/images/home-seven/two.png";
import three from "@/public/images/home-seven/three.png";
import four from "@/public/images/home-seven/four.png";
import five from "@/public/images/home-seven/five.png";

const CaseStudySeven = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <section className="section h-s-case hg-i">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="section__header text-center">
              <h2 className="mt-12 title title-animation">Case Study</h2>
              <p>
                AI chatbots can generate analytics and insights on user
                interactions,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-s-case-wrapper">
        <div
          className={
            "h-s-case-single" +
            (isActive === 0 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(0)}
        >
          <div className="thumb">
            <Image src={one} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="case-study-single">Ai Club x</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                AI-powered inpainting algorithms seamlessly restore the beauty
                and completeness
              </p>
              <Link href="case-study-single" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 1 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(1)}
        >
          <div className="thumb">
            <Image src={two} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="case-study-single">Robo x pro</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                AI-powered inpainting algorithms seamlessly restore the beauty
                and completeness
              </p>
              <Link href="case-study-single" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 2 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(2)}
        >
          <div className="thumb">
            <Image src={three} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="case-study-single">Chatbot</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                AI-powered inpainting algorithms seamlessly restore the beauty
                and completeness
              </p>
              <Link href="case-study-single" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 3 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(3)}
        >
          <div className="thumb">
            <Image src={four} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="case-study-single">Soal xp</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                AI-powered inpainting algorithms seamlessly restore the beauty
                and completeness
              </p>
              <Link href="case-study-single" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 4 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(4)}
        >
          <div className="thumb">
            <Image src={five} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="case-study-single">Manto ai</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                AI-powered inpainting algorithms seamlessly restore the beauty
                and completeness
              </p>
              <Link href="case-study-single" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySeven;
