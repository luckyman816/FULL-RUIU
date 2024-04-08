import Image from "next/image";
import FooterTwoThumb from "public/images/footer/footer-two-thumb.png";

const Newsletter = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="footer-alter__inner appear-down">
          <div className="row">
            <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
              <div className="footer-alter__content">
                <h2 className="title-animation fw-7">
                  Subscribe To Newsletter
                </h2>
                <div className="offcanvas-info__form">
                  <form action="#" method="post" autoComplete="off">
                    <div className="subscribe-form">
                      <input
                        type="email"
                        name="subscribe-newsletterTwo"
                        id="subscribeNewsletterTwo"
                        placeholder="Email"
                        required
                      />
                      <button
                        type="submit"
                        aria-label="subscribe newsletter"
                        title="subscribe newsletter"
                      >
                        <i className="material-symbols-outlined">send</i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={FooterTwoThumb}
            alt="Image"
            priority
            className="thumber d-none d-md-block"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
