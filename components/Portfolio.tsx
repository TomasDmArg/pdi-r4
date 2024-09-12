'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Navigation from './Navigation';
import Summary from './Summary';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import { achievements, jobs, skillSets } from '@/constants/portfolio';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('summary');
  const [isLoading, setIsLoading] = useState(true);
  const [isNavSticky, setIsNavSticky] = useState(false);

  const sections = ['summary', 'experience', 'projects', 'skills', 'education'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Check if navigation should be sticky
    setIsNavSticky(scrollPosition > windowHeight - 100);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top < windowHeight / 2 && bottom > windowHeight / 2) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setIsLoading(false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-t-4 border-white rounded-full animate-spin"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <Navigation 
            sections={sections} 
            activeSection={activeSection} 
            isSticky={isNavSticky}
          />
          <main className="container mx-auto px-4 py-16">
            <Summary />
            <Experience jobs={jobs} />
            <Projects achievements={achievements} />
            <Skills skillSets={skillSets} />
          </main>
          <Footer />
          
          {/* Floating action button for quick navigation to top */}
          <motion.button
            className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>

          {/* Background decoration */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}