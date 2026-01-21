import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

/**
 * Resume section with experience timeline
 */

const resumeData = {
  experience: [
    {
      title: "Internship: Software Engineer",
      company: "Technomine Pvt. Ltd., Ahmedabad, Gujarat",
      period: "Jan 2024 – May 2024",
      description:
        "Implemented complete UI/UX interface for Safehaven Guarding platform, achieving 10% reduction in page load latency. Spearheaded end-to-end design lifecycle from research to deployment, creating high-fidelity wireframes and interactive prototypes in Figma.",
    },
    {
      title: "Software Development Intern",
      company: "BrainyBeam Technologies Pvt. Ltd., Ahmedabad, Gujarat",
      period: "Jul 2023 – Aug 2023",
      description:
        "Engineered scalable e-commerce platform leveraging Python and Django framework. Integrated advanced data analysis capabilities using Pandas and NumPy. Built RESTful APIs and optimized database schemas using SQL.",
    },
  ],
  education: [
    {
      title: "Bachelor of Engineering in Computer Engineering",
      company: "Gujarat Technological University (GTU)",
      period: "Oct 2021 - Jan 2025",
      description: "7.94 CGPA",
    },
    {
      title: "Diploma in Computer Engineering",
      company: "Gujarat Technological University (GTU)",
      period: "Apr 2018 – May 2021",
      description: "7.82 CGPA",
    },
  ],
  certifications: [
    {
      title: "JPMorgan Chase & Co. – Software Engineering Job Simulation",
      company: "Forage",
      period: "2024",
      description: "Built and tested a Spring Boot microservice integrating Kafka, REST APIs, JPA, and Maven-based validation.",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      company: "Oracle",
      period: "2025",
      description: "Certified in Oracle Cloud AI foundations and infrastructure.",
    },
    {
      title: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
      company: "Oracle",
      period: "2025",
      description: "Certified in Oracle Fusion AI Agent Studio.",
    },
    {
      title: "Google Cloud Skills",
      company: "Google Cloud",
      period: "2024",
      description: "Completed specialized courses in AI/ML and cloud technologies.",
    },
  ],
};

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    { title: "Experience", icon: Briefcase, items: resumeData.experience },
    { title: "Education", icon: GraduationCap, items: resumeData.education },
    { title: "Certifications", icon: Award, items: resumeData.certifications },
  ];

  return (
    <section
      id="resume"
      className="py-24 md:py-32 bg-card/50 relative"
      aria-label="Resume"
      ref={ref}
    >
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
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
                Background
              </span>
              <div className="section-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Resume &{" "}
              <span className="relative inline-block">
                Experience
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-primary" />
              </span>
            </h2>
          </motion.div>

          {/* Resume Sections */}
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <section.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>

                <div className="space-y-6 border-l-2 border-border pl-6 ml-2">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + 0.1 * itemIndex,
                      }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1 w-4 h-4 bg-background border-2 border-primary rounded-full" />

                      <div className="bg-card border border-border rounded-sm p-5 card-lift">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className="font-semibold">{item.title}</h4>
                          <span className="text-sm text-primary font-medium">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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

export default ResumeSection;