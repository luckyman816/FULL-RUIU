import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/n-level-thumb.png";
import Wheel from "@/public/images/wheel.png";

const NextLevel = () => {
  return (
    <section className="section n-level" id="scrollPosition">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5">
            <div className="n-level__thumb reveal-img parallax-img dir-rtl">
              <Image src={Thumb} alt="Image" className="unset" />
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className="n-level__content section__content">
              <div className="s-thumb">
                <Image src={Wheel} alt="Image" priority />
              </div>
              <h2 className="title title-animation">
                Discover AI-Generated Prompts for Your Writing Journey
              </h2>
              <p>
                With user-friendly features and a sleek interface, PromptPro AI
                provides a hassle-free experience. Dive into a world of
                creativity, effortlessly generating storylines, character
                sketches, and thought-provoking scenarios.
              </p>
              <div className="section__content-cta">
                <Link href="sign-in" className="btn btn--primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextLevel;
