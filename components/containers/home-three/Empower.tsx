import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/empower-thumb.png";

const Empower = () => {
  return (
    <section className="section empower fade-wrapper">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="section__content">
              <span className="sub-title-two text-primary">AR/VR</span>
              <h2 className="title title-animation">
                Empowering Gamers with AI Technology
              </h2>
              <p>
                {" "}
                We are dedicated to pushing the boundaries of interactive
                entertainment by harnessing the power of AI technology. With our
                innovative approach, we bring you a new era of gaming that is
                intelligent.
              </p>
              <div className="section__content-cta">
                <Link href="sign-in" className="btn btn--primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 offset-xl-1">
            <div className="empower__thumb fade-top">
              <Image src={Thumb} alt="Image" priority />
              <div className="content-wrapper">
                <div className="content text-center text-xl-end">
                  <span className="light-title">Gaming</span>
                  <h2>AR/VR</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empower;
