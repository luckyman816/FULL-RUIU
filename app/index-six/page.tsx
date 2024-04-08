import Header from "@/components/layout/header/Header";
import HomeSixBanner from "@/components/layout/banner/HomeSixBanner";
import BlogThree from "@/components/containers/home-six/BlogThree";
import Publisher from "@/components/containers/home-six/Publisher";
import Poster from "@/components/containers/home-six/Poster";
import ParallaxBg from "@/components/containers/home-three/ParallaxBg";
import CounterThree from "@/components/containers/home-six/CounterThree";
import FooterThree from "@/components/layout/footer/FooterThree";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app home-six">
      <Header />
      <main>
        <HomeSixBanner />
        <BlogThree />
        <Publisher />
        <Poster />
        <ParallaxBg />
        <CounterThree />
      </main>
      <FooterThree />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
