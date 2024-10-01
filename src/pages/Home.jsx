import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-600 text-white px-40">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-6">Hello World!</h1>
        <p className="text-xl font-light mb-6">
          Welcome to <span className="font-semibold">My Personal Portfolio</span>, I'm still exploring the world of web development, 
          and this portfolio is a way to track my progress. Feel free to look around and see what I'm working on!
        </p>
      </div>
    </div>
  );
};

export default Home;
