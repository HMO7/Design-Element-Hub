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
      {/* Icon Placeholder instead of Image */}
      <div className="relative aspect-video flex items-center justify-center bg-secondary/30 group-hover:bg-secondary/50 transition-colors">
        <div className="text-primary/40 group-hover:text-primary transition-colors">
          {index === 0 && <div className="w-16 h-16 border-2 border-current rounded-lg flex items-center justify-center opacity-40"><span className="text-2xl font-display font-light">S</span></div>}
          {index === 1 && <div className="w-16 h-16 border-2 border-current rounded-full flex items-center justify-center opacity-40"><span className="text-2xl font-display font-light">E</span></div>}
          {index === 2 && <div className="w-16 h-16 border-2 border-current rotate-45 flex items-center justify-center opacity-40"><span className="text-2xl font-display font-light -rotate-45">M</span></div>}
        </div>
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {project.projectUrl && (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white text-background rounded-full hover:bg-primary hover:text-white transition-colors transform hover:scale-110"
              title="View Live"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white text-background rounded-full hover:bg-primary hover:text-white transition-colors transform hover:scale-110"
              title="View Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

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
