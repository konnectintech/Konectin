import React from "react";
import { googleIcon,SFacebook, STwitter, SLinkedin } from "../../../../assets";

function SocialProfile() {
  return (
    <div className="py-14 px-12">
      <div className="flex flex-col gap-6">
        <p className="font-bold text-2xl leading-[160%]">Connect your social media profiles</p>
        <div className="flex flex-col gap-6">
          <div className="h-24 rounded-lg shadow-dropShadow flex items-center gap-6 p-6">
            <span>
            <img src={googleIcon} alt="Google" />
            </span>
            <div className="flex items-center justify-between grow">
              <p className="text-2xl font-bold">Google</p>
              <button class="bg-secondary-500 whitespace-nowrap text-white py-4 px-16 rounded-lg hover:bg-secondary-600 text-xl font-bold flex justify-center items-center w-48">
                Connect
              </button>            
            </div>
          </div>
          <div className="h-24 rounded-lg shadow-dropShadow flex items-center gap-6 p-6">
            <span>
            <img src={SFacebook} alt="Facebook" />
            </span>
            <div className="flex items-center justify-between grow">
              <p className="text-2xl font-bold">Facebook</p>
              <button class="bg-secondary-500 whitespace-nowrap text-white py-4 px-16 rounded-lg hover:bg-secondary-600 text-xl font-bold flex justify-center items-center w-48">
                Connect
              </button>            
            </div>
          </div>
          <div className="h-24 rounded-lg shadow-dropShadow flex items-center gap-6 p-6">
            <span>
            <img src={STwitter} alt="Twitter" />
            </span>
            <div className="flex items-center justify-between grow">
              <p className="text-2xl font-bold">Twitter</p>
              <button class="bg-secondary-500 whitespace-nowrap text-white py-4 px-16 rounded-lg hover:bg-secondary-600 text-xl font-bold flex justify-center items-center w-48">
                Connect
              </button>            
            </div>
          </div>
          <div className="h-24 rounded-lg shadow-dropShadow flex items-center gap-6 p-6">
            <span>
            <img src={SLinkedin} alt="LinkedIn"/>
            </span>
            <div className="flex items-center justify-between grow">
              <p className="text-2xl font-bold">LinkedIn</p>
              <button class="bg-secondary-500 whitespace-nowrap text-white py-4 px-16 rounded-lg hover:bg-secondary-600 text-xl font-bold flex justify-center items-center w-48">
                Connect
              </button>
            </div>
          </div>

        </div>
      </div>
    
    </div>
  )
}

export default SocialProfile;
