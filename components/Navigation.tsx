import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  sections: string[];
  activeSection: string;
  isSticky: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, isSticky }) => (
  <motion.nav 
    className={`bg-gray-800 text-white py-4 transition-all duration-300 ${
      isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'
    }`}
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4">
      <ul className="flex justify-center space-x-8">
        {sections.map((section) => (
          <motion.li 
            key={section} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`#${section}`}
              className={`capitalize text-lg font-medium transition-colors ${
                activeSection === section ? 'text-blue-400 font-bold' : 'text-gray-300 hover:text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.nav>
);

export default Navigation;
