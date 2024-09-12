import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function SocialMediaIcons({ linkedinUrl, instagramUrl }) {
  return (
    <div>
    <div className="flex justify-center gap-6 mt-5">
      {/* LinkedIn Icon */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <FaLinkedin size={40} />
      </a>

      {/* Instagram Icon */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
      >
        <FaInstagram size={40} />
      </a>
    </div>
    <div>Some other random person profile will show not connected yet </div>
    </div>
  );
}

export default SocialMediaIcons;
