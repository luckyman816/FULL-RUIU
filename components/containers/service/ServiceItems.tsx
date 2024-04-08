import Image from "next/image";
import Link from "next/link";
import { serviceItemsData } from "@/public/data/service";

const ServiceItems = () => {
  return (
    <div className="section pb-0 s-main fade-wrapper">
      <div className="container">
        <div className="row gaper">
          {serviceItemsData.map((item) => {
            return (
              <div className="col-12 col-md-6 col-xl-4" key={item.id}>
                <div className="s-main__single fade-top">
                  <div className="thumb">
                    <Link href="service-single">
                      <Image src={item.productImg} alt="Image" priority />
                    </Link>
                  </div>
                  <div className="content">
                    <Link
                      href="service-single"
                      className="primary-text btn btn--secondary"
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
