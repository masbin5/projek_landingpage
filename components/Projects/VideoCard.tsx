'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoProject {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export default function VideoCard({ project }: { project: VideoProject }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full cursor-pointer"
      onClick={() => window.open(project.videoUrl, '_blank')}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
            src={project.thumbnailUrl} 
            alt={project.title} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                <Play className="w-5 h-5 text-white fill-white ml-1" />
            </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 mb-1">{project.title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">
            {project.description}
        </p>
      </div>
    </motion.div>
  );
}
