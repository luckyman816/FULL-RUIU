import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/poster-blog.png";

const BlogPoster = () => {
  return (
    <section className="section pb-0 h-s-poster fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="news-alter__single fade-top">
              <div className="thumb">
                <Link href="blog-single">
                  <Image src={poster} alt="Image" priority />
                </Link>
                <Link href="blog-single" className="tags">
                  AI
                </Link>
              </div>
              <div className="content">
                <h2>
                  <Link href="blog-single" className="title-animation">
                    The Rise of AI: Exploring the Impact of Artificial
                    Intelligence on Society
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

export default BlogPoster;
