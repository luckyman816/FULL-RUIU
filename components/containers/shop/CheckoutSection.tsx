import Image from "next/image";
import one from "@/public/images/cart.png";
import two from "@/public/images/cart-two.png";

const CheckoutSection = () => {
  return (
    <section className="checkout-m fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h2 className="light-title fw-7 text-white title-animation mt-12">
                CheckOut
              </h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-7">
            <div className="checkout-m__form">
              <div className="intro">
                <h4>Shipping Address</h4>
              </div>
              <form action="#" method="post">
                <div className="input-group">
                  <div className="input-single">
                    <input
                      type="text"
                      name="check-name"
                      id="checkName"
                      placeholder="Your Name*"
                      required
                    />
                  </div>
                  <div className="input-single">
                    <input
                      type="email"
                      name="check-email"
                      id="checkemail"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-single">
                    <input
                      type="number"
                      name="check-number"
                      id="checkNumber"
                      placeholder="Phone Number*"
                      required
                    />
                  </div>
                  <div className="input-single">
                    <input
                      type="email"
                      name="check-code"
                      id="checkcode"
                      placeholder="Post Code*"
                      required
                    />
                  </div>
                </div>
                <div className="input-single">
                  <textarea
                    name="check-address"
                    id="checkaddress"
                    cols={30}
                    rows={10}
                    placeholder="Your Address*"
                  ></textarea>
                </div>
                <div className="section__cta text-start">
                  <button type="submit" className="btn btn--primary">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-5 order-first order-lg-last">
            <div className="checkout-m__content fade-top">
              <h5 className="mt-12 text-white fw-6">Your Order</h5>
              <hr />
              <div className="item-signle">
                <div className="item-thumb">
                  <div className="thumb">
                    <Image src={two} alt="Image" priority />
                  </div>
                  <div className="cart-content">
                    <p>Creative Design</p>
                    <p>$24</p>
                  </div>
                </div>
                <div className="item-qty">
                  <span>1</span>
                </div>
              </div>
              <div className="item-signle">
                <div className="item-thumb">
                  <div className="thumb">
                    <Image src={one} alt="Image" priority />
                  </div>
                  <div className="cart-content">
                    <p>Image Prompt</p>
                    <p>$14</p>
                  </div>
                </div>
                <div className="item-qty">
                  <span>3</span>
                </div>
              </div>
              <div className="item-overview">
                <p>
                  <span>Delivery</span>
                  <span>$10</span>
                </p>
                <p>
                  <span>Discount</span>
                  <span>$8</span>
                </p>
              </div>
              <div className="item-total">
                <h3>Total</h3>
                <h3>$68</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
