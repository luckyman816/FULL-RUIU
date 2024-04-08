import Image from "next/image";
import Link from "next/link";
import { blogItemsData } from "@/public/data/blog-items";

const BlogItems = () => {
  return (
    <section className="news-alter m-news-alter section fade-wrapper">
      <div className="container">
        <div className="row gaper">
          {blogItemsData.map((item) => {
            return (
              <div className="col-12 col-md-6 col-xl-4 fade-top" key={item.id}>
                <div className="news-alter__single topy-tilt">
                  <div className="thumb">
                    <Link href="blog-single">
                      <Image src={item.image} alt="Image" priority />
                    </Link>
                    <Link href="blog" className="tags">
                      {item.tag}
                    </Link>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span className="author">{item.author}</span>
                      <span className="time">{item.date}</span>
                    </div>
                    <h4>
                      <Link href="blog-single">{item.title}</Link>
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
            );
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta">
              <ul className="pagination">
                <li>
                  <button>
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                </li>
                <li>
                  <Link href="projects">1</Link>
                </li>
                <li>
                  <Link href="projects" className="active">
                    2
                  </Link>
                </li>
                <li>
                  <Link href="projects">3</Link>
                </li>
                <li>
                  <button>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogItems;
