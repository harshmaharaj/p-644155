
import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex w-full flex-col items-stretch mt-[193px] max-md:max-w-full max-md:mt-10">
        <div className="w-full max-md:max-w-full">
          <div className="flex w-full items-center gap-[40px_100px] text-lg justify-between flex-wrap max-md:max-w-full">
            <h2 className="text-white font-semibold tracking-[0.54px] self-stretch my-auto">
              My Favourite Projects
            </h2>
            <div className="self-stretch flex items-center gap-3 text-[rgba(252,99,19,1)] font-bold my-auto">
              <button className="self-stretch my-auto">View all</button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13bf52dcefd8f1b66264a6e80848d7c5f2fd9c22b8113ba2ada0ec32804d693a"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-[66px]"
                alt="View all arrow"
              />
            </div>
          </div>
          <div className="flex w-full gap-[26px] text-white mt-6 max-md:max-w-full max-md:flex-wrap">
            <ProjectCard
              type="Mobile Product"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/da190de382fe9912de62f4df6c257334e32ba55b5a28de0ef95e70840d33b931"
              title="Project Title"
              description="Project small two liner description, for now keep this dummy text. I will update as per need."
            />
            <ProjectCard
              type="Saas Product"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/146fe7611ed345faf23211fd6feee7688c44ac8865c1f2ac098d1ca39e045a6c"
              title="Project Title"
              description="Project small two liner description, for now keep this dummy text. I will update as per need."
            />
            <ProjectCard
              type="Social Impact Product"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/45e4f401006a60425f589d0257c45cd503b745fee2fb396a193fbefdb4d025c2"
              title="Project Title"
              description="Project small two liner description, for now keep this dummy text. I will update as per need."
            />
          </div>
        </div>
        <div className="flex items-center gap-[23px] mr-[34px] mt-[165px] max-md:mr-2.5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f395894d8ea31a5d4bba28b23973b8bd4eb88d8718e77fce66e9c66a242c4f3"
            className="aspect-[1] object-contain w-[53px] self-stretch shrink-0 my-auto rounded-[64px]"
            alt="Profile 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/202360fb7b40f03507b49945c1b3426f44e8399b4bb762e5e2db815b9f4ab2d6"
            className="aspect-[1] object-contain w-[53px] self-stretch shrink-0 my-auto rounded-[64px]"
            alt="Profile 2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11af91ce8310abcdac6f6f9484e72b0bb95eb8edc1f3c8698a367db1eda2eb3b"
            className="aspect-[1] object-contain w-[53px] self-stretch shrink-0 my-auto rounded-[64px]"
            alt="Profile 3"
          />
        </div>
      </div>
    </div>
  );
};
