import React from "react";
import { blogHero } from "../../../assets";

function HeroSection() {
  return (
    <div className="flex flex-col gap-4 text-center">
      <div>
        <h1 className="text-3xl mb-1">
          Welcome to <font className="text-secondary-600">Konectin</font> Blog
        </h1>
        <p>Career talks, discussions, posts and articles.</p>
      </div>
      <img src={blogHero} alt=" Welcome to Konectin Blog" />
    </div>
  );
}

export default HeroSection;
