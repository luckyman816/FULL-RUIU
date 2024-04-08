import Header from "@/components/layout/header/Header";
import HomeFourBanner from "@/components/layout/banner/HomeFourBanner";
import ProductFilter from "@/components/containers/home-four/product-filter/ProductFilter";
import TextSliderPrompt from "@/components/containers/home-four/TextSliderPrompt";
import CategoryFilter from "@/components/containers/home-four/category-filter/CategoryFilter";
import NewPrompts from "@/components/containers/home-four/NewPrompts";
import BestPrompts from "@/components/containers/home-four/BestPrompts";
import ChatPrompts from "@/components/containers/home-four/ChatPrompts";
import FeatureSeller from "@/components/containers/home-four/FeatureSeller";
import Sponsor from "@/components/containers/home-three/Sponsor";
import ParticleBackground from "@/components/containers/home-four/ParticaleBackground";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeFourBanner />
        <ProductFilter />
        <TextSliderPrompt />
        <CategoryFilter />
        <NewPrompts />
        <BestPrompts />
        <ChatPrompts />
        <FeatureSeller />
        <Sponsor />
        <ParticleBackground />
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
