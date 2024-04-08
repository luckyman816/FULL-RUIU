import Image from "next/image";
import ToolsThumb from "@/public/images/tools-thumb.png";

const Tools = () => {
  return (
    <section className="section tools pb-0">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-7">
            <div className="tools__thumb dir-rtl">
              <div className="reveal-img parallax-img">
                <Image src={ToolsThumb} alt="Image" className="unset" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-4 offset-xxl-1 order-first order-lg-last">
            <div className="section__content">
              <span className="sub-title">Future</span>
              <h2 className="title title-animation">
                Unleashing the Glorious Future of AI-Generated Images
              </h2>
              <p>
                One of the most prominent techniques in AI image generation is
                the use of Generative Adversarial Networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
