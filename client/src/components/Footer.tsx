import { Github, Linkedin, Mail, Cloud } from "lucide-react";
import logo from "@assets/Asset_3_1769014249866.png";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img src={logo} alt="Logo" className="h-12 w-auto mb-4 mx-auto md:mx-0 opacity-80" />
            <p className="text-muted-foreground max-w-xs">
              Building intelligent solutions with code and creativity.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com/HMO7" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sutharhimanshu/" },
              { icon: Cloud, href: "https://www.skills.google/public_profiles/ce432748-501d-4b9a-a23c-1e83ee9ccd8e" },
              { icon: Mail, href: "mailto:himanshumwd7@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary text-white transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Himanshu Suthar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
