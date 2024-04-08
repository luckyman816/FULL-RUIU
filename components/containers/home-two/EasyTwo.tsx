import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/easy-two-thumb.png";

const EasyTwo = () => {
  return (
    <section className="section easy-two position-relative">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="easy__thumb reveal-img parallax-img">
              <Image src={Thumb} alt="Image" priority />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="section__content">
              <span className="sub-title-two">Chat Bot</span>
              <h2 className="title title-animation">
                Make Your Life Easier With Aikeu Chatbot
              </h2>
              <p>
                AI chatbots can generate analytics and insights on user
                interactions, including user preferences, frequently asked
                questions, and areas for improvement.
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

export default EasyTwo;
