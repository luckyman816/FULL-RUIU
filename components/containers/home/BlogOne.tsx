"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/blog/one.png";
import two from "@/public/images/blog/two.png";
import three from "@/public/images/blog/three.png";

const BlogOne = () => {
  const [isHover, setIsHover] = useState(0);

  return (
    <section className="section blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title mt-12 title-animation">
                      News & Articles
                    </h2>
                    <p> AI image generator tools have emerged as powerful</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link href="blog" className="btn btn--primary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 0 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(0)}
            >
              <div className="blog__single-thumb">
                <Link href="blog-single">
                  <Image src={one} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  <span>April 18, 2023</span>
                  <Link href="blog-single">0 Comments</Link>
                </div>
                <h4>
                  <Link href="blog-single">
                    Unleashing the Creative Power of AI: Exploring Image
                    Generation
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 1 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(1)}
            >
              <div className="blog__single-thumb">
                <Link href="blog-single">
                  <Image src={two} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  <span>April 18, 2023</span>
                  <Link href="blog-single">0 Comments</Link>
                </div>
                <h4>
                  <Link href="blog-single">
                    Unleashing the Creative Power of AI: Exploring Image
                    Generation
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 2 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(2)}
            >
              <div className="blog__single-thumb">
                <Link href="blog-single">
                  <Image src={three} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  <span>April 18, 2023</span>
                  <Link href="blog-single">0 Comments</Link>
                </div>
                <h4>
                  <Link href="blog-single">
                    Unleashing the Creative Power of AI: Exploring Image
                    Generation
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
