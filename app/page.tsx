'use client'
import Image from "next/image";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { ShieldCheck, Activity, Radar, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FocusCards } from "@/components/ui/focus-cards"; // import your FocusCards component

export default function Home() {
  const router = useRouter();
  const changing = () => {
    router.push("/stats");
  };
  const changing2 = () => {
    router.push("/download");
  };
  // Contributors data
  const contributors = [
    {
      title: "Muhammad Taaha",
      src: "/taaha.jpg", // replace with actual image paths
      github: "https://github.com/Muhammad-Taaha"
    },
    {
      title: "Ahmed Jawad",
      src: "/ahmed.jpg",
      github: "https://github.com/ahmed-jawad-5"
    },
    {
      title: "Ali Asgher",
      src: "/ali.jpg",
      github: "https://github.com/AliAsghar954"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-amber-600 via-green-500 to-red-700 bg-clip-text text-transparent">
            <EncryptedText
              text="Intelligent Network Anomaly Detection"
              revealDelayMs={40}
              flipDelayMs={30}
              encryptedClassName="text-red-500/40"
              revealedClassName="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            />
          </div>

          <div className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            <EncryptedText
              text="Detect malicious traffic, zero-day attacks, and abnormal behavior in real-time using deep learning powered autoencoders."
              revealDelayMs={15}
              flipDelayMs={25}
              encryptedClassName="text-grey-500/50"
              revealedClassName="text-gray-300"
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg transition" onClick={changing2}>
              Download 
            </button>
            <button className="px-8 py-3 rounded-2xl border border-gray-600 hover:border-cyan-400 text-white transition" onClick={changing}>
              View stats 
            </button>
          </div>
        </motion.div>

        {/* Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-green-400/30 rounded-full blur-3xl" />
      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            icon={<Radar size={28} />}
            title="Real‑Time Detection"
            desc="Live packet inspection and anomaly scoring with millisecond latency."
          />
          <Feature
            icon={<Activity size={28} />}
            title="Autoencoder Based"
            desc="Unsupervised deep learning trained on normal traffic behavior."
          />
          <Feature
            icon={<ShieldCheck size={28} />}
            title="Threat Prevention"
            desc="Identify intrusions, scans, and data exfiltration patterns."
          />
          <Feature
            icon={<Zap size={28} />}
            title="High Performance"
            desc="Optimized inference pipeline for high‑throughput networks."
          />
        </div>
      </section>

      {/* CONTRIBUTORS SECTION */}
      <section className="px-6 pb-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Meet the Contributors
          </h2>
          <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
            These talented developers have contributed to building the Intelligent Network Anomaly Detection System.
          </p>

          <FocusCards cards={contributors} />
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Network Anomaly Detection System · Powered by AI
      </footer>
    </main>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-2xl p-6 shadow-lg"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </motion.div>
  );
}
