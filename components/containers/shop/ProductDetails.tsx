"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductDetailsSlider from "./ProductDetailsSlider";
import one from "@/public/images/blog-details/a-one.png";
import { userReviewData } from "@/public/data/user-review";
import UserReview from "./UserReview";

const ProductDetails = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="section pb-0 p-details">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-info">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-6">
                  <ProductDetailsSlider />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="product__content">
                    <h2 className="title-animation fw-7 text-white">
                      Manipulation
                    </h2>
                    <div className="product-meta">
                      <div className="product-price">
                        <p className="product-discount primary-text">
                          <span className="dis-per">10%</span> Off
                        </p>
                        <div className="product-m-price">
                          <p className="primary-text ">
                            <span className="deleted-price">$50.00</span>
                            <span className="current-price">$40.00</span>
                          </p>
                          <div className="product-review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="paragraph">
                      <p>
                        Our image-to-image translation capabilities allow you to
                        embark on a visual journey, turning day into night or
                        converting sketches into photorealistic masterpieces.
                      </p>
                    </div>
                    <div className="tags">
                      <p className="text-white">Tag</p>
                      <div className="tags-wrapper">
                        <Link href="shop">AI</Link>
                        <Link href="shop">Photo</Link>
                        <Link href="shop">Art</Link>
                        <Link href="shop">Midjourney</Link>
                        <Link href="shop">Chatgpt</Link>
                        <Link href="shop">Manipulation</Link>
                      </div>
                    </div>
                    <div className="product-cta section__content-cta">
                      <Link href="cart" className="btn btn--primary">
                        Get Prompts
                      </Link>
                      <button>
                        <span className="material-symbols-outlined">
                          favorite
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-details__tab">
              <div className="p-details__tab-btn">
                <button
                  className={`p-d-t-btn ${
                    activeTabIndex === 0 ? "p-d-t-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(0)}
                >
                  Description
                </button>
                <button
                  className={`p-d-t-btn ${
                    activeTabIndex === 1 ? "p-d-t-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  Review
                </button>
                <button
                  className={`p-d-t-btn ${
                    activeTabIndex === 2 ? "p-d-t-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  Author
                </button>
              </div>
              <div className="p-d-t-wrapper">
                <div
                  className={`p-details__tab-single ${
                    activeTabIndex === 0 ? "active-tab" : ""
                  }`}
                >
                  <div className="description-content">
                    <p>
                      Our image-to-image translation capabilities allow you to
                      embark on a visual journey, turning day into night or
                      converting sketches into photorealistic masterpieces.
                      Immerse yourself in the realm of Deep Dream, where dreams
                      and reality intertwine to create surreal and mesmerizing
                      visuals. And when it comes to filling in missing or
                      damaged parts of images, our AI-powered inpainting
                      algorithms seamlessly .
                    </p>
                    <p>
                      Immerse yourself in the realm of Deep Dream, where dreams
                      and reality intertwine to create surreal and mesmerizing
                      visuals. And when it comes to filling in missing or
                      damaged parts of images, our AI-powered inpainting
                      algorithms seamlessly .
                    </p>
                  </div>
                </div>
                <div
                  className={`p-details__tab-single ${
                    activeTabIndex === 1 ? "active-tab" : ""
                  }`}
                >
                  <div className="review-content">
                    <div className="row">
                      <div className="col-12 col-xl-9">
                        <div className="b-comment__wrapper">
                          {userReviewData.map((item) => {
                            return <UserReview key={item.id} item={item} />;
                          })}
                        </div>
                        <div className="w-comment">
                          <h3 className="fw-7 title-animation text-white">
                            Write a comment
                          </h3>
                          <form action="#" method="post">
                            <div className="input-group">
                              <div className="input-single">
                                <input
                                  type="text"
                                  name="a-name"
                                  id="aName"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                              <div className="input-single">
                                <input
                                  type="email"
                                  name="a-email"
                                  id="aemail"
                                  placeholder="Your Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="input-single">
                              <textarea
                                name="a-comment"
                                id="aComment"
                                cols={30}
                                rows={10}
                                placeholder="Write Your Comment"
                              ></textarea>
                            </div>
                            <div className="section__content-cta">
                              <button
                                type="submit"
                                className="btn btn--primary"
                              >
                                Submit Now
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`p-details__tab-single author-content ${
                    activeTabIndex === 2 ? "active-tab" : ""
                  }`}
                >
                  <div className="thumb">
                    <Image src={one} alt="Image" priority />
                  </div>
                  <div className="content">
                    <h4>@Esther </h4>
                    <p className="tertiary-text">Product: 24</p>
                    <p className="tertiary-text">Review: 4.5/5</p>
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

export default ProductDetails;
