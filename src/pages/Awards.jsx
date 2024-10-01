import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faLink } from '@fortawesome/free-solid-svg-icons';

const Awards = () => {
  return (
    <div className="flex flex-col justify-center h-full bg-gray-600 text-white px-24">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">My Awards</h1>
        <div className="flex flex-col items-start space-y-4 mb-3">
          <p className="flex items-center text-xl">
            <FontAwesomeIcon icon={faTrophy} className="mr-2" />
            1st Place in "Indoneris National IT Competition 2023" - UI/UX Category 
            <a 
              href="https://indoneris.amikompurwokerto.ac.id/competition/winner?y=2023#:~:text=Arriziq%20%26%20Tanthy%20Aisyah%20Al%20Muslih%2C%20Miftahus%20Surur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 underline ml-2 flex items-center"
            >
              <FontAwesomeIcon icon={faLink} className="mr-1" />
            </a>
          </p>
          <p className="flex items-center text-xl">
            <FontAwesomeIcon icon={faTrophy} className="mr-2" />
            1st Runner-Up in "Indoneris National IT Competition 2023" - Game Design Category 
            <a 
              href="https://indoneris.amikompurwokerto.ac.id/competition/winner?y=2023#:~:text=Juara%20Harapan%201-,Arriziq%20%26%20Tanthy%20Aisyah%20Al%20Muslih,-Universitas%20Amikom%20Purwokerto" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 underline ml-2 flex items-center"
            >
              <FontAwesomeIcon icon={faLink} className="mr-1" />
            </a>
          </p>
        </div>
        <p className="mt-6 font-light">
          Actually, I could win not because I'm skilled, but because the event wasn't very famous, so there were few participants. XD
        </p>
      </div>
    </div>
  );
};

export default Awards;
