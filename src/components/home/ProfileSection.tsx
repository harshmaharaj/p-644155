
import React from "react";
import { StatCard } from "./StatCard";
export const ProfileSection = () => {
  return <div className="w-[35%] 2xl:w-[35%] max-md:w-full max-md:ml-0">
      <div className="bg-black/10 backdrop-blur-md border border-white/10 shadow-[0px_5px_100px_rgba(0,0,0,0.7)] h-screen w-full 2xl:px-[80px] 2xl:py-28 max-md:max-w-full overflow-hidden px-[40px] py-[80px]">
        <div className="h-full flex flex-col justify-between">
          <div className="flex w-full flex-col items-stretch">
            <div className="w-full font-normal">
              <h1 className="text-white text-5xl 2xl:text-6xl leading-[57px] 2xl:leading-[67px] tracking-[1.44px] max-md:text-[40px] max-md:leading-[53px]">
                <span className="font-light">Hello! </span>
                <br />
                <span className="font-light">I'm Kumar </span>
                <span className="font-bold text-[#FC6313]">Harsh</span>
              </h1>
              <div className="text-neutral-300 text-xl 2xl:text-2xl leading-[47px] 2xl:leading-[57px] mt-1.5">
                <span className="font-light">A </span>
                <span className="font-bold text-[#FC6313]">UX Designer</span>
                <span className="font-light"> who makes </span>
                <span className="font-bold text-[#FC6313]">Tech</span>
                <span className="font-light"> easy to use</span>
              </div>
            </div>
            <div className="flex gap-5 text-base 2xl:text-lg tracking-[-0.48px] mt-[8%]">
              <button className="self-stretch border hover:bg-[#FC6313] hover:border-[#FC6313] transition-colors min-w-[136px] 2xl:min-w-[156px] gap-2 overflow-hidden text-white font-normal w-[140px] 2xl:w-[160px] px-5 py-3 2xl:py-4 rounded-[12px] border-[rgba(220,220,220,0.3)] border-solid">
                About me
              </button>
              <button className="self-stretch bg-white hover:bg-[#FC6313] hover:text-white transition-colors min-w-[136px] 2xl:min-w-[156px] gap-2 overflow-hidden text-black font-medium w-[140px] 2xl:w-[160px] px-5 py-3 2xl:py-4 rounded-[12px]">
                My Project
              </button>
            </div>
          </div>
          <div className="w-48 2xl:w-56 max-w-full mt-[30px]">
            <h2 className="text-white text-xs 2xl:text-sm font-semibold tracking-[0.36px]">
              Professional Insights
            </h2>
            <div className="flex w-full flex-col mt-4 2xl:mt-6">
              <StatCard icon="https://cdn.builder.io/api/v1/image/assets/TEMP/81e4f78ec6c1b609c1522398bd1969a139207a43aeaf7654a29f56c09dc72917" count="6+" label="Year of Experience" />
              <div className="mt-6 2xl:mt-8">
                <StatCard icon="https://cdn.builder.io/api/v1/image/assets/TEMP/44cd0b618e7b22fd7a222f4e85272018959d428988761fb98ba62cb598e40afc" count="10+" label="Product Designed" />
              </div>
              <div className="mt-6 2xl:mt-8">
                <StatCard icon="https://cdn.builder.io/api/v1/image/assets/TEMP/948b638a6bf1ca2bd7c8d1d9439a14d1c1a38e4e447b15fa43de22e8030509e8" count="3+" label="Article Published" />
              </div>
              <div className="mt-6 2xl:mt-8">
                <StatCard icon="https://cdn.builder.io/api/v1/image/assets/TEMP/92711583858375920a3a7994a0279d08aa6c10eaab5278cafa8fc2726c752866" count="B2B & B2C" label="Industry Expertise" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
