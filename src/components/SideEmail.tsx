import React from 'react';
import { motion } from 'framer-motion';

const SideEmail = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-10 bottom-0 z-40 hidden lg:flex flex-col items-center"
    >
      <motion.a
        href="mailto:azmirabbika@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors duration-300 mono text-sm tracking-widest"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
        }}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        azmirabbika@gmail.com
      </motion.a>
      <div className="w-px h-24 bg-muted-foreground mt-6"></div>
    </motion.div>
  );
};

export default SideEmail;