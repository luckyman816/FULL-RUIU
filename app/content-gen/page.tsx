
import Header from "@/components/layout/header/Header";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import ContentGenSection from "@/components/containers/content-gen/ContentGenSection";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
const page = () => {
    return (
      <div className="my-app">
        <Header />
        <main>
          <ContentGenSection/>
        </main> 
        <FooterTwo />
        <InitCustomCursor />
        <ScrollProgressButton />
        <Animations />
      </div>
    );
  };

  export default page;