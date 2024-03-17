import React from "react";
import { googleIcon, SFacebook, STwitter, SLinkedin } from "../../../../assets";
import SocialConnector from "../layout/socialConnector";

function SocialProfile() {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <p className="font-bold text-2xl leading-[160%] hidden sm:block">
          Connect your social media profiles
        </p>
        <div className="flex flex-col gap-6 w-full">
          <SocialConnector icon={googleIcon} platform="Google" />
          <SocialConnector icon={SFacebook} platform="Facebook" />
          <SocialConnector icon={SLinkedin} platform="LinkedIn" />
          <SocialConnector icon={STwitter} platform="Twitter" />
        </div>
      </div>
    </>
  );
}

export default SocialProfile;
