import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-1/4 bg-gray-800 text-white p-4">
      <ul>
        <li><Link to="/" className="block py-2">Home</Link></li>
        <li><Link to="/about" className="block py-2">About</Link></li>
        <li><Link to="/skills" className="block py-2">Skills</Link></li>
        <li><Link to="/interest" className="block py-2">Interest</Link></li>
        <li><Link to="/education" className="block py-2">Education</Link></li>
        <li><Link to="/experience" className="block py-2">Experience</Link></li>
        <li><Link to="/awards" className="block py-2">Awards</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
