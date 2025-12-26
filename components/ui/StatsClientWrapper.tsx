// components/ui/StatsClientWrapper.tsx
"use client";

import { useMemo } from "react";
import { motion, useMotionValue, MotionValue } from "framer-motion";
import { GoogleGeminiEffect } from "./google-gemini-effect";
import ExplanationModal from "./ExplanationModal";

// Define the props interface
interface StatsClientWrapperProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  pathLengths: number[]; // input as number array
}

export const StatsClientWrapper: React.FC<StatsClientWrapperProps> = ({
  open,
  setOpen,
  pathLengths,
}) => {
  // Convert number[] to MotionValue<number>[] for Framer Motion
  const motionPathLengths: MotionValue<number>[] = useMemo(
    () => pathLengths.map((length) => useMotionValue(length)),
    [pathLengths]
  );

  return (
    <>
      <div className="mt-32 w-full relative">
        <GoogleGeminiEffect
          pathLengths={motionPathLengths}
          title="Explore Gemini AI Visuals"
          description="Scroll down and watch these dynamic SVG paths animate beautifully with motion!"
        />
      </div>

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
    </>
  );
};
