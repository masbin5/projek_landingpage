'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProject {
  name: string;
  concept: string;
  imageUrl: string;
}

export default function LogoCard({ project }: { project: LogoProject }) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border border-slate-100 aspect-square flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="relative w-32 h-32 mb-6 transition-transform duration-500 group-hover:scale-110">
        <Image 
            src={project.imageUrl} 
            alt={project.name} 
            fill
            className="object-contain"
        />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
      <p className="text-sm text-slate-500 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {project.concept}
      </p>
      
      <div className="absolute inset-0 border-2 border-accent-500 opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
    </motion.div>
  );
}
