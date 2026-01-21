import { db } from "./db";
import {
  skills, projects, contactMessages,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  createContactMessage(message: InsertContactMessage): Promise<void>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createContactMessage(message: InsertContactMessage): Promise<void> {
    await db.insert(contactMessages).values(message);
  }

  async seedData(): Promise<void> {
    const existingSkills = await this.getSkills();
    if (existingSkills.length === 0) {
      const skillsData: InsertSkill[] = [
        { name: "React", category: "Frontend", proficiency: 90 },
        { name: "TypeScript", category: "Frontend", proficiency: 85 },
        { name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
        { name: "Node.js", category: "Backend", proficiency: 80 },
        { name: "Python", category: "Backend", proficiency: 85 },
        { name: "PostgreSQL", category: "Backend", proficiency: 75 },
        { name: "TensorFlow", category: "AI/ML", proficiency: 70 },
        { name: "PyTorch", category: "AI/ML", proficiency: 65 },
        { name: "Google Cloud", category: "Tools", proficiency: 80 },
        { name: "Docker", category: "Tools", proficiency: 75 },
      ];
      await db.insert(skills).values(skillsData);
    }

    const existingProjects = await this.getProjects();
    if (existingProjects.length === 0) {
      const projectsData: InsertProject[] = [
        {
          title: "AI Image Generator",
          description: "A full-stack application that uses Stable Diffusion to generate images from text prompts.",
          imageUrl: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80",
          projectUrl: "#",
          repoUrl: "#",
          tags: ["React", "Python", "TensorFlow"]
        },
        {
          title: "E-Commerce Dashboard",
          description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          projectUrl: "#",
          repoUrl: "#",
          tags: ["Next.js", "TypeScript", "Tailwind"]
        },
        {
          title: "Smart Home Controller",
          description: "IoT interface for managing smart home devices with voice control capabilities.",
          imageUrl: "https://images.unsplash.com/photo-1558002038-109177381792?w=800&q=80",
          projectUrl: "#",
          repoUrl: "#",
          tags: ["React Native", "Node.js", "MQTT"]
        }
      ];
      await db.insert(projects).values(projectsData);
    }
  }
}

export const storage = new DatabaseStorage();
