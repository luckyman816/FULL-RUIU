"use client";
import { useState } from "react";
import Link from "next/link";

const PricingPlanTwo = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section pricing pricing--secondary pb-0 fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="section__header text-center">
              <span className="sub-title-two text-primary">Pricing</span>
              <h2 className="title  title-animation">Choose your Best Plan</h2>
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
          <div className="col-12 col-md-6">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text fw-5 stand">Standard</span>
                <p className="tertiary-text">
                  Explore a New Era of Intelligent and Immersive Gaming
                  Adventures
                </p>
                {isYearly ? (
                  <h2 className="yearly">
                    $9.00
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="monthly">
                    $76.00
                    <span>/ month</span>
                  </h2>
                )}
              </div>
              <div className="pricing__content">
                <h5 className="fw-5 text-white">What&apos;s included</h5>
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
                </ul>
                <div className="pricing__cta">
                  <Link href="sign-in" className="btn btn--primary">
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text fw-5 premium">Premium</span>
                <p className="tertiary-text">
                  Explore a New Era of Intelligent and Immersive Gaming
                  Adventures
                </p>
                {isYearly ? (
                  <h2 className="yearly">
                    $19.00
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="monthly">
                    $90.00
                    <span>/ month</span>
                  </h2>
                )}
              </div>
              <div className="pricing__content">
                <h5 className="fw-5 text-white">What&apos;s included</h5>
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
                </ul>
                <div className="pricing__cta">
                  <Link href="sign-in" className="btn btn--primary">
                    Get started
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

export default PricingPlanTwo;
