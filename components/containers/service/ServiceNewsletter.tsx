const ServiceNewsletter = () => {
  return (
    <section className="section s-news">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <h2 className="title title-animation fw-7 text-white mt-12">
              Subscribe our newsletter for more update
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <div className="offcanvas-info__form">
              <form action="#" method="post" autoComplete="off">
                <div className="subscribe-form">
                  <input
                    type="email"
                    name="subscribe-newsletter"
                    id="subscribeNewsletterThree"
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
    </section>
  );
};

export default ServiceNewsletter;
