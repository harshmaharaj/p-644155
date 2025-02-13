
import React from "react";
import { ProfileSection } from "@/components/home/ProfileSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";

const Index = () => {
  return (
    <main 
      className="bg-[rgba(32,37,55,1)] overflow-hidden pr-[60px] max-md:pr-5 min-h-screen"
      style={{
        backgroundImage: 'url("/lovable-uploads/d3af4575-d78a-4bf4-a7af-a138973c6e8f.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <ProfileSection />
        <ProjectsSection />
      </div>
    </main>
  );
};

export default Index;
