import Image from "next/image";
import Link from "next/link";
import { categoryProductsData } from "@/public/data/category-product";
import CustomRangeSlider from "../CustomRangeSlider";

const ShopSection = () => {
  return (
    <section className="section shop sticky-parent">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="shop__sidebar sticky-item">
              <div className="shop-sidebar-single shop-search-bar">
                <form action="#" method="post">
                  <div className="search-group">
                    <input
                      type="text"
                      name="product-search"
                      id="ProductSearch"
                      placeholder="Search.."
                      required
                    />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="shop-sidebar-single shop-category">
                <h3 className="title-animation fw-6 text-white mt-12">
                  Category
                </h3>
                <ul className="check-group">
                  <li className="check-group-single">
                    <input type="checkbox" name="product-ai" id="productAi" />
                    <label htmlFor="productAi">AI</label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-Prompts"
                      id="productPrompts"
                    />
                    <label htmlFor="productPrompts">Prompts</label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-Robo"
                      id="productRobo"
                    />
                    <label htmlFor="productRobo">Robo</label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-Gaming"
                      id="productGaming"
                    />
                    <label htmlFor="productGaming">Gaming</label>
                  </li>
                </ul>
              </div>
              <div className="shop-sidebar-single shop-type">
                <h3 className="title-animation fw-6 text-white mt-12">Type</h3>
                <ul className="check-group">
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-Chatgpt"
                      id="productChatgpt"
                    />
                    <label htmlFor="productChatgpt">Chatgpt</label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-Midjourney"
                      id="productMidjourney"
                    />
                    <label htmlFor="productMidjourney">Midjourney</label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-Bard"
                      id="productBard"
                    />
                    <label htmlFor="productBard">Bard</label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-Dalle"
                      id="productDalle"
                    />
                    <label htmlFor="productDalle">Dalle</label>
                  </li>
                </ul>
              </div>
              <div className="shop-sidebar-single shop-price">
                <h3 className="title-animation fw-6 text-white mt-12">Price</h3>
                <div className="price-box">
                  <CustomRangeSlider />
                </div>
              </div>
              <div className="shop-sidebar-single shop-rating">
                <h3 className="title-animation fw-6 text-white mt-12">
                  Rating
                </h3>
                <ul className="check-group">
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-FiveStar"
                      id="productFiveStar"
                    />
                    <label htmlFor="productFiveStar">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-FourStar"
                      id="productFourStar"
                    />
                    <label htmlFor="productFourStar">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-ThreeStar"
                      id="productThreeStar"
                    />
                    <label htmlFor="productThreeStar">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-TwoStar"
                      id="productTwoStar"
                    />
                    <label htmlFor="productTwoStar">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </label>
                  </li>
                  <li className="check-group-single">
                    <input
                      type="checkbox"
                      name="product-OneStar"
                      id="productOneStar"
                    />
                    <label htmlFor="productOneStar">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="shop__content sticky-item">
              <div className="row gaper">
                {categoryProductsData.slice(0, 8).map((item) => {
                  return (
                    <div className="col-12 col-md-6 slide-top" key={item.id}>
                      <div className="category__single topy-tilt">
                        <div className="thumb">
                          <Link href="product-single" className="thumb-img">
                            <Image
                              src={item.productImage}
                              alt="Image"
                              priority
                            />
                          </Link>
                          <Link href="shop" className="tag">
                            <Image
                              src={item.categoryLogo}
                              alt="Image"
                              priority
                            />
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
                          <Link
                            href="product-single"
                            className="btn btn--quaternary"
                          >
                            Get Prompts
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="section__cta">
                    <ul className="pagination">
                      <li>
                        <button>
                          <i className="fa-solid fa-angle-left"></i>
                        </button>
                      </li>
                      <li>
                        <Link href="projects">1</Link>
                      </li>
                      <li>
                        <Link href="projects" className="active">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link href="projects">3</Link>
                      </li>
                      <li>
                        <button>
                          <i className="fa-solid fa-angle-right"></i>
                        </button>
                      </li>
                    </ul>
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

export default ShopSection;
