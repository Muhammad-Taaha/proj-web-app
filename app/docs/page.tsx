'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Terminal, Code, Settings, TrendingUp } from 'lucide-react';

// --- Static Content (Simulating the loaded README.md content) ---
const DOCS_SECTIONS = [
  { id: 'quick-start', title: '🚀 1. Quick Start', icon: Zap, content: `
    This project requires **Node.js (v18+)** and **npm** or **yarn**.
    <h3 class="text-xl font-bold mt-4 mb-2 text-indigo-300">1.1. Setup</h3>
    <pre class="bg-gray-800 p-3 rounded-lg text-sm overflow-x-auto my-3 border border-indigo-700/50">
      git clone https://git.example.com/project-core.git
      cd project-core
      npm install
    </pre>
    <h3 class="text-xl font-bold mt-4 mb-2 text-indigo-300">1.2. Running Server</h3>
    Execute the development script:
    <pre class="bg-gray-800 p-3 rounded-lg text-sm overflow-x-auto my-3 border border-indigo-700/50">
      npm run dev
    </pre>
    <p class="text-yellow-400 mt-3 flex items-center"><TrendingUp class="h-4 w-4 mr-2"/> Access URL: http://localhost:3000</p>
  `},
  { id: 'stack', title: '⚙️ 2. Project Stack', icon: Code, content: `
    Built using modern front-end technologies for high performance:
    <ul class="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-300">
      <li>**Framework:** Next.js 14 (App Router)</li>
      <li>**Styling:** Tailwind CSS v3</li>
      <li>**Animations:** Framer Motion</li>
      <li>**Icons:** Lucide React</li>
    </ul>
  `},
  { id: 'deployment', title: '📦 3. Deployment', icon: Settings, content: `
    To prepare the application for production deployment:
    <h3 class="text-xl font-bold mt-4 mb-2 text-indigo-300">Build Command</h3>
    <pre class="bg-gray-800 p-3 rounded-lg text-sm overflow-x-auto my-3 border border-indigo-700/50">
      npm run build
    </pre>
    <p class="text-gray-400 mt-3">This command compiles the application into the standard production directory.</p>
  `},
  { id: 'customization', title: '🎨 4. Customization', icon: Terminal, content: `
    The core UI theme uses **Indigo** and **Cyan** gradients.
    <h3 class="text-xl font-bold mt-4 mb-2 text-indigo-300">A. UI Theming</h3>
    <p class="text-gray-400">Primary Accent: \`indigo-600\` / Secondary Accent: \`cyan-500\`.</p>
    <h3 class="text-xl font-bold mt-4 mb-2 text-indigo-300">B. Download Links</h3>
    Edit the \`terraboxLink\` and \`gitCommand\` variables in \`SexyDownloadingPage.jsx\` to update acquisition targets.
  `},
];

// --- Main Page Component ---
export default function SexyDocsPage() {
  const [activeSection, setActiveSection] = useState(DOCS_SECTIONS[0].id);

  // Smooth scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // Offset for fixed header
      
      let current = DOCS_SECTIONS[0].id;
      for (const section of DOCS_SECTIONS) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      
      {/* Background Effect: Subtle grid and constant, slow pulse */}
      <div className="absolute inset-0 bg-[size:50px_50px] bg-grid-white/5 [mask-image:radial-gradient(transparent,black)]"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[200px] animate-pulse-slow"></div>

      {/* Fixed Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 w-full bg-gray-950/90 backdrop-blur-md border-b border-indigo-600/50 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center space-x-4">
          <BookOpen className="h-7 w-7 text-indigo-400" />
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-tight">
            PROJECT DOCUMENTATION
          </h1>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto flex">
        
        {/* Fixed Navigation Sidebar (Table of Contents) */}
        <motion.nav 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block w-72 flex-shrink-0 sticky top-[77px] h-[calc(100vh-77px)] p-8 overflow-y-auto border-r border-gray-800"
        >
          <h2 className="text-lg font-bold mb-4 text-white tracking-wider">TABLE OF CONTENTS</h2>
          <ul className="space-y-2">
            {DOCS_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-3 w-full text-left py-2 px-3 rounded-lg transition duration-200 
                    ${activeSection === section.id 
                      ? 'bg-indigo-600/30 text-indigo-300 font-bold border border-indigo-500' 
                      : 'text-gray-400 hover:bg-gray-800/70'}`
                  }
                >
                  <section.icon className="h-4 w-4" />
                  <span className="text-sm font-mono">{section.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Main Content Area */}
        <main className="flex-grow p-8 lg:p-12 w-full lg:w-[calc(100%-288px)]">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-400 tracking-tighter border-b pb-4 border-gray-700">
              AI NETWORK THREAT CORE (V1.0)
            </h1>

            {DOCS_SECTIONS.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="group p-6 bg-gray-900/60 rounded-xl shadow-2xl border-l-4 border-indigo-500/50 hover:border-indigo-500 transition duration-300"
              >
                <h2 className="text-3xl font-bold mb-4 text-white flex items-center space-x-3 group-hover:text-cyan-400 transition">
                  <section.icon className="h-6 w-6" />
                  {section.title.split('. ')[1]} {/* Just the main title part */}
                </h2>
                <div 
                  className="prose prose-invert max-w-none text-gray-300 leading-relaxed [&_pre]:bg-gray-800/70 [&_pre]:p-4 [&_pre]:rounded-md [&_pre]:border [&_pre]:border-indigo-700 [&_ul]:pl-5 [&_h3]:text-xl [&_h3]:font-bold"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </motion.section>
            ))}
            
            {/* Footer space */}
            <div className="h-20"></div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}