import Image from "next/image";
import Link from "next/link";
import five from "@/public/images/home-six/five.png";
import six from "@/public/images/home-six/six.png";
import seven from "@/public/images/home-six/seven.png";
import eight from "@/public/images/home-six/eight.png";
import nine from "@/public/images/home-six/nine.png";
import smposter from "@/public/images/home-six/sm-poster.png";

const BlogThree = () => {
  return (
    <>
      <section className="news-alter section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header text-center">
                <h2 className="title title-animation mt-12">Top News</h2>
              </div>
            </div>
          </div>
          <div className="row gaper section pt-0 fade-wrapper">
            <div className="col-12 col-md-6 col-xl-4">
              <div className="news-alter__single fade-top">
                <div className="thumb">
                  <Link href="blog-single">
                    <Image src={five} alt="Image" priority />
                  </Link>
                  <Link href="blog" className="tags">
                    AI
                  </Link>
                </div>
                <div className="content">
                  <div className="meta">
                    <span className="author">Alen Bard</span>
                    <span className="time">05 July 2022</span>
                  </div>
                  <h4>
                    <Link href="blog-single">
                      There are many spa words that have been watered out
                    </Link>
                  </h4>
                  <div className="cta">
                    <Link href="blog-single">
                      Learn More
                      <span className="material-symbols-outlined">
                        trending_flat
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="news-alter__single fade-top">
                <div className="thumb">
                  <Link href="blog-single">
                    <Image src={six} alt="Image" priority />
                  </Link>
                  <Link href="blog" className="tags">
                    AI
                  </Link>
                </div>
                <div className="content">
                  <div className="meta">
                    <span className="author">Alen Bard</span>
                    <span className="time">05 July 2022</span>
                  </div>
                  <h4>
                    <Link href="blog-single">
                      There are many spa words that have been watered out
                    </Link>
                  </h4>
                  <div className="cta">
                    <Link href="blog-single">
                      Learn More
                      <span className="material-symbols-outlined">
                        trending_flat
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="news-alter__single fade-top">
                <div className="thumb">
                  <Link href="blog-single">
                    <Image src={seven} alt="Image" priority />
                  </Link>
                  <Link href="blog" className="tags">
                    AI
                  </Link>
                </div>
                <div className="content">
                  <div className="meta">
                    <span className="author">Alen Bard</span>
                    <span className="time">05 July 2022</span>
                  </div>
                  <h4>
                    <Link href="blog-single">
                      There are many spa words that have been watered out
                    </Link>
                  </h4>
                  <div className="cta">
                    <Link href="blog-single">
                      Learn More
                      <span className="material-symbols-outlined">
                        trending_flat
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gaper fade-wrapper">
            <div className="col-12 col-lg-6">
              <div className="news-alter__single news-alter-single-alt fade-top">
                <div className="thumb">
                  <Link href="blog-single">
                    <Image src={smposter} alt="Image" priority />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="news-alter__single news-alter-single-alt">
                <div className="news-alter-single fade-top">
                  <div className="thumb">
                    <Link href="blog-single">
                      <Image src={eight} alt="Image" priority />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span className="time">
                        <span className="material-symbols-outlined">
                          schedule
                        </span>{" "}
                        05 July 2022
                      </span>
                    </div>
                    <h4>
                      <Link href="blog-single">
                        All cardiologists study the disorders of the heart, but
                        the study
                      </Link>
                    </h4>
                  </div>
                </div>
                <hr />
                <div className="news-alter-single fade-top">
                  <div className="thumb">
                    <Link href="blog-single">
                      <Image src={nine} alt="Image" priority />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span className="time">
                        <span className="material-symbols-outlined">
                          schedule
                        </span>{" "}
                        05 July 2022
                      </span>
                    </div>
                    <h4>
                      <Link href="blog-single">
                        All cardiologists study the disorders of the heart, but
                        the study
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <hr className="horizon" />
        </div>
      </div>
    </>
  );
};

export default BlogThree;
