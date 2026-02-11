'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

interface WebsiteProject {
  name: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link: string;
}

export default function WebsiteCard({ project }: { project: WebsiteProject }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
            src={project.imageUrl} 
            alt={project.name} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
                variant="ghost" 
                className="text-white border-white hover:bg-white hover:text-black"
                onClick={() => window.open(project.link, '_blank')}
            >
                Visit Website <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
        <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">
            {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech) => (
            <span key={tech} className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded-md border border-accent-100">
                {tech}
            </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
