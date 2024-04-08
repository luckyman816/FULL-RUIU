import Header from "@/components/layout/header/Header";
import ServiceBanner from "@/components/layout/banner/ServiceBanner";
import ServiceTextSlider from "@/components/containers/service/ServiceTextSlider";
import ServiceItems from "@/components/containers/service/ServiceItems";
import ServiceNewsletter from "@/components/containers/service/ServiceNewsletter";
import ServiceCraft from "@/components/containers/service/ServiceCraft";
import Review from "@/components/containers/home-two/Review";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <ServiceBanner />
        <ServiceTextSlider />
        <ServiceItems />
        <ServiceNewsletter />
        <ServiceCraft />
        <Review />
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
