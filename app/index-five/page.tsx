import Header from "@/components/layout/header/Header";
import HomeFiveBanner from "@/components/layout/banner/HomeFiveBanner";
import TextSlider from "@/components/containers/home/TextSlider";
import NextLevel from "@/components/containers/home-five/NextLevel";
import NextSlider from "@/components/containers/home-five/NextSlider";
import CaseSlideFive from "@/components/containers/home-five/CaseSlideFive";
import RevolutionHover from "@/components/containers/home-five/RevolutionHover";
import AlterTextSlider from "@/components/containers/home-five/AlterTextSlider";
import ChatbotFive from "@/components/containers/home-five/ChatbotFive";
import CounterTwo from "@/components/containers/home-five/CounterTwo";
import UnlockFive from "@/components/containers/home-five/UnlockFive";
import BlogTwo from "@/components/containers/home-five/BlogTwo";
import FooterThree from "@/components/layout/footer/FooterThree";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app home-five">
      <Header />
      <main>
        <HomeFiveBanner />
        <TextSlider />
        <NextLevel />
        <NextSlider />
        <CaseSlideFive />
        <RevolutionHover />
        <AlterTextSlider />
        <ChatbotFive />
        <CounterTwo />
        <UnlockFive />
        <BlogTwo />
      </main>
      <FooterThree />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
