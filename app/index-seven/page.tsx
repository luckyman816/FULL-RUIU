import Header from "@/components/layout/header/Header";
import HomeSevenBanner from "@/components/layout/banner/HomeSevenBanner";
import TextSliderSeven from "@/components/containers/home-seven/TextSliderSeven";
import OurJourney from "@/components/containers/home-seven/OurJourney";
import EmpowerThree from "@/components/containers/home-seven/EmpowerThree";
import CaseStudySeven from "@/components/containers/home-seven/CaseStudySeven";
import SponsorTwo from "@/components/containers/home-seven/SponsorTwo";
import PricingPlanSeven from "@/components/containers/home-seven/PricingPlanSeven";
import CraftSeven from "@/components/containers/home-seven/CraftSeven";
import Review from "@/components/containers/home-two/Review";
import TextSliderLarge from "@/components/containers/home/TextSliderLarge";
import BlogOne from "@/components/containers/home/BlogOne";
import FooterFour from "@/components/layout/footer/FooterFour";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app home-seven">
      <Header />
      <main>
        <HomeSevenBanner />
        <TextSliderSeven />
        <OurJourney />
        <EmpowerThree />
        <CaseStudySeven />
        <SponsorTwo />
        <PricingPlanSeven />
        <CraftSeven />
        <Review />
        <TextSliderLarge />
        <BlogOne />
      </main>
      <FooterFour />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
