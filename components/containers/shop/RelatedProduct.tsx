import Image from "next/image";
import Link from "next/link";
import { relatedProductsData } from "@/public/data/related-product";

const RelatedProduct = () => {
  return (
    <section className="section new-prompts fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title mt-12 title-animation">
                      Related Product
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link href="shop" className="btn btn--primary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {relatedProductsData.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div className="category__single fade-top">
                  <div className="thumb">
                    <Link href="product-single" className="thumb-img">
                      <Image src={item.productImage} alt="Image" priority />
                    </Link>
                    <Link href="shop" className="tag text-capitalize">
                      <Image src={item.categoryLogo} alt="Image" priority />
                      {item.category}
                    </Link>
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="product-single">{item.title}</Link>
                    </h5>
                    <p className="tertiary-text">${item.price}</p>
                  </div>
                  <hr />
                  <div className="meta">
                    <div className="meta-info">
                      <div className="meta-thumb">
                        <Image src={item.author} alt="Image" priority />
                      </div>
                      <p className="tertiary-text">{item.authorName}</p>
                    </div>
                    <div className="meta-review">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="cta">
                    <Link href="product-single" className="btn btn--quaternary">
                      Get Prompts
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

export default RelatedProduct;
