"use client";

import { useState, useEffect } from "react";
import Carousel from "@/components/ui/carousel";
import ExplanationModal from "@/components/ui/ExplanationModal";
import { motion, useAnimate, stagger, useScroll, useTransform } from "motion/react";
import { Zap, Activity, ShieldCheck, ArrowRight, TrendingUp } from "lucide-react";

export default function StatsPage() {
  const [open, setOpen] = useState(false);

  // Scroll Parallax setup
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5]); // Slight 3D tilt on scroll

  // Word animation setup
  const [scope, animate] = useAnimate();
  const words = "AI-Powered Network Threat Detection".split(" ");

  useEffect(() => {
    // Intense flash and staggered entry
    animate(
      "span",
      { opacity: 80, y: 20, filter: "blur(0px)" },
      { duration: 0.5, delay: stagger(0.05) }
    );
    // Continuous subtle pulse on the heading
    animate(
      scope.current,
      {
        textShadow: [
            "0 0 6px #39FF14, 0 0 12px #3AC1FF, 0 0 18px #9B59B6",
            "0 0 8px #2ECC71, 0 0 14px #5DADE2, 0 0 20px #8E44AD",
            "0 0 5px #27AE60, 0 0 10px #3498DB, 0 0 15px #7D3C98",
            ]

      },
      { duration: 10, repeat: Infinity, delay: 1.5 }
    );
  }, [scope.current]);

  // Example slides for Carousel (Keep names as requested)
  const slides = [
    { title: "Overall Accuracy: 80%", button: "Macro F1: 0.79", src: "/performance.jpg" },
    { title: "High Confidence Attack Detection", button: "Normal • Worms • Generic", src: "/high-confidence.jpg" },
    { title: "Explainable AI with RAG", button: "Human-Readable Insights", src: "/rag.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col items-center relative">
      {/* Background Effect: Darker, deeper grid and radial glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="bg-repeat" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0d0d40 0%, transparent 45%)', backgroundSize: '150% 150%' }}></div>
        {/* Fine, subtle grid lines */}
        <div className="absolute inset-0 bg-[size:25px_25px] bg-grid-small-white/5 [mask-image:radial-gradient(transparent,black)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 pb-24 pt-16">

        {/* Neon Animated Heading - More dramatic glow and size */}
        <motion.h1
          ref={scope}
          className="text-center text-5xl lg:text-8xl font-black leading-none tracking-tighter bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,255,0.8)] mt-16 mb-8"
        >
          {words.map((word, idx) => (
            <span
              key={idx}
              className="inline-block opacity-0 mr-4 motion-reduce:transform-none"
              style={{ transform: "translateY(50px)", filter: "blur(20px)" }}
            >
              {word}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle - Monospaced/Tech Font feel (via tracking) */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="text-center mt-6 text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-mono tracking-wide"
          style={{ textShadow: "0 0 8px rgba(100, 149, 237, 0.5)" }} // Deeper blue glow
        >
          <TrendingUp className="inline-block mr-3 h-6 w-6 text-fuchsia-400 animate-pulse" />
          // Access **Level-9 Analytics** — Processed data at the edge.
        </motion.p>
        
        {/* CTA Button to trigger Modal - Enhanced Focus Effect */}
        <div className="flex justify-center mt-12">
            <motion.button
                onClick={() => setOpen(true)}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 120 }}
                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-bold text-white rounded-full bg-gradient-to-r from-purple-700 to-blue-600 shadow-[0_0_15px_rgba(128,0,128,0.7)] hover:shadow-[0_0_25px_rgba(60,179,113,1)] transition duration-500 ease-in-out transform hover:scale-[1.03]"
            >
                <span className="relative px-8 py-3.5 transition-all ease-in duration-300 bg-slate-950/90 rounded-full group-hover:bg-slate-900/50 group-hover:text-cyan-300">
                    <Zap className="inline h-5 w-5 mr-3" />
                    ACCESS REAL-TIME THREAT MATRIX
                    <ArrowRight className="inline h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
            </motion.button>
        </div>


        {/* Carousel Section - Parallax and Frosted Glass Effect */}
        <motion.div
          style={{ rotateX }}
          initial={{ opacity: 0, y: 80, perspective: 1000 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center w-full max-w-6xl mx-auto py-16 px-4 md:px-8 bg-white/5 backdrop-blur-xl rounded-[50px] border border-white/10 shadow-[0_0_80px_rgba(0,191,255,0.2)] mt-20 perspective-1000 transform-gpu"
        >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-10 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-extrabold rounded-full text-base uppercase tracking-widest shadow-xl mb-4">
                SYSTEM STATS V2.0
            </div>
            <Carousel slides={slides} />
            
            {/* Holographic Border Accents */}
            <div className="absolute inset-0 rounded-[50px] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-border-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-border-pulse delay-500"></div>
            </div>
        </motion.div>

        {/* Feature Highlights - Stronger Shadowing */}
        <div className="mt-30 w-full">
            <h2 className="text-center text-4xl font-extrabold mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300">
                SYSTEM INTELLIGENCE OVERVIEW
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 bg-slate-900/80 border border-purple-600/60 rounded-2xl shadow-[0_10px_30px_rgba(147,51,234,0.6)] hover:shadow-[0_0_40px_rgba(192,38,211,0.8)] transition duration-500 backdrop-blur-md"
                >
                    <Activity className="h-10 w-10 text-purple-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-purple-300">Hyper-Realtime Metrics</h3>
                    <p className="text-gray-400 text-sm">
                        Process millions of packets per second with an optimized pipeline, ensuring threats are intercepted the instant they emerge.
                    </p>
                </motion.div>
                
                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-8 bg-slate-900/80 border border-cyan-600/60 rounded-2xl shadow-[0_10px_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition duration-500 backdrop-blur-md"
                >
                    <Zap className="h-10 w-10 text-cyan-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-cyan-300">Neural Network Autonomy</h3>
                    <p className="text-gray-400 text-sm">
                        The AI model continuously learns from zero-day vectors, automatically adapting its detection capabilities at the core level.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="p-8 bg-slate-900/80 border border-red-600/60 rounded-2xl shadow-[0_10px_30px_rgba(248,113,133,0.6)] hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] transition duration-500 backdrop-blur-md"
                >
                    <ShieldCheck className="h-10 w-10 text-red-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-red-300">Explanatory Forensics</h3>
                    <p className="text-gray-400 text-sm">
                        Utilize RAG-powered insight generation to produce clear, contextual forensic reports for immediate human analysis.
                    </p>
                </motion.div>
            </div>
        </div>


      </div>

      {/* Explanation Modal (Kept as is structurally) */}
      <ExplanationModal
        open={open}
        onClose={() => setOpen(false)}
        data={{
          predictedClass: "Reconnaissance",
          confidence: 0.82,
          features: ["sbytes", "dbytes", "Sload", "tcprtt", "ct_srv_src"],
          explanation:
            "The flow was classified as reconnaissance due to repeated small packet transmissions, elevated source load, and abnormal service access patterns. Retrieved historical traffic samples show similar behavior associated with scanning and probing attacks.",
        }}
      />
    </main>
  );
}