import Header from "@/components/layout/header/Header";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import TextSlider from "@/components/containers/home/TextSlider";
import Craft from "@/components/containers/home/Craft";
import TextSliderLarge from "@/components/containers/home/TextSliderLarge";
import Tools from "@/components/containers/home/Tools";
import Generation from "@/components/containers/home/Generation";
import Partner from "@/components/containers/home/Partner";
import ServiceSlider from "@/components/containers/home/ServiceSlider";
import UnlockSection from "@/components/containers/home/UnlockSection";
import Overview from "@/components/containers/home/Overview";
import VideoSection from "@/components/containers/home/VideoSection";
import GenerationTwo from "@/components/containers/home/GenerationTwo";
import PricingPlan from "@/components/containers/home/PricingPlan";
import BlogOne from "@/components/containers/home/BlogOne";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeOneBanner />
        <TextSlider />
        <Craft />
        <TextSliderLarge />
        <Tools />
        <Generation />
        <Partner />
        <ServiceSlider />
        <UnlockSection />
        <Overview />
        <GenerationTwo />
        <PricingPlan />
        <BlogOne />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
