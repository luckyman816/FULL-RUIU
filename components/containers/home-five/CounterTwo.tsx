import Image from "next/image";
import Counter from "../Counter";
import Star from "@/public/images/star.png";

const CounterTwo = () => {
  return (
    <section className="counter counter-alter section pb-0 fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter__inner">
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={80} />
                  </span>
                  <span className="prefix"> k</span>
                </h2>
                <p className="primary-text">Active User</p>
              </div>
              <div className="counter__single d-none d-xxl-block">
                <Image src={Star} alt="Image" priority />
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer"></span>
                  <Counter value={100} />
                  <span className="prefix"> %</span>
                </h2>
                <p className="primary-text">Satisfaction</p>
              </div>
              <div className="counter__single d-none d-xxl-block">
                <Image src={Star} alt="Image" priority />
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={200} />
                  </span>
                  <span className="prefix"> +</span>
                </h2>
                <p className="primary-text">Daily User</p>
              </div>
              <div className="counter__single d-none d-xxl-block">
                <Image src={Star} alt="Image" priority />
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={15} />
                  </span>
                  <span className="prefix"> +</span>
                </h2>
                <p className="primary-text">Years of Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterTwo;
