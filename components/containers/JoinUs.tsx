import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="footer-cmn__cta text-center appear-down">
          <h2 className="title fw-7 title-animation">Join Us Today</h2>
          <div className="section__content-cta">
            <Link href="sign-in" className="btn btn--primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
