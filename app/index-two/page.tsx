import Header from "@/components/layout/header/Header";
import HomeTwoBanner from "@/components/layout/banner/HomeTwoBanner";
import TextSliderLargeTwo from "@/components/containers/home-two/TextSliderLargeTwo";
import CounterOne from "@/components/containers/home-two/CounterOne";
import GenerationThree from "@/components/containers/home-two/GenerationThree";
import Partner from "@/components/containers/home/Partner";
import Easy from "@/components/containers/home-two/Easy";
import OverviewTwo from "@/components/containers/home-two/OverviewTwo";
import EasyTwo from "@/components/containers/home-two/EasyTwo";
import Review from "@/components/containers/home-two/Review";
import EasyThree from "@/components/containers/home-two/EasyThree";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import Animations from "@/components/layout/Animations";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeTwoBanner />
        <TextSliderLargeTwo />
        <CounterOne />
        <GenerationThree />
        <Partner />
        <Easy />
        <OverviewTwo />
        <EasyTwo />
        <Review />
        <EasyThree />
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
