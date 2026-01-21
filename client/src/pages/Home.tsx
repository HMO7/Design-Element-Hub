import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertContactMessage } from "@shared/routes";
import { Download, Send, Loader2, Code2, Cpu, Globe } from "lucide-react";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { useSkills, useProjects, useContact } from "@/hooks/use-portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const { data: skills = [] } = useSkills();
  const { data: projects = [] } = useProjects();
  const contactMutation = useContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(api.contact.submit.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  // Group skills by category
  const skillCategories = [
    "Programming Languages",
    "Frameworks & Libraries",
    "Databases",
    "Cloud Platforms",
    "Tools & Technologies",
    "AI/ML",
    "Design Tools"
  ];
  
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
      <Navigation />
      
      <main>
        <HeroSection />

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                About <span className="text-primary">Me</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    I am a passionate Software Developer with a specialized focus on integrating 
                    artificial intelligence and machine learning models into robust web applications.
                  </p>
                  <p>
                    My journey in tech is driven by curiosity and a desire to build intelligent solutions 
                    that solve real-world problems. With expertise in TensorFlow and cloud platforms like 
                    Google Cloud and Oracle, I bridge the gap between complex algorithms and user-friendly interfaces.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <Code2 className="text-primary w-5 h-5" />
                      <span className="text-sm font-medium text-white">Full Stack</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="text-primary w-5 h-5" />
                      <span className="text-sm font-medium text-white">AI/ML Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="text-primary w-5 h-5" />
                      <span className="text-sm font-medium text-white">Cloud Native</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-xl opacity-20" />
                  <div className="aspect-square rounded-xl overflow-hidden bg-card border border-white/10 relative z-10">
                    <img 
                      src="/attached_assets/Gemini_Generated_Image_rqirt9rqirt9rqir_1769018614182.png" 
                      alt="Himanshu Suthar"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technical <span className="text-primary">Proficiency</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit tailored for modern software development and AI integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(s => s.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white/80 border-b border-white/10 pb-2">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {categorySkills.map((skill, index) => (
                      <SkillCard key={skill.id} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Showcasing innovative applications leveraging modern web technologies and AI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
            
            {projects.length === 0 && (
              <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
                <p className="text-muted-foreground">Projects loading or coming soon...</p>
              </div>
            )}
          </div>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="py-24 container mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to work together?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Download my resume to learn more about my experience, certifications, and technical background.
            </p>
            
            <Button 
              size="lg" 
              className="bg-transparent hover:bg-white/5 text-white border border-white/10 font-semibold h-14 px-8 rounded-full transition-all"
            >
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Button>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-muted-foreground">
                  Have a question or want to discuss a project? Drop me a message below.
                </p>
              </motion.div>

              <div className="bg-card border border-white/5 rounded-2xl p-8 shadow-xl">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Name</label>
                      <Input 
                        {...form.register("name")}
                        placeholder="John Doe" 
                        className="bg-background/50 border-white/10 focus:border-primary/50 h-12"
                      />
                      {form.formState.errors.name && (
                        <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Email</label>
                      <Input 
                        {...form.register("email")}
                        placeholder="john@example.com" 
                        className="bg-background/50 border-white/10 focus:border-primary/50 h-12"
                      />
                       {form.formState.errors.email && (
                        <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Message</label>
                    <Textarea 
                      {...form.register("message")}
                      placeholder="Tell me about your project..." 
                      className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary/50 resize-none"
                    />
                     {form.formState.errors.message && (
                        <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
                      )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full h-14 bg-transparent hover:bg-white/5 text-white border border-white/10 font-semibold text-lg transition-all"
                  >
                    {contactMutation.isPending ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Message</>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
