import Image from "next/image";
import Link from "next/link";
import unlockThumb from "@/public/images/unlock-thumb.png";

const UnlockSection = () => {
  return (
    <section className="section unlock pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Power</span>
              <h2 className="title title-animation">
                Unlock The Future Power of AI
              </h2>
              <p>
                Aikeu is a fascinating AI image generator that allows users to
                breed and evolve images. It combines
              </p>
              <div className="section__content-cta">
                <Link href="shop" className="btn btn--primary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-6 offset-xxl-2">
            <div className="unlock__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={unlockThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
