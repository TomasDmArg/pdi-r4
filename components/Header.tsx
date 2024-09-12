import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'mailto:tomas@tdm.ar';
  };

  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/tomasdm/', '_blank', 'noopener,noreferrer');
  };

  const handleLocationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://www.google.com/maps/place/Mar+del+Plata,+Buenos+Aires+Province,+Argentina', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.header 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h1 
          className="text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Tomas M. Di Mauro
        </motion.h1>
        <motion.p 
          className="text-3xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full Stack Developer | UI/UX Designer
        </motion.p>
        <motion.div 
          className="flex flex-col items-center md:flex-row justify-center space-y-6 md:space-x-6 md:space-y-0"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#" onClick={handleLocationClick} className="flex items-center text-lg hover:text-blue-300 transition-colors">
            <FaMapMarkerAlt className="mr-2" />
            <span>Mar del Plata, Argentina</span>
          </a>
          <a href="#" onClick={handleEmailClick} className="flex items-center text-lg hover:text-blue-300 transition-colors">
            <FaEnvelope className="mr-2" />
            <span>tomas@tdm.ar</span>
          </a>
          <a href="#" onClick={handleLinkedInClick} className="flex items-center text-lg hover:text-blue-300 transition-colors">
            <FaLinkedin className="mr-2" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;