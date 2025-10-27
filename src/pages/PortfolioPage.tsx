import React from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import Navigation from "@/components/Navigation";
import SideEmail from "@/components/SideEmail";
import SideSocial from "@/components/SideSocial";

const PortfolioPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "AI-Powered Recipe Generator",
      description: "A smart recipe generator that uses Computer Vision to generate personalized recipes based on available ingredients in the refrigerator by analyzing images taken with a smartphone camera.",
      techStack: ["HTML", "FastAPI", "YOLO", "Javascript"],
      githubUrl: "https://github.com/rabbikazmi/snapncook",
      caseStudy: {
        problem: "Traditional recipe apps lack personalization, often suggesting recipes that don't match users' dietary preferences or available ingredients.",
        approach: "Developed a computer vision model to analyze images of ingredients and suggest recipes based on what's available. Integrated a user-friendly web interface for seamless interaction.",
        outcome: "Achieved a 96.1% mAP@0.5, 93.7% Recall and 98% Precision. Users reported higher satisfaction with recipe suggestions."
      }
    },
    {
      title: "AI-Powered Safety Gear Detection System",
      description: "A safety gear detection platform that uses computer vision to identify O₂ cylinders, toolkits, and fire extinguishers from uploaded images or live video feeds in high-stakes environments like space stations.",
      techStack: ["Python", "OpenCV", "React.js","Tailwind CSS", "Flask"],
      githubUrl: "https://github.com/rabbikazmi/eleven11",
      caseStudy: {
        problem: "Traditional safety protocols rely on manual checks, which are prone to human error and can be time-consuming.",
        approach: "Developed a computer vision system to automatically detect and classify safety gear in real-time. Integrated a multilingual user interface, text-to-speech alerts, and existing surveillance systems for live monitoring.",
        outcome: "Achieved a 97.66% detection accuracy in controlled environments. Reduced inspection times by 50% and improved compliance with safety regulations."
      }
    },
    {
      title: "Crafting & Inventory System",
      description: "A web-based crafting inventory system inspired by the Minecraft interface. Replicates a crafting experience where users manage an inventory, discover recipes, and combine items to craft new tools - all in a pixelated, responsive UI.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/rabbikazmi/minecraft-gui",
      caseStudy: {
        problem: "Traditional crafting systems are often rigid and lack the flexibility to accommodate user-generated content.",
        approach: "Developed a modular crafting system that allows users to define their own recipes and materials. Integrated a user-friendly interface for easy management.",
        outcome: "Increased user engagement and satisfaction by allowing for personalized crafting experiences."
      }
    },
    {
      title: "WebOS Inspired Portfolio",
      description: "A dynamic portfolio showcasing projects, skills, and moments in a webOS-like interface with draggable windows and interactive elements.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/rabbikazmi/floatfolio",
      caseStudy: {
        problem: "Many portfolios lack interactivity and fail to engage visitors effectively.",
        approach: "Created an all-in-one platform using HTML, CSS, and JavaScript to build a webOS-like interface with draggable windows and interactive elements.",
        outcome: "Increased user engagement and time spent on portfolio by 50%. Received positive feedback for innovative design and usability."
      }
    },
  ];

  const experiences = [
    {
      role: "Generative AI & Computer Vision Intern",
      company: "IT Department, IGDTUW",
      period: "June 2024 - July 2024",
      description: [
        "Built a generative AI app with Google Gemini API for real-time recipe generation from images",
        "Implemented LangChain & RAG workflows to explore modern AI architectures for intelligent systems.",
        "Optimized a computer vision model to 96.1% mAP and 93.7% Recall via augmentation and hyperparameter tuning."
      ]
    },
    {
      role: "Research Intern",
      company: "ACM Student Chapter, IGDTUW",
      period: "Sept 2024 - April 2025",
      description: [
        "Co-authored and presented “Adversarial Attacks on Autonomous Vehicles: A Comprehensive Review”, synthesizing 23+ studies at an International Conference.",
        "Analyzed attack techniques, highlighting vulnerabilities in Autonomous Vehicles AI perception and control pipelines.",
        "Reviewed defense mechanisms, providing insights for robust and secure autonomous systems."
      ]
    }, 
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Side Components */}
      <SideSocial />
      <SideEmail />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mono text-primary text-sm md:text-base mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Rabbika Azmi.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
              AI & Autonomous Systems Enthusiast.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              I’m an enthusiastic developer specializing in intelligent and autonomous systems,
              focused on building impactful, human-centered AI-driven solutions through modern technologies.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-center text-3xl md:text-4xl font-bold mb-12">
              <span className="mono text-primary text-xl mr-2">01.</span>
              <span className="text-foreground">About Me</span>
              <span className="ml-4 h-[1px] bg-muted flex-grow max-w-xs"></span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Text Content */}
              <div className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Rabbika Azmi, a Computer Science student with a passion for building things that live on the internet. 
                  I'm driven by a fascination with intelligent systems and how machines can see, think, and act autonomously.
                </p>
                <p>
                  I’ve had the opportunity to work on a range of projects involving machine learning models, computer vision systems, and intelligent automation.
My current focus is on building AI-driven solutions and autonomous systems that are reliable, human-centered, and impactful.
                </p>
                <p>
                  Beyond coding, I spend my time studying research papers, experimenting with AI models, and contributing to projects that advance autonomous technology.
                </p>

                <div className="pt-6">
                  <p className="text-foreground font-semibold mb-4">Here are a few technologies I've been working with recently:</p>
                  <div className="grid grid-cols-2 gap-2 mono text-sm">
                    {["JavaScript (ES6+)", "React.js & Typescript", "Python", "OpenCV", "SUMO", "Agentic & Generative AI"].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <span className="text-primary mr-2">▹</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Picture Space */}
              <div className="lg:col-span-1 flex justify-center lg:justify-end">
                <div className="w-64 h-64 lg:w-72 lg:h-72 bg-card border-2 border-primary/20 rounded-lg overflow-hidden group hover:border-primary/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <img 
                    src="/mee.jpg" 
                    alt="Rabbika Azmi" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-center text-3xl md:text-4xl font-bold mb-12">
              <span className="mono text-primary text-xl mr-2">02.</span>
              <span className="text-foreground">Featured Projects</span>
              <span className="ml-4 h-[1px] bg-muted flex-grow max-w-xs"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {projects.map((project, index) => (
                <div key={project.title}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    githubUrl={project.githubUrl}
                    caseStudy={project.caseStudy}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-center text-3xl md:text-4xl font-bold mb-12">
              <span className="mono text-primary text-xl mr-2">03.</span>
              <span className="text-foreground">Experience</span>
              <span className="ml-4 h-[1px] bg-muted flex-grow max-w-xs"></span>
            </h2>

            <div className="space-y-0">
              {experiences.map((experience, index) => (
                <div key={experience.role}>
                  <ExperienceCard
                    role={experience.role}
                    company={experience.company}
                    period={experience.period}
                    description={experience.description}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="mono text-primary text-sm">04. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I'm open for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <Button variant="outline" size="icon" asChild className="w-12 h-12">
                <a href="https://github.com/rabbikazmi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="w-12 h-12">
                <a href="https://linkedin.com/in/rabbika-azmi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="w-12 h-12">
                <a href="mailto:azmirabbika@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <Button size="lg" asChild>
              <a href="mailto:azmirabbika@gmail.com">
                Say Hello
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center">
        <p className="mono text-sm text-muted-foreground">
          Built with luv by Rabbika
        </p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
