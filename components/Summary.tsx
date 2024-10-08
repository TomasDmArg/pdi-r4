import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Summary = () => {
  const [text, setText] = useState('');
  const fullText = "Innovative full stack developer passionate about creating cutting-edge DeFi solutions and enhancing user experiences. Skilled in React/Next.js, TypeScript, and blockchain technologies, I bring a unique blend of technical ability and creative problem-solving to every project.";
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    let i = 0;
    if (inView) {
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 20);
      return () => clearInterval(typingInterval);
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="summary"
      className="py-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Summary</h2>
        <div className="bg-gray-800 text-white max-w-4xl mx-auto p-6 rounded-lg">
          <p className="text-xl leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Summary;