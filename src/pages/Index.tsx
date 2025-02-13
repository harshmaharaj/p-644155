import React from "react";
import { ProfileSection } from "@/components/home/ProfileSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";

const Index = () => {
  return (
    <main className="bg-[rgba(32,37,55,1)] overflow-hidden pr-[60px] max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <ProfileSection />
        <ProjectsSection />
      </div>
    </main>
  );
};

export default Index;
