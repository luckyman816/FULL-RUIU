import Header from "@/components/layout/header/Header";
import HomeThreeBanner from "@/components/layout/banner/HomeThreeBanner";
import TextBrief from "@/components/containers/home-three/TextBrief";
import TextSliderGenerator from "@/components/containers/home-three/TextSliderGenerator";
import AiRevolution from "@/components/containers/home-three/AiRevolution";
import Empower from "@/components/containers/home-three/Empower";
import ParallaxBg from "@/components/containers/home-three/ParallaxBg";
import GamingThree from "@/components/containers/home-three/GamingThree";
import Sponsor from "@/components/containers/home-three/Sponsor";
import Review from "@/components/containers/home-two/Review";
import PricingPlanTwo from "@/components/containers/home-three/PricingPlanTwo";
import ShowCaseThree from "@/components/containers/home-three/ShowCaseThree";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeThreeBanner />
        <TextBrief />
        <TextSliderGenerator />
        <AiRevolution />
        <Empower />
        <ParallaxBg />
        <GamingThree />
        <Sponsor />
        <Review />
        <PricingPlanTwo />
        <ShowCaseThree />
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
