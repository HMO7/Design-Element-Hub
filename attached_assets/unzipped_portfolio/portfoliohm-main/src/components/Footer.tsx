import { motion } from "framer-motion";
import { Linkedin, Github, Cloud, Heart } from "lucide-react";

/**
 * Footer with social links and copyright
 */
const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com/in/johndeveloper", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/johndeveloper", label: "GitHub" },
    { icon: Cloud, url: "https://cloudskillsboost.google", label: "Google Cloud" },
  ];

  return (
    <footer className="py-12 border-t border-border relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-semibold">
                JD<span className="text-primary">.</span>
              </span>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <motion.p
              className="text-sm text-muted-foreground flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Made with <Heart className="w-3 h-3 text-primary" /> © {new Date().getFullYear()}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;