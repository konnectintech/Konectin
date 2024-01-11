import AboutSection from "./about";
// import BlogSection from "./blog";
import HeroSection from "./hero";
import RecruiterSection from "./recruiters";
import SignPrompt from "./signPrompt";
import NewsLetter from "./newsletter";
import { RecruitersGain } from "./data";
import MapSection from "../../../components/map";
import { useEffect } from "react";

function Landing() {
  const logs = import.meta.env.AZURE_VERIFIED;

  useEffect(() => {
    console.log(logs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="bg-neutral-1000 over overflow-hidden ">
      <section className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-16">
        <HeroSection />
        <SignPrompt />
        <RecruiterSection data={RecruitersGain} />
        <AboutSection />
        {/* <BlogSection /> */}
      </section>

      <MapSection />

      {/* Newsletter */}
      <NewsLetter />
    </main>
  );
}

export default Landing;
