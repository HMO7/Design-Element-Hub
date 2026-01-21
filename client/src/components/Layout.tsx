import { motion } from "framer-motion";
import { ReactNode } from "react";

export function BackgroundLines() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] opacity-[0.05]">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary"
          style={{
            width: i % 2 === 0 ? '100%' : '1px',
            height: i % 2 === 0 ? '1px' : '100%',
            left: i % 2 === 0 ? 0 : `${(i + 1) * 12}%`,
            top: i % 2 === 0 ? `${(i + 1) * 12}%` : 0,
          }}
          animate={{
            x: i % 2 !== 0 ? [-30, 30, -30] : 0,
            y: i % 2 === 0 ? [-30, 30, -30] : 0,
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundLines />
      {children}
    </div>
  );
}
