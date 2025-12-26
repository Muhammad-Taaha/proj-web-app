'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimate, stagger, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, Activity, ShieldCheck, ArrowRight, TrendingUp, 
  Network, Database, Layers, Binary, Cpu, Terminal, 
  Search, ListFilter, Code, Box
} from 'lucide-react';

const TECH_SECTIONS = [
  {
    id: 'architecture',
    title: 'Distributed Process Fabric',
    tag: 'SYSTEM_CORE',
    icon: Layers,
    content: `
      Our architecture bridges the <strong>Raw Socket Scapy Kernel</strong> with the <strong>Electron Runtime</strong>. 
      To prevent UI blocking during 10Gbps floods, the system utilizes a <strong>Multi-Threaded IPC Bridge</strong>.
      <ul class="mt-4 space-y-2 text-sm text-gray-400">
        <li><strong class="text-cyan-400">Layer 1:</strong> Scapy Kernel handles packet crafting/sniffing in a root-level sub-shell.</li>
        <li><strong class="text-indigo-400">Layer 2:</strong> Node.js Buffer Stream sanitizes hex-data into serialized JSON objects.</li>
        <li><strong class="text-fuchsia-400">Layer 3:</strong> React Renderer utilizes <em>Windowing</em> to display 100k+ packets at 60FPS.</li>
      </ul>
    `
  },
  {
    id: 'database',
    title: 'Custom Memory-Mapped DB',
    tag: 'DATA_STORAGE',
    icon: Database,
    content: `
      Standard relational databases introduce too much latency for real-time packet analysis. We engineered a <strong>Volatile Custom Engine</strong> optimized for throughput:
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div class="p-4 bg-white/5 border border-indigo-500/30 rounded-2xl">
          <h4 class="text-indigo-300 font-bold flex items-center gap-2 mb-2"><Binary size={16}/> B+ Tree Indexing</h4>
          <p class="text-xs text-gray-400 leading-relaxed">Manages <strong>Range Queries</strong>. Allows the system to locate all packets between specific timestamps or sizes in $O(\log n)$ time.</p>
        </div>
        <div class="p-4 bg-white/5 border border-cyan-500/30 rounded-2xl">
          <h4 class="text-cyan-300 font-bold flex items-center gap-2 mb-2"><ListFilter size={16}/> Doubly Linked List</h4>
          <p class="text-xs text-gray-400 leading-relaxed">The <strong>Live Buffer</strong>. Every packet is a node with pointers to its neighbors, enabling $O(1)$ temporal stream appends.</p>
        </div>
      </div>
      <p class="mt-4 text-sm font-mono text-fuchsia-400">// Hash Map Lookup: O(1) retrieval for specific Packet IDs.</p>
    `
  },
  {
    id: 'algorithms',
    title: 'Algorithmic Sorting Engine',
    tag: 'LOGIC_LAYER',
    icon: Code,
    content: `
      The engine processes massive datasets using high-performance algorithms. We've implemented a comparative visualization suite:
      <table class="w-full mt-6 text-xs font-mono border-separate border-spacing-y-2">
        <tr class="text-gray-500 uppercase tracking-widest"><th class="text-left pb-2">Algorithm</th><th class="text-left pb-2">Complexity</th><th class="text-left pb-2">Use Case</th></tr>
        <tr class="bg-indigo-500/5 rounded-lg"><td class="p-3 text-white font-bold">Quick Sort</td><td class="p-3 text-cyan-400">$O(n \log n)$</td><td class="p-3 italic text-gray-400">Sorting packets by Payload Size</td></tr>
        <tr class="bg-fuchsia-500/5 rounded-lg"><td class="p-3 text-white font-bold">Merge Sort</td><td class="p-3 text-cyan-400">$O(n \log n)$</td><td class="p-3 italic text-gray-400">Stable sorting by Capture Time</td></tr>
        <tr class="bg-cyan-500/5 rounded-lg"><td class="p-3 text-white font-bold">Binary Search</td><td class="p-3 text-cyan-400">$O(\log n)$</td><td class="p-3 italic text-gray-400">B+ Tree Node Retrieval</td></tr>
      </table>
    `
  },
  {
    id: 'networking',
    title: 'Raw TCP Stack Injection',
    tag: 'NETWORK_CORE',
    icon: Network,
    content: `
      Bypassing standard OS sockets, we craft every layer of the <strong>OSI Model</strong> manually using Scapy. This allows for manual <strong>ISN (Initial Sequence Number)</strong> tracking and stateful packet injection.
      <div class="mt-6 p-4 bg-black/60 border border-cyan-500/30 rounded-2xl font-mono text-[10px] leading-relaxed">
        <span class="text-gray-500"># Handshake Manipulation Logic</span><br/>
        <span class="text-indigo-400">syn_pkt</span> = IP(dst=B)/TCP(flags="S", seq=RandInt())<br/>
        <span class="text-fuchsia-400">reply</span> = sr1(syn_pkt)<br/>
        <span class="text-cyan-400">ack_pkt</span> = IP(dst=B)/TCP(flags="A", ack=reply.seq + 1)
      </div>
    `
  }
];

export default function DetailedDocsPage() {
  const [activeSection, setActiveSection] = useState(TECH_SECTIONS[0].id);
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -7]);
  const words = "Engineered Architecture Specifications".split(" ");

  useEffect(() => {
    animate("span", { opacity: 1, y: 0, filter: "blur(0px)" }, { duration: 0.5, delay: stagger(0.06) });
    animate(scope.current, {
        textShadow: [
            "0 0 10px #3AC1FF, 0 0 20px #9B59B6",
            "0 0 15px #5DADE2, 0 0 25px #8E44AD",
            "0 0 10px #3AC1FF, 0 0 20px #9B59B6",
        ]
    }, { duration: 6, repeat: Infinity });
  }, [scope]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 relative overflow-x-hidden">
      {/* Background: Matching StatsPage Grid & Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[size:25px_25px] bg-grid-small-white/5 [mask-image:radial-gradient(transparent,black)]"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #0d0d40 0%, transparent 50%)' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className="text-center mb-32">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
            <ShieldCheck size={14} className="animate-pulse" /> Security Clearance Level-9
          </motion.div>
          
          <h1 ref={scope} className="text-5xl lg:text-7xl font-black tracking-tighter bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent mb-8">
            {words.map((word, idx) => (
              <span key={idx} className="inline-block opacity-0 mr-4" style={{ transform: "translateY(40px)", filter: "blur(15px)" }}>
                {word}
              </span>
            ))}
          </h1>
          
          <p className="text-gray-400 font-mono tracking-wide text-sm md:text-xl max-w-3xl mx-auto leading-relaxed">
            <TrendingUp className="inline-block mr-3 h-5 w-5 text-fuchsia-400" />
            // Protocol documentation for the **Threat Matrix Core**.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
          
          {/* Sidebar: Holographic Nav */}
          <aside className="hidden lg:block">
            <motion.div style={{ rotateX }} className="sticky top-20 p-1 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-[0_0_50px_rgba(0,191,255,0.15)] overflow-hidden">
              {/* Animated top border */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-pulse"></div>
              
              <div className="p-6 space-y-3">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-4 mb-6 italic">// Index_Modules</p>
                {TECH_SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 group ${
                      activeSection === section.id 
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_25px_rgba(79,70,229,0.3)]' 
                      : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <section.icon size={18} className={activeSection === section.id ? 'text-cyan-400' : 'group-hover:text-indigo-400'} />
                    <span className="text-xs font-black uppercase tracking-tighter">{section.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </aside>

          {/* Main Content Body */}
          <div className="space-y-28">
            {TECH_SECTIONS.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                onViewportEnter={() => setActiveSection(section.id)}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Visual Header for Section */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-5 bg-slate-900 border border-indigo-500/40 rounded-2xl shadow-[0_0_30px_rgba(79,70,229,0.3)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-500">
                    <section.icon size={32} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono text-fuchsia-400 bg-fuchsia-400/10 px-2 py-0.5 rounded border border-fuchsia-400/20 uppercase tracking-widest">
                        {section.tag}
                      </span>
                      <span className="text-slate-700 font-mono text-xs tracking-tighter">REF:_SYS_00{idx}X</span>
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tighter">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Content Box */}
                <div className="relative p-8 md:p-12 bg-slate-950/50 border border-white/5 rounded-[40px] backdrop-blur-xl group-hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
                    {/* Holographic Line */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
                    
                    <div 
                      className="prose prose-invert max-w-none text-gray-400 leading-relaxed
                        [&_strong]:text-cyan-300 [&_strong]:font-black
                        [&_h4]:text-white [&_h4]:text-lg [&_h4]:mt-2
                        [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                </div>
              </motion.section>
            ))}

            {/* Final Call to Build */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-16 rounded-[60px] bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border border-white/10 text-center relative"
            >
                <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 px-8 py-2 bg-gradient-to-r from-pink-600 to-red-600 text-white font-black rounded-full text-[10px] uppercase tracking-[0.4em] shadow-2xl">
                    Final System Verification
                </div>
                <h3 className="text-4xl font-black text-white mb-6">Initialize Core Handshake?</h3>
                <p className="text-gray-400 mb-10 max-w-md mx-auto font-mono text-sm leading-relaxed">
                   // Ready to deploy the dual-machine TCP fabric with integrated threat detection.
                </p>
                <button className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-white rounded-full bg-gradient-to-r from-purple-700 to-blue-600 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all">
                    <span className="relative px-10 py-4 transition-all ease-in duration-300 bg-slate-950 rounded-full group-hover:bg-transparent">
                        <Zap className="inline h-4 w-4 mr-3 text-cyan-400" />
                        COMMENCE SYSTEM INITIALIZATION
                    </span>
                </button>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="py-20 text-center border-t border-white/5 relative z-10">
        <p className="text-[10px] font-mono text-slate-600 tracking-[0.6em] uppercase">
          © 2025 AI_THREAT_DETECTION // CORE_ENGINEERING_DOCS
        </p>
      </footer>
    </main>
  );
}