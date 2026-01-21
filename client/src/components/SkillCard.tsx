import { motion } from "framer-motion";
import type { Skill } from "@shared/schema";
import { Code2, Server, Brain, Cpu, Database, Layout } from "lucide-react";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const getIcon = (category: string) => {
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes("frontend")) return <Layout className="w-6 h-6" />;
  if (lowerCat.includes("backend")) return <Server className="w-6 h-6" />;
  if (lowerCat.includes("ai") || lowerCat.includes("ml")) return <Brain className="w-6 h-6" />;
  if (lowerCat.includes("database")) return <Database className="w-6 h-6" />;
  return <Code2 className="w-6 h-6" />;
};

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card hover:bg-card/80 border border-white/5 p-4 rounded-xl flex items-center gap-4 transition-colors group"
    >
      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {getIcon(skill.category)}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white">{skill.name}</h3>
        <p className="text-xs text-muted-foreground">{skill.category}</p>
      </div>
      {skill.proficiency > 0 && (
        <div className="w-12 h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary" 
            style={{ width: `${skill.proficiency}%` }} 
          />
        </div>
      )}
    </motion.div>
  );
}
