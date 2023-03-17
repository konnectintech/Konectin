import React from "react";
import CTASection from "../../../components/cta";
import MapSection from "../../../components/map";
import CoreValues from "./coreValues";
import HeroSection from "./hero";
import Vision from "./vision";
import { TeamData, Values } from "./data";
import "./index.css";
import Team from "./ourTeam/ourTeam";

function About() {
  return (
    <main className="flex flex-col bg-neutral-1000 text-neutral-100 relative">
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
