import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center h-full bg-gray-600 text-white px-24">
      <div className="p-8">
        <h1 className="text-5xl font-bold mb-6">Hi, it's Arriziq</h1>
        <p className="text-lg mb-4 text-left">
          I'm a beginner and a fresh graduate with a Bachelor's degree in Information Technology from 
          <span className="font-semibold"> Universitas Amikom Purwokerto</span>, finishing my studies in just 7 semesters with a GPA of 3.69.
        </p>
        <p className="text-lg mb-4 text-left">
          During my academic journey, I had the privilege to join the <span className="font-semibold">MSIB Kampus Merdeka</span> program 
          in <span className="font-semibold">Game Development</span>, as well as the <span className="font-semibold">FGA Digitalent Kominfo</span> program 
          in <span className="font-semibold">Mobile App Development with React Native</span>. These opportunities sparked my passion for technology and development, inspiring me to pursue a career as a Web/Mobile Programmer.
        </p>
        <p className="text-lg text-left">
          I'm eager to keep growing, learning, and honing my skills. I'm ready to bring my enthusiasm and dedication to your team, 
          contributing effectively while continuing to expand my knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;
