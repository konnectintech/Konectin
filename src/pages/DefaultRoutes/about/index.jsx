import CoreValues from "./coreValues";
import HeroSection from "./hero";
import Vision from "./vision";
import MapSection from "../../../components/map";
import CTASection from "../resume/resume-landing/cta";
import { TeamData, Values } from "./data";
import "./index.css";
import Team from "./ourTeam/ourTeam";

function About() {
  return (
    <main className="flex flex-col bg-neutral-1000 overflow-hidden text-neutral-100 relative">
      <HeroSection />
      <CoreValues data={Values} />
      <CTASection />
      <Vision />
      <Team data={TeamData} />
      <MapSection />
    </main>
  );
}

export default About;
