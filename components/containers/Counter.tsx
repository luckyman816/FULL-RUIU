"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "odometer/themes/odometer-theme-default.css";
import { useInView } from "react-intersection-observer";
const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
});

interface CounterProps {
  value: number;
}

const Counter = ({ value }: CounterProps) => {
  const [odometerValue, setOdometerValue] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setOdometerValue(value);
      }, 1000);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {inView ? (
        <Odometer value={odometerValue} format="(,ddd)" theme="default" />
      ) : (
        0
      )}
    </span>
  );
};

export default Counter;
