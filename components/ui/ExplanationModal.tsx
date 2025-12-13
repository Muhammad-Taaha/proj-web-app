"use client";

import { X } from "lucide-react";

interface ExplanationModalProps {
  open: boolean;
  onClose: () => void;
  data: {
    predictedClass: string;
    confidence: number;
    features: string[];
    explanation: string;
  };
}

export default function ExplanationModal({
  open,
  onClose,
  data,
}: ExplanationModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-[#0B0F1A] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">
          RAG-Based Prediction Explanation
        </h2>

        <p className="text-gray-400 mb-4">
          This explanation is generated using retrieved network traffic patterns.
        </p>

        <div className="space-y-4">
          <div>
            <span className="text-gray-400">Predicted Class:</span>
            <p className="text-cyan-400 font-semibold text-lg">
              {data.predictedClass}
            </p>
          </div>

          <div>
            <span className="text-gray-400">Confidence:</span>
            <p className="text-green-400 font-semibold">
              {(data.confidence * 100).toFixed(2)}%
            </p>
          </div>

          <div>
            <span className="text-gray-400">Top Contributing Features:</span>
            <ul className="list-disc list-inside text-gray-300">
              {data.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-gray-400">Explanation:</span>
            <p className="text-gray-200 leading-relaxed mt-1">
              {data.explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
