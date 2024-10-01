import React from "react";

const skillsLogo = [
  { id: 1, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML' },
  { id: 2, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS' },
  { id: 3, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
  { id: 4, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap' },
  { id: 5, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind CSS' },
  { id: 6, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma' },
  { id: 7, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', name: 'Canva' },
  { id: 8, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React & React Native' },
  { id: 9, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { id: 10, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', name: 'Unity' },
  { id: 11, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', name: 'C#' },
  { id: 12, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-600 text-white px-24">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4">My Skills</h1>
        <p className="text-xl font-light mb-12">I'm recently learning</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-40">
          {skillsLogo.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center">
              <img
                src={skill.src}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
