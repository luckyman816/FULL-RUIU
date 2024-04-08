import Image from "next/image";
import GenThumb from "@/public/images/gen-thumb.png";

const Generation = () => {
  return (
    <section className="section gen pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Tools</span>
              <h2 className="title title-animation">
                AI image generation tools
              </h2>
              <p>
                One of the most prominent techniques in AI image generation is
                the use of Generative Adversarial Networks
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
            <div className="gen__thumb">
              <div className="reveal-img parallax-img">
                <Image src={GenThumb} alt="Image" className="unset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generation;
