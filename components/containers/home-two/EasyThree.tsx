import Image from "next/image";
import Bot from "@/public/images/bot-three.png";
import One from "@/public/images/r-d.png";
import Two from "@/public/images/wave.png";
import Three from "@/public/images/r-d-t.png";

const EasyThree = () => {
  return (
    <section className="section easy easy--secondary position-relative">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="easy__thumb dir-rtl reveal-img d-block parallax-img">
              <Image src={Bot} alt="Image" className="unset" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 offset-xl-1">
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
                <div className="easy__cta">
                  <div className="easy__cta-single">
                    <div className="content">
                      <h4>Chatbot</h4>
                      <p>Customization</p>
                    </div>
                    <div className="thumb">
                      <Image src={One} alt="Image" priority />
                    </div>
                  </div>
                  <div className="easy__cta-single easy__cta-single-alt">
                    <div className="thumber">
                      <Image src={Two} alt="Image" priority />
                    </div>
                    <div className="content">
                      <h4>Voice</h4>
                      <p>Recognition</p>
                    </div>
                    <div className="thumb">
                      <Image src={Three} alt="Image" priority />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyThree;
