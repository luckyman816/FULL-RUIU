import Image from "next/image";
import Link from "next/link";
import posterThumb from "@/public/images/home-six/poster.png";

const Poster = () => {
  return (
    <section className="section h-s-poster">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="news-alter__single appear-down">
              <div className="thumb">
                <Link href="case-study-single">
                  <Image src={posterThumb} alt="Image" priority />
                </Link>
                <Link href="case-study" className="tags">
                  AI
                </Link>
              </div>
              <div className="content">
                <h2>
                  <Link href="case-study-single" className="title-animation">
                    AI-Driven Prompts for Limitless Creativity
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;
