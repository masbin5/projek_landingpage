'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface UiUxProject {
  title: string;
  timeline: string;
  description: string;
  tools: string[];
  link: string;
}

export default function UiUxCard({ project }: { project: UiUxProject }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
          <span className="text-sm font-medium text-accent-500 bg-accent-50 px-3 py-1 rounded-full">
            {project.timeline}
          </span>
        </div>
      </div>
      
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tools.map((tool) => (
          <span key={tool} className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
            {tool}
          </span>
        ))}
      </div>
      
      <Button variant="outline" className="w-full justify-between group">
        View Case Study
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    </motion.div>
  );
}
