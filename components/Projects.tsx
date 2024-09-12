import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Achievement {
    title: string;
    description: string;
}

interface ProjectsProps {
    achievements: Achievement[];
}

/**
 * Componente de Proyectos para el portafolio
 */
const Projects: React.FC<ProjectsProps> = ({ achievements }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="py-12"
        id='projects'
    >
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-400 mb-6">Achievements</h2>
        <Carousel className="w-full max-w-[70vw] md:max-w-4xl mx-auto">
            <CarouselContent>
                {achievements.map((achievement, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border-none">
                                <CardContent className="p-6 flex flex-col justify-between h-full">
                                    <h4 className="text-blue-400 text-xl font-bold mb-3">🏆 {achievement.title}</h4>
                                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </motion.section>
);

export default Projects;