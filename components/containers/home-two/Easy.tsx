import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/easy-thumb.png";

const Easy = () => {
  return (
    <section className="section easy pb-0 position-relative">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="easy__thumb dir-rtl reveal-img d-block parallax-img">
              <Image src={Thumb} alt="Image" className="unset" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-2">
            <div className="section__content">
              <span className="sub-title-two">Chat Bot</span>
              <h2 className="title title-animation">
                Use To Easy Chatbot Your Daily Life
              </h2>
              <p>
                With its deep understanding of context and ability to learn from
                every interaction, our chatbot delivers efficient and accurate
                responses, saving you time and effort. Experience the future of
                communication with our AI chatbot and unlock a world of
                possibilities.
              </p>
              <div className="section__content-cta">
                <Link href="sign-in" className="btn btn--primary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easy;
