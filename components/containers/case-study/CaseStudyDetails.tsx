import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/case-details/poster.png";
import one from "@/public/images/case-details/one.png";
import two from "@/public/images/case-details/two.png";
import three from "@/public/images/case-details/three.png";
import quote from "@/public/images/case-details/quote.png";

const CaseStudyDetails = () => {
  return (
    <>
      <section className="section case-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="case-details__inner">
                <div className="poster-img mb-0 slide-top">
                  <Image src={poster} alt="Image" priority />
                </div>
                <div className="case-details-meta">
                  <div className="row gaper align-items-center">
                    <div className="col-12 col-xl-5">
                      <div className="case-meta-left">
                        <h2 className="title-animation fw-7 text-white">
                          Ai Club X
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7">
                      <div className="case-meta-right justify-content-start justify-content-xl-end">
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Category</p>
                          <h5 className="fw-6 text-white">AI</h5>
                        </div>
                        <span className="line"></span>
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Software</p>
                          <h5 className="fw-6 text-white">Figma, JS</h5>
                        </div>
                        <span className="line"></span>
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Service</p>
                          <h5 className="fw-6 text-white">AI</h5>
                        </div>
                        <span className="line"></span>
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Website </p>
                          <h5 className="fw-6 text-white">lead.ai</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case-details__content sticky-parent">
                  <div className="row gaper">
                    <div className="col-12 col-lg-2">
                      <div className="case-d-content-left sticky-item">
                        <p className="tertiary-text text-white">Share</p>
                        <div className="social">
                          <Link
                            href="https://www.facebook.com/"
                            target="_blank"
                            aria-label="share us on facebook"
                            title="facebook"
                          >
                            <i className="bi bi-facebook"></i>
                          </Link>
                          <Link
                            href="https://www.twitter.com/"
                            target="_blank"
                            aria-label="share us on twitter"
                            title="twitter"
                          >
                            <i className="bi bi-twitter"></i>
                          </Link>
                          <Link
                            href="https://www.linkedin.com/"
                            target="_blank"
                            aria-label="share us on pinterest"
                            title="linkedin"
                          >
                            <i className="bi bi-linkedin"></i>
                          </Link>
                          <Link
                            href="https://www.instagram.com/"
                            target="_blank"
                            aria-label="share us on instagram"
                            title="instagram"
                          >
                            <i className="bi bi-instagram"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-10">
                      <div className="case-d-content-right sticky-item">
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-white mt-12">
                            Image to Image Translation
                          </h3>
                          <p>
                            AI can transform images from one domain to another.
                            For example, it can convert a daytime scene to a
                            nighttime scene, or turn a sketch into a
                            photorealistic image. These image-to-image
                            translation techniques rely on advanced AI
                          </p>
                        </div>
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-white mt-12">
                            Overview
                          </h3>
                          <p>
                            They can analyze patterns, recognize images and
                            speech, understand natural language, and even
                            interact with humans through chatbots and virtual
                            assistants. AI is used in various industries, such
                            as healthcare, finance, transportation, and
                            entertainment, to improve efficiency, automate
                            processes, and enhance decision-making. With its
                            potential to transform numerous aspects of our
                            lives, AI is paving the way for a future where
                            intelligent machines work alongside humans to solve
                            complex problems and create new possibilities.
                          </p>
                          <div className="img-group fade-wrapper">
                            <div className="poster-img mb-0 fade-top">
                              <Image src={one} alt="Image" priority />
                            </div>
                            <div className="poster-img mb-0 fade-top">
                              <Image src={two} alt="Image" priority />
                            </div>
                            <div className="poster-img mb-0 fade-top">
                              <Image src={three} alt="Image" priority />
                            </div>
                          </div>
                          <p>
                            Prepare to embark on thrilling adventures, engage in
                            strategic battles, and explore captivating
                            narratives, all enriched by the seamless integration
                            of artificial intelligence. Our commitment to
                            innovation and cutting-edge technology ensures that
                            each gaming experience is tailored to your
                            preferences, creating personalized and unforgettable
                            moments. Join us on this exhilarating journey where
                            AI and gaming combine to elevate the art of play to
                            unprecedented heights. Get ready to immerse yourself
                            in a world where the future of gaming unfolds before
                            your eyes.
                          </p>
                        </div>
                        <div className="text-group">
                          <div className="quote-group">
                            <Image src={quote} alt="Image" priority />
                            <div className="content">
                              <q className="primary-text text-white">
                                And the day came when the risk to remain tight
                                in a bud was more painful than the risk it took
                                to blossom.
                              </q>
                              <p className="tertiary-text">Alen Marlo</p>
                            </div>
                          </div>
                          <p>
                            Prepare to embark on thrilling adventures, engage in
                            strategic battles, and explore captivating
                            narratives, all enriched by the seamless integration
                            of artificial intelligence. Our commitment to
                            innovation and cutting-edge technology ensures that
                            each gaming experience is tailored to your
                            preferences
                          </p>
                        </div>
                      </div>
                    </div>
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

export default CaseStudyDetails;
