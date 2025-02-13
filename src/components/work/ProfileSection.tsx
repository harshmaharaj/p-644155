
import React from "react";
import { useNavigate } from "react-router-dom";

export const ProfileSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-start w-[35%] bg-black/20 backdrop-blur-md px-10 py-12 max-md:w-full">
      <div className="w-full">
        <div className="flex items-center gap-6 mb-8">
          <img 
            src="/lovable-uploads/f5c99bb3-8150-4b0d-b6fd-52dd62d114f4.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-4xl text-white mb-2">
              <span className="font-light">Kumar </span>
              <span className="text-[#FC6313] font-bold">Harsh</span>
            </h1>
            <p className="text-xl text-white/80 font-light">User Experience Designer</p>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          <section>
            <h2 className="text-[#FC6313] text-2xl font-medium mb-6">Abstract</h2>
            <p className="text-gray-300 leading-relaxed">
              With over six years of experience as a UX designer, I thrive in the dynamic intersection of creativity and problem-solving. My passion lies in leveraging user-centered design methodologies to craft intuitive digital experiences that resonate deeply with audiences.
            </p>
          </section>

          <section>
            <h2 className="text-[#FC6313] text-2xl font-medium mb-8">Skills and Expertise</h2>
            <div className="grid grid-cols-1 gap-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FC6313]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg text-white">UX Research Methodology</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FC6313]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-lg text-white">Usability Testing</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FC6313]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16L8.586 11.414C9.36768 10.6327 10.6323 10.6327 11.414 11.414L16 16M15 13L16.586 11.414C17.3677 10.6327 18.6323 10.6327 19.414 11.414L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg text-white">Visual Design</span>
              </div>
            </div>
          </section>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => navigate("/")}
            className="bg-white text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#FC6313] hover:text-white transition-colors"
          >
            Back Home
          </button>
          <button className="bg-white/5 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#FC6313] transition-colors">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};
