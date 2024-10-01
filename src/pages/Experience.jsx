import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center h-full bg-gray-600 text-white px-24">
      <div className="p-8">
        <h1 className="text-5xl font-bold mb-6">My Experience</h1>
        
        <div className="mb-8">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Technician, CV Tripio Computer Purwokerto (Intern)</h2>
            <span className="text-xl font-semibold">2019</span>
          </div>
          <p className="text-lg font-light max-w-6xl">
            Performed hardware replacements, operating system installations, local network setups, and provided technical support to customers regarding computer maintenance and product recommendations.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Network Engineer, PT Sekawan Global Komunika (Intern)</h2>
            <span className="text-xl font-semibold">2019</span>
          </div>
          <p className="text-lg font-light max-w-6xl">
            Installed and configured network devices, managed LAN for stable internet connections, conducted routine network maintenance, and provided technical solutions to improve network efficiency.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Head of Publications Division, Forum Mahasiswa Indramayu (FORMASI)</h2>
            <span className="text-xl font-semibold">2021 - 2022</span>
          </div>
          <p className="text-lg font-light max-w-6xl">
            Managed event promotion strategies, created promotional materials, and handled visual and written documentation of events.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Fresh Graduate Academy (FGA) Digitalent Kominfo</h2>
            <span className="text-xl font-semibold">2024</span>
          </div>
          <p className="text-lg font-light max-w-6xl">
            Completed training in Progate Mobile App Development with React Native, learning foundational web technologies like HTML, CSS, JavaScript, and using Git for team collaboration.
          </p>
        </div>

        <div>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Magang & Studi Independen Bersertifikat (MSIB) Kampus Merdeka</h2>
            <span className="text-xl font-semibold">2022</span>
          </div>
          <p className="text-lg font-light max-w-6xl">
            Participated in the Skilvul Tech4Impact Game Development program, learning Unity and C# while exploring the role of a game developer within a team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
