"use client";
import dynamic from "next/dynamic";

const SubTitle = dynamic(() => import("./animations/SubTitleAnimations"), {
  ssr: false,
});
const RevealImage = dynamic(() => import("./animations/RevealImages"), {
  ssr: false,
});
const ParallaxImage = dynamic(() => import("./animations/ParallaxImage"), {
  ssr: false,
});
const FadeAnimations = dynamic(() => import("./animations/FadeAnimations"), {
  ssr: false,
});
const AppearDown = dynamic(() => import("./animations/AppearDown"), {
  ssr: false,
});
const SplitTextAnimations = dynamic(
  () => import("./animations/SplitTextAnimations"),
  { ssr: false }
);
const VanillaTiltHover = dynamic(
  () => import("./animations/VanillaTiltHover"),
  { ssr: false }
);
const ScrollToElement = dynamic(() => import("./animations/ScrollToElement"), {
  ssr: false,
});

const Animations = () => {
  return (
    <>
      <SubTitle />
      <RevealImage />
      <ParallaxImage />
      <FadeAnimations />
      <AppearDown />
      <SplitTextAnimations />
      <VanillaTiltHover />
      <ScrollToElement />
    </>
  );
};

export default Animations;
