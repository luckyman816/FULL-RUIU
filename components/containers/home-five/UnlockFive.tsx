import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/h-unlock-thumb.png";
import ThumbTwo from "@/public/images/overview/four.png";

const UnlockFive = () => {
  return (
    <section className="section pb-0 h-unlock">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="h-unlock__thumb reveal-img parallax-img">
              <Image src={Thumb} alt="Image" priority />
              <div className="h-u-t-content">
                <h2>
                  Unlock
                  <br /> The Power
                  <br /> of AI
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="section__content">
              <div className="s-thumb">
                <Image src={ThumbTwo} alt="Image" priority />
              </div>
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

export default UnlockFive;
