import { motion } from "framer-motion";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

export const ExperienceCard = ({
  role,
  company,
  period,
  description,
  index,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l-2 border-muted hover:border-primary/50 transition-colors"
    >
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 ring-4 ring-background" />
      
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-foreground">{role}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
          <span className="text-primary font-semibold">{company}</span>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <span className="mono text-muted-foreground">{period}</span>
        </div>
        
        <ul className="space-y-2 mt-4">
          {description.map((item, idx) => (
            <li key={idx} className="text-muted-foreground flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
