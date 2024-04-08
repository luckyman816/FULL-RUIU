import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/gaming/one.png";
import two from "@/public/images/gaming/two.png";
import three from "@/public/images/gaming/three.png";

const GamingThree = () => {
  return (
    <section className="section pb-0 gaming">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center justify-content-center gaper">
                <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <span className="sub-title-two text-primary">
                      Upgrade Gaming
                    </span>
                    <h2 className="title title-animation">
                      Experience Next-Level Gameplay like Never Before
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 offset-xl-1">
                  <div className="text-center text-lg-start">
                    <p>
                      Our commitment to innovation and cutting-edge technology
                      ensures that each gaming your preferences, creating
                      personalized and unforgettable moments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-xl-6">
            <div className="gaming__single-alt fade-top">
              <div className="thumb">
                <Link href="product-single">
                  <Image src={one} alt="Image" priority />
                </Link>
              </div>
              <div className="content">
                <Link href="shop" className="tag">
                  VR Gaming
                </Link>
                <h4>
                  <Link href="product-single">Travel Holph</Link>
                </h4>
                <div className="info">
                  <p className="tertiary-text">Release Date</p>
                  <p className="text-white">April 18, 2023 at +06</p>
                </div>
                <hr />
                <div className="cta">
                  <Link href="product-single">View Details</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="gaming__single fade-top">
              <div className="thumb">
                <Link href="product-single">
                  <Image src={two} alt="Image" priority />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="gaming__single fade-top">
              <div className="thumb">
                <Link href="product-single">
                  <Image src={three} alt="Image" priority />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta text-center">
              <Link href="shop" className="btn btn--primary">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingThree;
