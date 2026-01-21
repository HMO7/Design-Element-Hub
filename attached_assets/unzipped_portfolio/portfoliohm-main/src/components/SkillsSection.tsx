import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Skills section with categorized skill grid
 */

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "PHP", "C", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Django", "Spring Boot", "Spring Framework", "TensorFlow"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript", "REST API"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL", "Database Design"],
  },
  {
    title: "Cloud Platforms",
    skills: ["Google Cloud Platform (GCP)", "Oracle Cloud Infrastructure (OCI)"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Maven", "Kafka"],
  },
  {
    title: "AI/ML",
    skills: ["TensorFlow", "Model Integration", "Cloud-based ML Services"],
  },
  {
    title: "Development Practices",
    skills: ["Agile", "SDLC", "Code Reviews", "Version Control"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-card/50 relative"
      aria-label="Skills"
      ref={ref}
    >
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="section-divider" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Expertise
              </span>
              <div className="section-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Skills &{" "}
              <span className="relative inline-block">
                Technologies
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-primary" />
              </span>
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="card-lift p-6 bg-card border border-border rounded-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default SkillsSection;