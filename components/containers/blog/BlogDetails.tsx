import Image from "next/image";
import poster from "@/public/images/blog-details/poster.png";
import one from "@/public/images/blog-details/info-one.png";
import two from "@/public/images/blog-details/info-two.png";
import { userComments } from "@/public/data/comments";
import BlogDetailsSidebar from "./BlogDetailsSidebar";
import Comments from "./Comments";

const BlogDetails = () => {
  return (
    <section className="section b-details sticky-parent">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-8">
            <div className="b-details__content sticky-item">
              <div className="poster poster-img slide-top">
                <Image src={poster} alt="Image" priority />
              </div>
              <div className="b-details-meta">
                <span className="cate">AI</span>
                <span className="time">21 April 2023</span> -
                <span className="r-time">2 min read</span>
              </div>
              <div className="text-group slide-top">
                <h2 className="title-animation fw-7 text-white">
                  There are many AI words that have been watered out
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  vitae ultrices id venenatis sit tincidunt. Id ullamcorper at
                  euismod aliquam mauris turpis id rhoncus, consectetur. At
                  vulputate vitae, ultrices tempor iaculis habitant velit
                  tellus. A quisque arcu eu sodales sed. Ullamcorper et a enim
                  tincidunt fames sed. Dignissim maecenas in leo et fermentum ut
                  iaculis. In aliquam ornare sed pellentesque tempus venenatis,
                  ac. Sodales varius eu mi, nunc commodo ipsum. Sed vel gravida
                  scelerisque pellentesque. Sed nibh quam aliquam proin accumsan
                  est. Praesent nulla auctor facilisis dui vestibulum commodo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  vitae ultrices id venenatis sit tincidunt. Id ullamcorper at
                  euismod aliquam mauris turpis id rhoncus, consectetur. At
                  vulputate vitae, ultrices tempor iaculis habitant velit
                  tellus. A quisque arcu eu sodales sed. Ullamcorper et a enim
                  tincidunt fames sed. Dignissim maecenas in leo et fermentum ut
                  iaculis. In aliquam ornare sed pellentesque tempus venenatis,
                  ac.
                </p>
              </div>
              <div className="text-group slide-top">
                <ol className="mt-0">
                  <li>
                    Style Transfer: Tools that allow users to apply artistic
                    styles to their images, transforming them into various
                    artistic representations, such as impressionism, cubism, or
                    surrealism.
                  </li>
                  <li>
                    {" "}
                    Super-Resolution: Tools that enhance the resolution and
                    details of images, producing sharper and more detailed
                    versions of the original images.
                  </li>
                  <li>
                    Image-to-Image Translation: Tools that enable users to
                    transform images from one domain to another, such as
                    converting daytime scenes to nighttime, changing the season
                    of a landscape, or turning sketches into photorealistic
                    images.
                  </li>
                  <li>
                    Deep Dream: Tools that generate surreal and dreamlike images
                    by amplifying and enhancing specific patterns within images,
                    resulting in visually striking and abstract representations.
                  </li>
                  <li>
                    Style Transfer: Tools that allow users to apply artistic
                    styles to their images, transforming them into various
                    artistic representations, such as impressionism, cubism, or
                    surrealism.
                  </li>
                  <li>
                    {" "}
                    Super-Resolution: Tools that enhance the resolution and
                    details of images, producing sharper and more detailed
                    versions of the original images.
                  </li>
                </ol>
              </div>
              <div className="img-group">
                <div className="poster-img mb-0 slide-top">
                  <Image src={one} alt="Image" priority />
                </div>
                <div className="poster-img mb-0 slide-top">
                  <Image src={two} alt="Image" priority />
                </div>
              </div>
              <div className="b-comment">
                <h3 className="title-animation fw-7 text-white mt-12">
                  Comments
                </h3>
                <div className="b-comment__wrapper">
                  {userComments.map((item) => {
                    return <Comments key={item.id} item={item} />;
                  })}
                </div>
              </div>
              <div className="w-comment slide-top">
                <h3 className="fw-7 title-animation text-white">
                  Write a comment
                </h3>
                <form action="#" method="post">
                  <div className="input-group">
                    <div className="input-single">
                      <input
                        type="text"
                        name="a-name"
                        id="aName"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="input-single">
                      <input
                        type="email"
                        name="a-email"
                        id="aemail"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="input-single">
                    <textarea
                      name="a-comment"
                      id="aComment"
                      cols={30}
                      rows={10}
                      placeholder="Write Your Comment"
                    ></textarea>
                  </div>
                  <div className="section__content-cta">
                    <button type="submit" className="btn btn--primary">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <BlogDetailsSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
