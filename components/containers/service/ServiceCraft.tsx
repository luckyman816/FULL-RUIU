import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/home-seven/six.png";

const ServiceCraft = () => {
  return (
    <section className="section craft craft-alt">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Future Of Ai</span>
              <h2 className="title title-animation">
                Revolutionizing the Writing Experience through AI
              </h2>
              <p>
                With user-friendly features and a sleek interface, PromptPro AI
                provides a hassle-free experience. Dive into a world of
                creativity, effortlessly generating storylines, character
                sketches, and thought-provoking scenarios.
              </p>
              <div className="section__content-cta">
                <Link href="shop" className="btn btn--primary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={Thumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCraft;
