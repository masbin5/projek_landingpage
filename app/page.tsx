import Hero from '@/components/Hero';
import { Section } from '@/components/ui/Section';
import UiUxCard from '@/components/Projects/UiUxCard';
import LogoCard from '@/components/Projects/LogoCard';
import WebsiteCard from '@/components/Projects/WebsiteCard';
import VideoCard from '@/components/Projects/VideoCard';
import GraphicDesignCard from '@/components/Projects/GraphicDesignCard';
import { 
  uiUxProjects, 
  logoProjects, 
  websiteProjects, 
  videoProjects, 
  graphicProjects 
} from '@/lib/data';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      
      <div id="projects" className="bg-white">
        {/* UI/UX Section */}
        <Section className="border-b border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">UI/UX Design</h2>
                <p className="text-slate-500 max-w-md">User-centered interfaces designed for clarity and engagement.</p>
            </div>
            <span className="text-slate-300 hidden md:block text-6xl font-black opacity-20">01</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uiUxProjects.map((project, index) => (
              <UiUxCard key={index} project={project} />
            ))}
          </div>
        </Section>

        {/* Logo Section */}
        <Section className="bg-slate-50/50">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Brand Identity</h2>
                <p className="text-slate-500 max-w-md">Memorable logos and visual systems that tell a story.</p>
            </div>
            <span className="text-slate-300 hidden md:block text-6xl font-black opacity-20">02</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {logoProjects.map((project, index) => (
              <LogoCard key={index} project={project} />
            ))}
          </div>
        </Section>

        {/* Website Section */}
        <Section className="border-b border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Web Development</h2>
                <p className="text-slate-500 max-w-md">Responsive, high-performance websites built with modern stacks.</p>
            </div>
            <span className="text-slate-300 hidden md:block text-6xl font-black opacity-20">03</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteProjects.map((project, index) => (
              <WebsiteCard key={index} project={project} />
            ))}
          </div>
        </Section>

        {/* Video Section */}
        <Section className="bg-slate-900 text-white">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Video Production</h2>
                <p className="text-slate-400 max-w-md">Engaging video content edited for impact and retention.</p>
            </div>
            <span className="text-slate-700 hidden md:block text-6xl font-black opacity-20">04</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoProjects.map((project, index) => (
              <VideoCard key={index} project={project} />
            ))}
          </div>
        </Section>

        {/* Graphic Design Section */}
        <Section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Graphic Design</h2>
                <p className="text-slate-500 max-w-md">Visual assets for social media, marketing, and print.</p>
            </div>
            <span className="text-slate-300 hidden md:block text-6xl font-black opacity-20">05</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {graphicProjects.map((project, index) => (
              <GraphicDesignCard key={index} project={project} />
            ))}
          </div>
        </Section>
      </div>

        {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Let's work together</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Have a project in mind? Let's discuss how we can bring your vision to life.
            </p>
            <a href="mailto:hello@example.com" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
                Get in Touch
            </a>
            <div className="mt-12 text-sm text-slate-400">
                © 2024 Alex Morgan. All rights reserved.
            </div>
        </div>
      </footer>
    </main>
  );
}
