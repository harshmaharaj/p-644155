
import React from "react";
interface ProjectCardProps {
  type: string;
  image: string;
  title: string;
  description: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  type,
  image,
  title,
  description
}) => {
  return <div className="grow shrink w-[220px]">
      <div className="bg-black/10 backdrop-blur-md border border-white/20 shadow-[12px_12px_32px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden items-stretch px-5 py-[20px] rounded-2xl transition-all duration-300 hover:bg-white/20">
        <div className="text-base font-semibold tracking-[0.48px] text-white">
          {type}
        </div>
        <img loading="lazy" src={image} className="aspect-[1] object-contain w-[220px] mt-[20px] max-md:mr-0.5" alt={title} />
        <div className="mt-5">
          <div className="text-lg font-extrabold tracking-[0.54px] text-white">
            {title}
          </div>
          <div className="min-h-px w-[65px] mt-2.5" />
          <div className="max-w-full w-[220px] text-sm font-normal mt-2.5 text-white/90">
            {description}
          </div>
        </div>
      </div>
    </div>;
};
