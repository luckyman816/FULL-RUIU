import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/shape-one.png";

const AboutCraft = () => {
  return (
    <section className="section pb-0 craft">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">AI Image</span>
              <h2 className="title title-animation">
                Crafting Tomorrow&apos;s Images with Artificial Intelligence
              </h2>
              <p>
                AI image generation tools have emerged as powerful resources in
                the realm of digital art and design. These cutting-edge tools
                leverage advanced.
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
                <Image src={CraftThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default AboutCraft;
