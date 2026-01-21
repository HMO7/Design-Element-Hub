import { motion } from "framer-motion";

/**
 * Animated red lines moving slowly across the background
 * Creates a subtle, premium animated effect
 */
const AnimatedBackground = () => {
  const lines = [
    { delay: 0, top: "20%", duration: 25 },
    { delay: 5, top: "40%", duration: 30 },
    { delay: 10, top: "60%", duration: 22 },
    { delay: 15, top: "80%", duration: 28 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          style={{ top: line.top }}
          initial={{ x: "-200px", opacity: 0 }}
          animate={{
            x: ["calc(-200px)", "calc(100vw + 200px)"],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Vertical accent lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
    </div>
  );
};

export default AnimatedBackground;