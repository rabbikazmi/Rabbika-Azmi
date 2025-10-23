import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  caseStudy: {
    problem: string;
    approach: string;
    outcome: string;
  };
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  caseStudy,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-[300px] max-w-[550px] w-full"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 flex-grow line-clamp-4 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 min-h-[50px]">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs mono h-5 px-2">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1 text-xs">
                <ExternalLink className="w-3 h-3 mr-1" />
                Case Study
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{title}</DialogTitle>
                <DialogDescription className="text-base">
                  Detailed case study and technical breakdown
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Problem</h4>
                  <p className="text-muted-foreground">{caseStudy.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Approach</h4>
                  <p className="text-muted-foreground">{caseStudy.approach}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Outcome</h4>
                  <p className="text-muted-foreground">{caseStudy.outcome}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="ghost" size="sm" asChild className="px-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-3 h-3" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
