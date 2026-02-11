'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      {/* Background Gradient/Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-200/50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold mb-6 border border-accent-100">
                Available for Freelance
            </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Alex Morgan
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-slate-600 mb-8 max-w-2xl mx-auto">
            Web Developer & <span className="text-accent-600">Creative Designer</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
            I craft digital experiences that blend aesthetic elegance with functional robustness. 
            Specializing in modern web technologies and user-centric design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto"
            >
              View My Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Download Resume <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>

       {/* Decorative Elements */}
       <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
       >
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-slate-400 rounded-full" />
            </div>
       </motion.div>
    </section>
  );
}
