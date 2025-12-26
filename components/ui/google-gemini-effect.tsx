import { useEffect } from "react";
import { motion, useAnimation, MotionValue } from "framer-motion";

interface GoogleGeminiEffectProps {
  pathLengths: MotionValue<number>[];
}

export const GoogleGeminiEffect: React.FC<GoogleGeminiEffectProps> = ({ pathLengths }) => {
  useEffect(() => {
    const controls = pathLengths.map((pathLength) => {
      const animation = useAnimation();

      // Animate pathLength properly
      animation.start({
        pathLength: [0, 1, 0], // <- must match the MotionValue property
        transition: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse" },
      });

      return animation;
    });

    return () => controls.forEach((c) => c.stop());
  }, [pathLengths]);

  return (
    <svg width="400" height="400">
      {pathLengths.map((p, i) => (
        <motion.path
          key={i}
          d="M0 0L100 100"
          stroke="black"
          strokeWidth={2}
          style={{ pathLength: p }}
        />
      ))}
    </svg>
  );
};
