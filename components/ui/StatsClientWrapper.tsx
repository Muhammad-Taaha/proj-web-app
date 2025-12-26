"use client";

import React from "react";
import { useMotionValue, MotionValue } from "motion/react";
import { GoogleGeminiEffect } from "./google-gemini-effect";
import ExplanationModal from "./ExplanationModal";

interface StatsClientWrapperProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const StatsClientWrapper: React.FC<StatsClientWrapperProps> = ({ open, setOpen }) => {
  // Create an array of MotionValues for the paths (5 paths in the SVG)
  const pathLengths: MotionValue<number>[] = React.useMemo(
    () => Array.from({ length: 5 }, () => useMotionValue(0)),
    []
  );

  return (
    <>
      <div className="mt-32 w-full relative">
        <GoogleGeminiEffect pathLengths={pathLengths} />
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
