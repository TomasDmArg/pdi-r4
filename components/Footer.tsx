import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => (
  <motion.footer 
    className="bg-gradient-to-r from-primary to-secondary text-white py-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4 text-center">
      <p className="text-lg">&copy; 2024 Tomas M. Di Mauro. All rights reserved.</p>
      <p className="mt-2">Built with React, Next.js, and Framer Motion</p>
    </div>
  </motion.footer>
);

export default Footer;