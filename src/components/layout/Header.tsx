
import React from "react";
import { Sun } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-xl bg-black/20 border-b border-white/10 h-[72px] flex items-center justify-between px-6 z-50 shadow-lg">
      <div className="flex items-center gap-3">
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

      <button className="bg-white/10 backdrop-blur-sm rounded-full p-2 flex items-center gap-2 text-white border border-white/20 hover:bg-white/20 transition-colors">
        <Sun className="w-4 h-4" />
        <span className="mr-1">Light</span>
      </button>
    </header>
  );
};
