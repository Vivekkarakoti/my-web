import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/Section';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-black pt-20">
      <Section className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "outBack" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-brand-purple/20 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <CheckCircle size={48} className="text-brand-purple" />
          </div>
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
          Thank You!
        </h1>
        
        <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
          Your request has been successfully submitted. <br/>
          Our team will review your details and get back to you shortly with a personalized estimate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" className="flex items-center gap-2">
              <Home size={18} /> Back to Home
            </Button>
          </Link>
          <Link to="/services">
             <Button variant="outline" className="flex items-center gap-2">
               Explore Services <ArrowRight size={18} />
             </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default ThankYou;