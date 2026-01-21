import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Cloud } from "lucide-react";

/**
 * About section with professional photo, tagline, and social links
 */
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/sutharhimanshu",
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/sutharhimanshu",
      label: "View GitHub profile",
    },
    {
      name: "Google Cloud",
      icon: Cloud,
      url: "https://www.cloudskillsboost.google/public_profiles/sutharhimanshu",
      label: "View Cloud Skills profile",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative"
      aria-label="About me"
      ref={ref}
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] bg-card rounded-sm overflow-hidden">
              {/* Placeholder professional image */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Professional Photo</span>
              </div>
              
              {/* Red accent border */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-primary/30 rounded-sm pointer-events-none" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="section-divider" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                About Me
              </span>
            </div>

            {/* Tagline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Building clean, scalable, and{" "}
              <span className="relative inline-block">
                modern
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-primary" />
              </span>{" "}
              web experiences.
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Entry-level Software Developer with internship experience integrating AI/ML models 
              using TensorFlow into web applications built with Python, Django, Java, and Spring Boot. 
              Familiar with cloud-based ML services, Kafka, and Maven.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Google Cloud and Oracle AI certified, with foundational enterprise exposure 
              through a JPMorgan Chase software engineering job simulation. Based in Palanpur, Gujarat, India.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <link.icon className="w-5 h-5 transition-colors group-hover:text-primary" />
                  <span className="red-underline text-sm font-medium">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;