import CTASection from "./cta";
import Feeds from "./feeds";
import HeroSection from "./hero";
import "./index.css";

function Blog() {
  return (
    <main className="bg-neutral-700">
      <section className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-16">
        <HeroSection />
        <Feeds />
        <CTASection />
      </section>
    </main>
  );
}

export default Blog;
