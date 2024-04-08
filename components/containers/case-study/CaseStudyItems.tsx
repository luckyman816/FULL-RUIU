"use client";
import { useState, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudyData } from "@/public/data/case-study-items";
import { AnimatePresence, motion } from "framer-motion";
import CaseStudyFilterButtons from "./CaseStudyFilterButtons";

const CaseStudyItems = () => {
  const [active, setActive] = useState("all");
  const [displayData, setDisplayData] = useState(caseStudyData);

  const handleCategoryClick = (category: SetStateAction<string>) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(caseStudyData);
      return;
    }

    const filteredData = caseStudyData.filter(
      (item) => item.category === category
    );

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 600);
  };

  return (
    <section className="section h-s-case-alter fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-5">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title mt-12 title-animation">
                      Latest Projects
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <CaseStudyFilterButtons
                    active={active}
                    handleClick={handleCategoryClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div className="row case-masonry" layout>
          <AnimatePresence>
            {displayData.slice(0, 4).map((item) => {
              return (
                <motion.div
                  className="col-12 col-md-6 case-item"
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="h-s-case-single">
                    <div className="thumb">
                      <Link href="case-study-single">
                        <Image src={item.image} alt="Image" priority />
                      </Link>
                    </div>
                    <div className="h-case-content">
                      <div className="case-title">
                        <h2 className="light-title">
                          <Link href="case-study-single">{item.title}</Link>
                        </h2>
                      </div>
                      <div className="h-c-continent">
                        <p>{item.description}</p>
                        <Link href="case-study-single" className="cta">
                          <span className="arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
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

export default CaseStudyItems;
