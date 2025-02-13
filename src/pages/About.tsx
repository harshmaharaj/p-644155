
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-[#1A1F2C] min-h-screen text-white p-10">
      <button 
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-white/80 hover:text-white mb-10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to dashboard
      </button>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <img 
            src="/lovable-uploads/f5c99bb3-8150-4b0d-b6fd-52dd62d114f4.png" 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-4xl font-light mb-2">
              Kumar <span className="text-[#FC6313] font-bold">Harsh</span>
            </h1>
            <p className="text-gray-400">User Experience Designer</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-[#FC6313] text-xl mb-4">Abstract</h2>
          <p className="text-gray-300 leading-relaxed">
            With over six years of experience as a UX designer, I thrive in the dynamic intersection of creativity and problem-solving. My passion lies in leveraging user-centered design methodologies to craft intuitive digital experiences that resonate deeply with audiences. From ideation to execution, I bring a meticulous attention to detail and a collaborative spirit to every project, working closely with cross-functional teams to deliver impactful solutions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-[#FC6313] text-xl mb-6">Skills and Expertise</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FC6313]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              UX Research Methodology
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FC6313]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              Usability Testing
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FC6313]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16L8.586 11.414C9.36768 10.6327 10.6323 10.6327 11.414 11.414L16 16M15 13L16.586 11.414C17.3677 10.6327 18.6323 10.6327 19.414 11.414L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Visual Design
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FC6313]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7C16.1046 7 17 6.10457 17 5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5C13 6.10457 13.8954 7 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Accessibility Testing
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[#FC6313] text-xl mb-6">Experiences</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-gray-800">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#FC6313]"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Senior UX Designer</h3>
                  <p className="text-gray-400">Organization name</p>
                </div>
                <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">Oct, 22 to Present</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                With over six years of experience as a UX designer, I thrive in the dynamic intersection of creativity and problem-solving. My passion lies in leveraging user-centered design methodologies to craft intuitive digital experiences that resonate deeply with audiences.
              </p>
            </div>

            <div className="relative pl-8 border-l border-gray-800">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#FC6313]"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">UX Designer</h3>
                  <p className="text-gray-400">Organization name</p>
                </div>
                <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">Oct, 2019 to Jan, 2021</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                With over six years of experience as a UX designer, I thrive in the dynamic intersection of creativity and problem-solving. My passion lies in leveraging user-centered design methodologies to craft intuitive digital experiences that resonate deeply with audiences.
              </p>
            </div>
          </div>
        </section>

        <div className="flex gap-4 mt-12">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-[#FC6313] hover:text-white transition-colors">
            My Work
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-[#FC6313] transition-colors">
            Download Resume
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
