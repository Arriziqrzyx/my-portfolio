import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center py-4 w-full flex flex-col items-center justify-center">
      <div className="mb-3">
        <a href="https://www.linkedin.com/in/arriziq" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/Arriziqrzyx" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p>
        <FontAwesomeIcon icon={faCopyright} /> Arriziq || 1959095840-558
      </p>
    </footer>
  );
};

export default Footer;
