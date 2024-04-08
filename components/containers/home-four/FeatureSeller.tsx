import Image from "next/image";
import Link from "next/link";
import { featureSellerData } from "@/public/data/feature-seller";

const FeatureSeller = () => {
  return (
    <section className="section pb-0 feature fade-wrapper fade-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-start">
              <h2 className="title title-animation mt-12">Feature Sellers</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {featureSellerData.map((item) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xxl-3 fade-top"
                key={item.id}
              >
                <div className="feature__single topy-tilt">
                  <div className="thumb">
                    <Image src={item.author} alt="Image" priority />
                    <span className="check">
                      <i className="bi bi-check2"></i>
                    </span>
                  </div>
                  <div className="thumb-content">
                    <p className="fw-6 text-white">{item.authorName}</p>
                    <p>
                      <span>{item.rating} /</span>
                      05
                    </p>
                  </div>
                  <hr />
                  <div className="feature__thumb">
                    <Link href="product-single">
                      <Image src={item.productImage} alt="Image" priority />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSeller;
