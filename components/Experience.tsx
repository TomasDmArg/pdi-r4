import React from 'react';
import { motion } from 'framer-motion';
import { Job } from '@/types/types';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ExperienceProps {
  jobs: Job[];
}

const Experience: React.FC<ExperienceProps> = ({ jobs }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="py-12"
    >
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-400 mb-6">Trayectoria Profesional</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
                {jobs.map((job, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border-none">
                                <CardContent className="p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <h4 className="text-blue-400 text-xl font-bold mb-2">{job.title}</h4>
                                        <p className="text-gray-300 text-lg mb-2">{job.company}</p>
                                        <p className="text-gray-400 text-sm mb-4">{job.period}</p>
                                    </div>
                                    <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                                        {job.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
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

export default Experience;