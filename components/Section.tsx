import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgImage?: string;
  darkOverlay?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, bgImage, darkOverlay = false }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
        id={id}
        className={`relative py-20 px-6 md:px-12 ${className} ${bgImage ? 'bg-cover bg-center bg-no-repeat bg-fixed' : ''}`}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
        {bgImage && darkOverlay && (
            <div className="absolute inset-0 bg-black/60 z-0"></div>
        )}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative z-10 container mx-auto"
        >
            {children}
        </motion.div>
    </section>
  );
};

export default Section;