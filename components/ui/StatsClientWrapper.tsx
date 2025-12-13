// components/ui/StatsClientWrapper.tsx
"use client";

import { GoogleGeminiEffect } from "./google-gemini-effect";
import ExplanationModal from "./ExplanationModal";

export const StatsClientWrapper = ({ open, setOpen, pathLengths }) => {
  return (
    <>
      <div className="mt-32 w-full relative">
        <GoogleGeminiEffect
          pathLengths={pathLengths}
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
