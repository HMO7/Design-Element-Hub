import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div 
        className="fixed inset-0 z-[-1] bg-[#0F1115] pointer-events-none" 
        aria-hidden="true"
      />
    );
  }

  return (
    <div 
      className="fixed inset-0 z-[-1] bg-[#0F1115] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.07]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#E10600]"
            style={{
              width: "100%",
              height: "1px",
              top: `${(i + 1) * 8}%`,
              left: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 40 + (i * 2),
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
