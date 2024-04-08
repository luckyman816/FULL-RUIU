import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/blog-details/side-one.png";
import two from "@/public/images/blog-details/side-two.png";
import three from "@/public/images/blog-details/side-three.png";

const BlogDetailsSidebar = () => {
  return (
    <div className="b-details__sidebar sticky-item">
      <div className="b-details-sidebar-single b-search-bar">
        <form action="#" method="post">
          <div className="search-group">
            <input
              type="text"
              name="post-search"
              id="PostSearch"
              placeholder="Search.."
              required
            />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="b-details-sidebar-single b-category slide-top">
        <h3 className="title-animation fw-6 text-white mt-12">Post Category</h3>
        <ul>
          <li>
            <Link href="blog">
              <span className="material-symbols-outlined">chevron_right</span>
              AI
            </Link>
          </li>
          <li>
            <Link href="blog">
              <span className="material-symbols-outlined">chevron_right</span>
              News
            </Link>
          </li>
          <li>
            <Link href="blog">
              <span className="material-symbols-outlined">chevron_right</span>
              Robo
            </Link>
          </li>
          <li>
            <Link href="blog">
              <span className="material-symbols-outlined">chevron_right</span>
              Gaming
            </Link>
          </li>
        </ul>
      </div>
      <div className="b-details-sidebar-single b-latest-post slide-top">
        <h3 className="title-animation fw-6 text-white mt-12">Latest Post</h3>
        <div className="latest-post-wrapper">
          <div className="latest-post-single">
            <div className="thumb">
              <Link href="blog-single">
                <Image src={one} alt="Image" priority />
              </Link>
            </div>
            <div className="content">
              <p>
                <Link href="blog-single">
                  How Artificial Intelligence is Shaping Our World
                </Link>
              </p>
              <p className="tertiary-text">
                <span className="material-symbols-outlined">schedule</span>21
                JUN, 2022
              </p>
            </div>
          </div>
          <div className="latest-post-single">
            <div className="thumb">
              <Link href="blog-single">
                <Image src={two} alt="Image" priority />
              </Link>
            </div>
            <div className="content">
              <p>
                <Link href="blog-single">
                  Navigating the Challenges of Artificial Intelligence
                </Link>
              </p>
              <p className="tertiary-text">
                <span className="material-symbols-outlined">schedule</span>21
                JUN, 2022
              </p>
            </div>
          </div>
          <div className="latest-post-single">
            <div className="thumb">
              <Link href="blog-single">
                <Image src={three} alt="Image" priority />
              </Link>
            </div>
            <div className="content">
              <p>
                <Link href="blog-single">
                  Balancing Innovation and Security
                </Link>
              </p>
              <p className="tertiary-text">
                <span className="material-symbols-outlined">schedule</span>21
                JUN, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="b-details-sidebar-single b-tags">
        <h3 className="title-animation fw-6 text-white mt-12">Popular Tag</h3>
        <div className="b-tags-wrapper">
          <Link href="blog">Health</Link>
          <Link href="blog">Fitness</Link>
          <Link href="blog">Surgery</Link>
          <Link href="blog">Covide19</Link>
          <Link href="blog">Medical</Link>
          <Link href="blog">Manipulation</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSidebar;
