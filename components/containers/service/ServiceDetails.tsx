import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/services/poster.png";
import one from "@/public/images/services/info-one.png";
import two from "@/public/images/services/info-two.png";

const ServiceDetails = () => {
  return (
    <section className="section s-details sticky-parent">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-8">
            <div className="s-details__content sticky-item">
              <div className="poster poster-img slide-top">
                <Image src={poster} alt="Image" priority />
              </div>
              <div className="text-group slide-top">
                <p>
                  Welcome to our AI Image Generation website, where creativity
                  meets technology! Harnessing the power of artificial
                  intelligence, we bring you a world of limitless possibilities
                  for image creation and transformation. Our advanced
                  algorithms, including Generative Adversarial Networks, enable
                  us to generate stunning and realistic images that push the
                  boundaries of imagination. With AI-powered style transfer, you
                  can explore different artistic styles and transform your
                  photos into captivating works of art. Experience the magic of
                  super-resolution as we enhance the resolution and details of
                  your images, bringing them to life with astounding clarity.
                </p>
              </div>
              <div className="text-group slide-top">
                <h4>AI image generation techniques can also fill in missing</h4>
                <p>
                  where dreams and reality intertwine to create surreal and
                  mesmerizing visuals. And when it comes to filling in missing
                  or damaged parts of images, our AI-powered inpainting
                  algorithms seamlessly restore the beauty and completeness of
                  your pictures.
                </p>
                <p>
                  And when it comes to filling in missing or damaged parts of
                  images, our AI-powered inpainting algorithms seamlessly
                  restore the beauty and completeness of your pictures.
                </p>
              </div>
              <div className="img-group fade-wrapper">
                <div className="poster-img mb-0 fade-top">
                  <Image src={one} alt="Image" priority />
                </div>
                <div className="poster-img mb-0 fade-top">
                  <Image src={two} alt="Image" priority />
                </div>
              </div>
              <div className="text-group slide-top">
                <p>
                  Welcome to our AI Image Generation website, where creativity
                  meets technology! Harnessing the power of artificial
                  intelligence, we bring you a world of limitless possibilities
                  for image creation and transformation. Our advanced
                  algorithms, including Generative Adversarial Networks, enable
                  us to generate stunning and realistic images that push the
                  boundaries of imagination. With AI-powered style transfer, you
                  can explore different artistic styles and transform your
                  photos into captivating works of art. Experience the magic of
                  super-resolution as we enhance the resolution and details of
                  your images, bringing them to life with astounding clarity.
                </p>
                <ol>
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
                </ol>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="s-details__sidebar sticky-item">
              <div className="s-details-single text-center slide-top sb-i">
                <h3 className="fw-7 text-white">Get the Service</h3>
                <div className="section__content-cta">
                  <Link href="sign-in" className="btn btn--primary">
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="s-details-contact slide-top">
                <h3 className="text-white fw-7">Contact Us</h3>
                <ul className="section__content-cta">
                  <li>
                    <Link href="mailto:contact.vertio@gmail.com">
                      <span className="material-symbols-outlined">mail</span>
                      contact.vertio@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:1-658-361-253">
                      <span className="material-symbols-outlined">call</span>+1
                      658 361 253
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.google.com/maps/search/Ms+Alice+Smith+Apartment+1c+213+Derrick+Street+Boston,+MA+02130+USA/@42.3144474,-71.0526841,12z/data=!3m1!4b1?entry=ttu"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Ms Alice Smith Apartment 1c 213 Derrick Street Boston, MA
                      02130 USA
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
