import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#0F1115] pointer-events-none overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-primary/[0.02] blur-[150px] rounded-full" />
      
      {/* Animated Thin Red Grid Lines */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#E10600]"
            style={{
              width: i % 2 === 0 ? "100%" : "1px",
              height: i % 2 === 0 ? "1px" : "100%",
              left: i % 2 === 0 ? 0 : `${(i + 1) * 8.33}%`,
              top: i % 2 === 0 ? `${(i + 1) * 8.33}%` : 0,
              opacity: 0.05,
            }}
            animate={{
              x: i % 2 !== 0 ? [-40, 40] : 0,
              y: i % 2 === 0 ? [-40, 40] : 0,
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
