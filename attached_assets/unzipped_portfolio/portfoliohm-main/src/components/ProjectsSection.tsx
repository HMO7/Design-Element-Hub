import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

/**
 * Projects showcase section
 */

const projects = [
  {
    title: "Safehaven Guarding Platform",
    description:
      "Complete UI/UX interface implementation achieving 10% reduction in page load latency through strategic optimization of visual rendering and asset management.",
    tags: ["Java", "Figma", "UI/UX", "Performance Optimization"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Scalable e-commerce platform built with Python and Django featuring dynamic product catalog, shopping cart functionality, and secure checkout process.",
    tags: ["Python", "Django", "Pandas", "NumPy", "SQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Spring Boot Microservice",
    description:
      "Microservice integrating Kafka, REST APIs, JPA, and Maven-based validation as part of JPMorgan Chase Software Engineering simulation.",
    tags: ["Spring Boot", "Kafka", "REST API", "JPA", "Maven"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "AI/ML Model Integration",
    description:
      "Integration of TensorFlow AI/ML models into web applications with cloud-based ML services.",
    tags: ["TensorFlow", "Python", "GCP", "OCI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative"
      aria-label="Projects"
      ref={ref}
    >
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="section-divider" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Selected{" "}
              <span className="relative inline-block">
                Projects
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-primary" />
              </span>
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="card-lift group relative bg-card border border-border rounded-sm overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded-sm">
                    <span className="text-xs uppercase tracking-wider text-primary font-medium">
                      Featured
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Project image placeholder */}
                  <div className="aspect-video bg-secondary/50 rounded-sm mb-6 flex items-center justify-center border border-border">
                    <span className="text-muted-foreground text-sm">
                      Project Preview
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="red-underline">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="red-underline">Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;