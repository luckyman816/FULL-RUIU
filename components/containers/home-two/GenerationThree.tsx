import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/tools-thumb-two.png";

const GenerationThree = () => {
  return (
    <section className="section gen pb-0" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="section__content">
              <span className="sub-title-two">Chat Bot</span>
              <h2 className="title title-animation">
                AI Chatbot Solutions for the Modern World
              </h2>
              <p>
                Powered by advanced natural language processing and machine
                learning algorithms, our chatbot provides intuitive and
                human-like conversations that adapt to your needs.
              </p>
              <div className="section__content-cta">
                <Link href="sign-in" className="btn btn--primary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1">
            <div className="gen__thumb">
              <div className="reveal-img parallax-img">
                <Image src={Thumb} alt="Image" className="unset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationThree;
