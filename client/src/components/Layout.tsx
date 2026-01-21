import { motion } from "framer-motion";
import { ReactNode } from "react";

export function BackgroundLines() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] opacity-[0.15]">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary"
          style={{
            width: i % 2 === 0 ? '100%' : '1px',
            height: i % 2 === 0 ? '1px' : '100%',
            left: i % 2 === 0 ? 0 : `${(i + 1) * 10}%`,
            top: i % 2 === 0 ? `${(i + 1) * 10}%` : 0,
          }}
          animate={{
            x: i % 2 !== 0 ? [-50, 50, -50] : 0,
            y: i % 2 === 0 ? [-50, 50, -50] : 0,
          }}
          transition={{
            duration: 15 + i * 2,
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
