import Image from "next/image";
import Thumb from "@/public/images/about-banner-thumb.png";

const AboutPoster = () => {
  return (
    <div className="section about-thumb pb-0 appear-down" id="scrollPosition">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-banner-thumb">
              <Image src={Thumb} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPoster;
