
import React from "react";
import { StatCard } from "./StatCard";

export const ProfileSection = () => {
  return (
    <div className="w-[45%] max-md:w-full max-md:ml-0">
      <div className="bg-black/10 backdrop-blur-md border border-white/20 shadow-[32px_0px_108px_rgba(0,0,0,0.5)] grow w-full pt-[120px] pb-[54px] px-[60px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px] max-md:px-5">
        <div>
          <div className="flex w-full flex-col items-stretch">
            <div className="w-full font-normal">
              <h1 className="text-white text-5xl leading-[57px] tracking-[1.44px] max-md:text-[40px] max-md:leading-[53px]">
                <span className="font-light">Hello! </span>
                <br />
                <span className="font-light">I'm Kumar </span>
                <span className="font-bold text-white">Harsh</span>
              </h1>
              <div className="text-neutral-300 text-xl leading-[47px] mt-1.5">
                <span className="font-light">A </span>
                <span className="font-bold text-[#FC6313]">UX Designer</span>
                <span className="font-light"> who makes </span>
                <span className="font-bold text-[#FC6313]">Tech</span>
                <span className="font-light"> easy to use</span>
              </div>
            </div>
            <div className="flex gap-5 text-base tracking-[-0.48px] mt-10">
              <button className="self-stretch bg-white min-w-[136px] gap-2 overflow-hidden text-black font-medium w-[140px] px-5 py-3 rounded-[10px]">
                Talk with me
              </button>
              <button className="self-stretch border min-w-[136px] gap-2 overflow-hidden text-white font-normal w-[140px] px-5 py-3 rounded-[10px] border-[rgba(220,220,220,0.3)] border-solid">
                See my work
              </button>
            </div>
          </div>
          <div className="w-48 max-w-full mt-[103px] max-md:mt-10">
            <h2 className="text-white text-xs font-semibold tracking-[0.36px]">
              Professional Insights
            </h2>
            <div className="flex w-full flex-col mt-4">
              <StatCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/81e4f78ec6c1b609c1522398bd1969a139207a43aeaf7654a29f56c09dc72917"
                count="6+"
                label="Year of Experience"
              />
              <div className="mt-6">
                <StatCard
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/44cd0b618e7b22fd7a222f4e85272018959d428988761fb98ba62cb598e40afc"
                  count="10+"
                  label="Product Designed"
                />
              </div>
              <div className="mt-6">
                <StatCard
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/948b638a6bf1ca2bd7c8d1d9439a14d1c1a38e4e447b15fa43de22e8030509e8"
                  count="3+"
                  label="Article Published"
                />
              </div>
              <div className="mt-6">
                <StatCard
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/92711583858375920a3a7994a0279d08aa6c10eaab5278cafa8fc2726c752866"
                  count="B2B & B2C"
                  label="Industry Expertise"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
