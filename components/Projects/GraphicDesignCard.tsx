'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GraphicProject {
  title: string;
  imageUrl: string;
}

export default function GraphicDesignCard({ project }: { project: GraphicProject }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[3/4] group cursor-zoom-in"
    >
      <Image 
        src={project.imageUrl} 
        alt={project.title} 
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
        </h3>
      </div>
    </motion.div>
  );
}
