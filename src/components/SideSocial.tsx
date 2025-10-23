import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SideSocial = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/rabbikazmi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rabbika-azmi", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/rabbikazmi", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/luvscroissant/?hl=en", label: "Instagram" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-10 bottom-0 z-40 hidden lg:flex flex-col items-center"
    >
      <div className="flex flex-col space-y-6 mb-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ animationDelay: `${1.2 + index * 0.1}s` }}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
      <div className="w-px h-24 bg-muted-foreground"></div>
    </motion.div>
  );
};

export default SideSocial;