import Hero from "./hero";
import Brands from "./brands";
import Impact from "./impact";
import Benefits from "./benefits";
import Solutions from "./solutions";
import Blog from "./blog";
import Testimonials from "./testimonials";
import Faq from "./faq";
import MapSection from "../../../components/map";

function Landing() {
  return (
    <main>
      <Hero />
      <Brands />
      <Impact />
      <Benefits />
      <Solutions />
      <Blog />
      <Testimonials />
      <Faq />
      <MapSection />
    </main>
  );
}

export default Landing;
