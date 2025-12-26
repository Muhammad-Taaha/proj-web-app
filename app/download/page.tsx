'use client'

import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';
import { DownloadCloud, GitBranch, Link, CheckCircle, Loader, BookOpen } from 'lucide-react';
import { useRouter } from "next/navigation";

// --- Download Option Card Component ---
interface DownloadOptionCardProps {
  icon: FC<any>; // Lucide icon component
  title: string;
  description: string;
  onClick?: () => void;
  colorClass?: 'indigo' | 'cyan';
  link?: string;
  buttonText?: string;
}

const DownloadOptionCard: FC<DownloadOptionCardProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
  colorClass = 'indigo',
  link,
  buttonText
}) => (
  <motion.div
    whileHover={{ 
      scale: 1.05, 
      boxShadow: `0 0 40px ${colorClass === 'indigo' ? 'rgba(99,102,241,0.9)' : 'rgba(0,255,255,0.9)'}`,
      transition: { duration: 0.2 } 
    }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 150, duration: 0.5 }}
    className={`group p-6 bg-gray-900/90 border border-${colorClass}-600/60 rounded-xl cursor-pointer transition duration-500 relative overflow-hidden shadow-xl`}
    onClick={onClick}
  >
    <div
      className={`absolute -inset-2 opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      style={{ backgroundImage: `radial-gradient(circle at 50% 0, var(--tw-color-${colorClass}-500), transparent)` }}
    />
    <div className="flex items-start space-x-4">
      {Icon && <Icon className={`h-8 w-8 text-${colorClass}-400 mt-1 drop-shadow-md`} />}
      <div>
        <h3 className="text-xl font-bold mb-1 text-white tracking-wider">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 font-extralight">{description}</p>
        {buttonText && (
          <button 
            className={`px-5 py-2 text-sm font-semibold rounded-full 
                        bg-gradient-to-r from-${colorClass}-500 to-${colorClass}-700 
                        text-white shadow-xl transition duration-300 transform 
                        hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.9)]`}
            onClick={(e) => { 
              e.stopPropagation();
              if (link) window.open(link, '_blank');
            }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  </motion.div>
);

// --- Main Page Component ---
const SexyDownloadingPage: FC = () => {
  const [selectedOption, setSelectedOption] = useState<'terrabox' | 'git' | null>(null);
  const [status, setStatus] = useState<string>("Awaiting data retrieval vector selection...");

  const terraboxLink = "https://terrabox.example.com/project_data_matrix";
  const gitCommand = "git clone https://github.com/ahmed-jawad-5/UDP_server_NetworkApplication.git";
  const docsLink = "/documentation/README.md"; // Internal docs route

  const handleSelectOption = (option: 'terrabox' | 'git') => {
    setSelectedOption(option);
    if (option === 'terrabox') {
      setStatus("TerraBox link engaged. Click 'ACCESS DIRECT' to initiate secure download.");
    } else if (option === 'git') {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(gitCommand)
          .then(() => setStatus("Git Clone command copied to system clipboard."))
          .catch(() => setStatus("Error copying command. Click 'COPY COMMAND' manually."));
      } else {
        setStatus("Git Clone command displayed. Click 'COPY COMMAND' to retrieve.");
      }
    }
  };

  const router = useRouter();
  const goToDocs = () => {
    router.push("/docs");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[size:50px_50px] bg-grid-white/5 [mask-image:radial-gradient(transparent,black)]"></div>
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-indigo-700/10 rounded-full blur-[250px] animate-pulse-slow"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, type: "spring", stiffness: 50 }}
        className="relative z-10 w-full max-w-3xl p-8 md:p-12 bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_100px_rgba(99,102,241,0.6)]"
      >
        {/* Header */}
        <header className="text-center mb-10">
          <DownloadCloud className="h-14 w-14 mx-auto text-cyan-400 mb-4 drop-shadow-lg" />
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 tracking-tighter">
            Download Now
          </h1>
          <p className="mt-3 text-xl text-gray-300 font-extralight tracking-wide">
            Securely choose your transfer protocol to begin deployment.
          </p>
        </header>

        {/* Option Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <DownloadOptionCard
            icon={Link}
            title="TerraBox Direct"
            description="High-speed, authenticated delivery via dedicated cloud network channel."
            onClick={() => handleSelectOption('terrabox')}
            colorClass="indigo"
            link={terraboxLink}
            buttonText="ACCESS DIRECT"
          />
          <DownloadOptionCard
            icon={GitBranch}
            title="Git Repository"
            description="Version-controlled access via secured SSH/HTTPS connection for development."
            onClick={() => handleSelectOption('git')}
            colorClass="cyan"
            link={gitCommand}
            buttonText="COPY COMMAND"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800/70 rounded-lg border border-gray-700/50 mt-6 shadow-inner shadow-gray-950/50">
          <motion.div
            key={selectedOption || 'initial'}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center space-x-3 mb-4 md:mb-0"
          >
            {selectedOption ? (
              <CheckCircle className="h-5 w-5 text-emerald-400" />
            ) : (
              <Loader className="h-5 w-5 text-indigo-400 animate-spin" />
            )}
            <p className="text-sm font-light text-gray-300 font-mono">
              [SYSTEM]: {status}
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="group flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-full bg-slate-700/50 text-yellow-300 border border-yellow-400/50 transition duration-300 hover:bg-slate-600/70 hover:text-yellow-200 shadow-[0_0_10px_rgba(252,211,77,0.4)]"
            onClick={goToDocs}
          >
            <BookOpen className="h-4 w-4 text-yellow-400 transition-transform group-hover:-translate-y-0.5" />
            <span>READ THE DOCS</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SexyDownloadingPage;
