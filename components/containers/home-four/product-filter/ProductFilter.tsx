"use client";
import { useState, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/public/data/product-data";
import ProductFilterButtons from "./ProductFilterButtons";
import { AnimatePresence, motion } from "framer-motion";

const ProductFilter = () => {
  const [active, setActive] = useState("all");
  const [displayData, setDisplayData] = useState(productsData);

  const handleCategoryClick = (category: SetStateAction<string>) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(productsData);
      return;
    }

    const filteredData = productsData.filter(
      (item) => item.category === category
    );

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 600);
  };

  return (
    <section className="section pt-0 pb-0 product-filter">
      <div className="container">
        <div className="row gaper justify-content-end">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="product-search">
              <form action="#" method="post">
                <input
                  type="text"
                  name="product-search"
                  id="productSearch"
                  placeholder="Search"
                />
                <button type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1">
            <ProductFilterButtons
              active={active}
              handleClick={handleCategoryClick}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <motion.div className="product-item-wrapper" layout>
              <AnimatePresence>
                {displayData.slice(0, 6).map((item) => {
                  return (
                    <motion.div
                      className="product-filter__single grid-item-main "
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="thumb">
                        <Link href="product-single">
                          <Image src={item.productImage} alt="Image" priority />
                        </Link>
                        <button>
                          <span className="material-symbols-outlined">
                            favorite
                          </span>
                        </button>
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="product-single">{item.title}</Link>
                        </h4>
                        <h5>${item.price}</h5>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
