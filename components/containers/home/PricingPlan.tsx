"use client";
import { useState } from "react";
import Link from "next/link";

const PricingPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section pricing pb-0 fade-wrapper pr-i">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="section__header text-center">
              <h2 className="title mt-12 title-animation">
                Choose your Best Plan
              </h2>
              <p>
                {" "}
                AI image generator tools have emerged as powerful resources for
                unleashing creative possibilities and transforming.
              </p>
              <div className="section__content-cta">
                <button
                  aria-label="get monthly price"
                  className={
                    "price-btn monthly-price " +
                    (isYearly ? " " : " price-btn-active")
                  }
                  onClick={() => setIsYearly(false)}
                >
                  Monthly
                </button>
                <button
                  aria-label="get annual price"
                  className={
                    "price-btn yearly-price " +
                    (isYearly ? " price-btn-active" : " ")
                  }
                  onClick={() => setIsYearly(true)}
                >
                  Annually
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-start gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text">Free</span>
                {isYearly ? (
                  <h2 className="light-title yearly">
                    $0.00
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="light-title monthly">
                    $0.00
                    <span>/ month</span>
                  </h2>
                )}
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Increased image generation
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Access to a wider range
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Basic customer support.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Affordable pricing
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="shop" className="btn btn--secondary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single pricing__single-active topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text">Standard</span>
                {isYearly ? (
                  <h2 className="light-title yearly">
                    $30.00
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="light-title monthly">
                    $9.99
                    <span>/ month</span>
                  </h2>
                )}
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Basic access to the AI image
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Limited number of image
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Watermarked images.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Suitable for users
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="shop" className="btn btn--primary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text premium">Premium</span>
                {isYearly ? (
                  <h2 className="light-title yearly">
                    $50.00
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="light-title monthly">
                    $19.00
                    <span>/ month</span>
                  </h2>
                )}
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Additional features
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Examples include
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Allows users to customize
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Their specific needs
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="shop" className="btn btn--secondary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
