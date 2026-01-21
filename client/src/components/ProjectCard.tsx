import { motion } from "framer-motion";
import type { Project } from "@shared/schema";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-card rounded-xl overflow-hidden border border-white/5 shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
