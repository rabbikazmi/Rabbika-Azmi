import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";

const PortfolioPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management app that uses machine learning to prioritize tasks and predict completion times.",
      techStack: ["React", "TypeScript", "Python", "TensorFlow", "Tailwind CSS"],
      githubUrl: "https://github.com",
      caseStudy: {
        problem: "Traditional task managers lack intelligent prioritization, forcing users to manually organize their workload without insights into realistic completion timelines.",
        approach: "Developed a machine learning model trained on historical task data to predict task duration and automatically prioritize based on deadlines, dependencies, and user patterns. Integrated a React frontend with a Python Flask backend for real-time ML predictions.",
        outcome: "Users reported a 40% increase in productivity and 60% reduction in missed deadlines. The prediction model achieved 85% accuracy after the first week of usage."
      }
    },
    {
      title: "Blockchain Voting System",
      description: "A secure, transparent voting platform built on Ethereum blockchain ensuring tamper-proof elections.",
      techStack: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      githubUrl: "https://github.com",
      caseStudy: {
        problem: "Traditional voting systems face security vulnerabilities, lack transparency, and are susceptible to tampering or manipulation.",
        approach: "Built a decentralized voting application using Ethereum smart contracts for immutable vote recording. Implemented IPFS for distributed storage of voter data and used cryptographic techniques to ensure anonymity while maintaining verifiability.",
        outcome: "Successfully conducted a pilot election with 500+ participants. Zero security incidents reported, and all votes were verifiable on-chain while maintaining voter privacy."
      }
    },
    {
      title: "Real-Time Collaboration Tool",
      description: "A collaborative workspace with live editing, video calls, and integrated project management features.",
      techStack: ["Next.js", "WebRTC", "Socket.io", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com",
      caseStudy: {
        problem: "Remote teams struggle with fragmented tools for communication, document collaboration, and project tracking, leading to reduced productivity and context switching.",
        approach: "Created an all-in-one platform using WebRTC for peer-to-peer video calls, Socket.io for real-time document editing with operational transformation, and integrated Kanban boards for project management. Optimized performance with Redis caching.",
        outcome: "Reduced tool switching by 70% for beta users. Achieved sub-100ms latency for real-time editing and supported up to 50 concurrent users per workspace."
      }
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform fitness app with workout tracking, nutrition logging, and AI-powered recommendations.",
      techStack: ["React Native", "Express", "MongoDB", "TensorFlow.js"],
      githubUrl: "https://github.com",
      caseStudy: {
        problem: "Most fitness apps focus solely on tracking without providing personalized guidance, making it difficult for users to optimize their fitness journey.",
        approach: "Developed a cross-platform mobile app using React Native with ML-powered workout recommendations based on user progress, body metrics, and goals. Integrated nutrition API for meal tracking and built a recommendation engine using TensorFlow.js.",
        outcome: "Gained 1,000+ active users in beta phase. Users achieved their fitness goals 45% faster with personalized recommendations compared to generic workout plans."
      }
    }
  ];

  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Tech Innovations Inc",
      period: "June 2024 - Aug 2024",
      description: [
        "Developed and deployed 3 full-stack features using React, Node.js, and PostgreSQL, improving user engagement by 25%",
        "Optimized database queries reducing API response time by 40%",
        "Collaborated with cross-functional teams using Agile methodologies"
      ]
    },
    {
      role: "Lead Developer",
      company: "University Tech Club",
      period: "Sept 2023 - Present",
      description: [
        "Led a team of 8 developers building web applications for campus organizations",
        "Organized weekly workshops on modern web technologies and best practices",
        "Mentored junior developers through code reviews and pair programming sessions"
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "Jan 2023 - Present",
      description: [
        "Built responsive websites and web applications for 10+ clients",
        "Specialized in React, Next.js, and modern CSS frameworks",
        "Maintained 100% client satisfaction with timely delivery and ongoing support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mono text-primary text-sm md:text-base mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Alex Johnson
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
              Aspiring Software Developer | AI & Web Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              I'm a passionate developer specializing in building exceptional digital experiences. 
              Currently focused on creating accessible, human-centered products with modern web technologies.
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

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Alex, a computer science student with a passion for building things that live on the internet. 
                My interest in web development started back in 2020 when I decided to build my first website — turns out 
                hacking together HTML & CSS taught me a lot about software engineering!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working on various projects ranging from AI-powered 
                applications to blockchain solutions. My main focus these days is building accessible, inclusive products 
                and digital experiences that make a difference.
              </p>
              <p>
                I'm particularly interested in the intersection of artificial intelligence and web development, constantly 
                exploring how ML can enhance user experiences. When I'm not coding, you'll find me contributing to open-source 
                projects or learning the latest in tech.
              </p>

              <div className="pt-6">
                <p className="text-foreground font-semibold mb-4">Here are a few technologies I've been working with recently:</p>
                <div className="grid grid-cols-2 gap-2 mono text-sm">
                  {["JavaScript (ES6+)", "React & Next.js", "Python", "Node.js", "TypeScript", "TensorFlow"].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <span className="text-primary mr-2">▹</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
        <div className="max-w-6xl mx-auto">
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

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
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
                <ExperienceCard key={experience.role} {...experience} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
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
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <Button variant="outline" size="icon" asChild className="w-12 h-12">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="w-12 h-12">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="w-12 h-12">
                <a href="mailto:hello@example.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <Button size="lg" asChild>
              <a href="mailto:hello@example.com">
                Say Hello
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center">
        <p className="mono text-sm text-muted-foreground">
          Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
