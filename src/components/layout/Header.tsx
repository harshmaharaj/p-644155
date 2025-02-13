
import React from "react";
import { Sun } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#222222] h-[72px] flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/e0b63616-8762-4df5-8f01-c22891c40b70.png" 
          alt="Logo" 
          className="w-8 h-8"
        />
        <span className="text-white text-lg font-medium">Kumar Harsh</span>
      </div>
      
      <nav className="flex items-center gap-12">
        <a 
          href="#" 
          className="text-[#FC6313] border-b-2 border-[#FC6313] pb-1 px-1"
        >
          Dashboard
        </a>
        <a 
          href="#" 
          className="text-white/80 hover:text-white transition-colors"
        >
          My Works
        </a>
        <a 
          href="#" 
          className="text-white/80 hover:text-white transition-colors"
        >
          About Me
        </a>
      </nav>

      <button className="bg-white rounded-full p-2 flex items-center gap-2">
        <Sun className="w-4 h-4" />
        <span className="mr-1">Light</span>
      </button>
    </header>
  );
};
