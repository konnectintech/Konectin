import AboutSection from "./about";
import BlogSection from "./blog";
import HeroSection from "./hero";
import RecruiterSection from "./recruiters";
import SignPrompt from "./signPrompt";
import MapSection from "./map";
import NewsLetter from "./newsletter";
import { BlogData, RecruitersGain } from "./data";

function Landing() {
  return (
    <main className="bg-neutral-1000">
      <section className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-16">
        <HeroSection />
        <SignPrompt />
        <RecruiterSection data={RecruitersGain} />
        <AboutSection />
        <BlogSection data={BlogData} />
      </section>

      <MapSection />

      {/* Newsletter */}
      <NewsLetter />
    </main>
  );
}

export default Landing;
