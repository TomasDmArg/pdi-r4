import React from 'react';
import { motion } from 'framer-motion';
import { SkillSet } from '@/types/types';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { FaCode, FaReact, FaServer, FaEthereum, FaTools } from 'react-icons/fa';

interface SkillsProps {
    skillSets: SkillSet[];
}

const getIconForCategory = (category: string) => {
    switch (category) {
        case 'Languages': return <FaCode className="text-3xl text-blue-400" />;
        case 'Front-end': return <FaReact className="text-3xl text-blue-400" />;
        case 'Back-end': return <FaServer className="text-3xl text-blue-400" />;
        case 'Blockchain': return <FaEthereum className="text-3xl text-blue-400" />;
        case 'Tools': return <FaTools className="text-3xl text-blue-400" />;
        default: return null;
    }
};

const Skills: React.FC<SkillsProps> = ({ skillSets }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4"
        id='skills'
    >
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
            {skillSets.map((skillSet, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full sm:w-80 "
                >
                    <Card className="border-none bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardContent className="p-6 text-center">
                            <div className="flex flex-col items-center mb-4">
                                {getIconForCategory(skillSet.category)}
                                <h3 className="text-2xl font-bold mt-2 text-blue-300">{skillSet.category}</h3>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {skillSet.skills.map((skill, idx) => (
                                    <Badge key={idx} variant="secondary" className="bg-blue-500/30 text-blue-200 hover:bg-blue-500/50 transition-colors duration-300">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

export default Skills;