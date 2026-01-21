import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hmLogo from "@assets/Asset_3_1769014249866.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-[11px] uppercase tracking-[0.5em] font-medium text-foreground"
            >
              Hello, I'm
            </motion.p>
            
            <div className="relative group">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight px-4">
                Himanshu Suthar
              </h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary"
              />
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="flex items-center gap-3 text-muted-foreground"
          >
            <span className="text-[13px] md:text-sm font-light tracking-[0.2em] uppercase">Software Developer</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span className="text-[13px] md:text-sm font-light tracking-[0.2em] uppercase">AI/ML & Cloud</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="pt-12"
          >
            <a 
              href="#about" 
              className="group flex flex-col items-center gap-4 text-white/30 hover:text-white transition-colors duration-500"
            >
              <span className="text-[9px] uppercase tracking-[0.6em] font-medium">Explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Extreme Minimal Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
