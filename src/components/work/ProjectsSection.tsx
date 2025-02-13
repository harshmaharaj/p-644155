
import React from "react";
import { ProjectCard } from "../home/ProjectCard";

export const ProjectsSection = () => {
  return (
    <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex w-full flex-col items-stretch mt-[193px] max-md:max-w-full max-md:mt-10">
        <div className="w-full max-md:max-w-full">
          <div className="flex w-full items-center gap-[40px_100px] text-lg justify-between flex-wrap max-md:max-w-full">
            <h2 className="text-white font-semibold tracking-[0.54px] self-stretch my-auto">
              Selected Work Experience
            </h2>
          </div>
          <div className="flex w-full gap-[26px] text-white mt-6 max-md:max-w-full max-md:flex-wrap">
            <ProjectCard
              type="Senior UX Designer"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/da190de382fe9912de62f4df6c257334e32ba55b5a28de0ef95e70840d33b931"
              title="DeeperVoice"
              description="Led the redesign of the core product interface, resulting in a 40% increase in user engagement."
            />
            <ProjectCard
              type="UX Designer"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/146fe7611ed345faf23211fd6feee7688c44ac8865c1f2ac098d1ca39e045a6c"
              title="TechCorp Solutions"
              description="Implemented design system components that improved design consistency across products by 60%."
            />
            <ProjectCard
              type="Product Designer"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/45e4f401006a60425f589d0257c45cd503b745fee2fb396a193fbefdb4d025c2"
              title="UX Studio"
              description="Collaborated with cross-functional teams to deliver impactful user-centered design solutions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
