import React from "react";
import CTASection from "../../../components/cta";
import MapSection from "../../../components/map";
import CoreValues from "./coreValues";
import HeroSection from "./hero";
import Team from "./ourTeam";
import Vision from "./vision";
import { Values } from "./data";
import "./index.css";

function About() {
  return (
    <main className="flex flex-col bg-neutral-1000 text-neutral-100 relative">
      <HeroSection />
      <CoreValues data={Values} />
      <CTASection />
      <Vision />
      <Team />
      <MapSection />
    </main>
  );
}

export default About;
