import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-neutral-800 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-purple transition-colors group"
            >
                <span className="text-lg font-medium pr-8 group-hover:pl-2 transition-all duration-300">{question}</span>
                <span className={`text-brand-purple transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-neutral-400 pb-6 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  const faqs = [
    { q: "What services does The Viraj offer?", a: "We provide complete interior design solutions including Full Interiors, Modular Kitchens, Living Spaces, Renovation, and Estimation services — all tailored to your vision and budget." },
    { q: "Do you handle both residential and commercial projects?", a: "Yes. We specialize in both residential homes and commercial spaces such as offices, studios, and retail interiors." },
    { q: "What is included in your \"Full Interior\" service?", a: "Our Full Interior service covers end-to-end design — from conceptual planning and 3D visualization to execution, furniture, lighting, and décor installation." },
    { q: "Do you offer customized designs?", a: "Absolutely. Every project at The Viraj is customized to reflect your taste, space, and lifestyle. We never use one-size-fits-all designs." },
    { q: "How long does a typical interior project take?", a: "The duration depends on project size and scope. A full home interior usually takes 8–12 weeks from design approval to completion." },
    { q: "What is the process for starting a project with The Viraj?", a: "It begins with a free consultation and estimation. Once we understand your requirements, we provide design concepts, a detailed quotation, and then move to execution upon approval." },
    { q: "Can I get an estimate before finalizing the design?", a: "Yes, our Estimation Service provides accurate cost projections before you commit to a full design plan — ensuring complete transparency." },
    { q: "What materials and brands do you use?", a: "We use only trusted brands and premium materials for long-lasting quality — including hardware from Hettich, Hafele, and Greenply, among others." },
    { q: "Do you provide 3D design or visualization?", a: "Yes, every client receives 3D renderings to visualize their space before work begins — helping you make confident design decisions." },
    { q: "What makes The Viraj different from other interior firms?", a: "We blend creativity, technical precision, and emotional design. Our approach ensures each home we design feels personal, functional, and timeless." },
    { q: "Can you work with my existing furniture or layout?", a: "Yes. We can redesign around your existing furniture or layout to optimize space and refresh the overall look." },
    { q: "How do you manage budgets and cost overruns?", a: "We plan every detail upfront through our Estimation Service, maintain transparent pricing, and provide regular updates throughout execution." },
    { q: "What is a Modular Kitchen, and why choose one?", a: "A Modular Kitchen is a system of pre-designed units and components that create a smart, space-efficient, and stylish cooking area. It offers easy maintenance and flexible design." },
    { q: "Can I visit ongoing or completed projects?", a: "Yes, you can visit select ongoing or completed sites (with client consent) to understand our workmanship and design quality." },
    { q: "Do you handle renovation projects for old homes or apartments?", a: "Yes, we specialize in modern renovations — transforming older homes into beautiful, functional spaces without losing their charm." },
    { q: "Is there a warranty on your work?", a: "Yes, we offer warranties on fittings, materials, and craftsmanship, depending on the project type and vendor agreements." },
    { q: "Do you provide design-only services without execution?", a: "Yes, if you prefer to manage execution independently, we can provide detailed design plans and guidance." },
    { q: "What payment structure do you follow?", a: "Our standard payment schedule is milestone-based — starting with a booking amount, followed by stage-wise payments through design and execution." },
    { q: "Can you work within my existing budget?", a: "Of course. We adapt designs and materials to align with your budget while maintaining aesthetics and quality." },
    { q: "How can I get started?", a: "Simply click the Get Estimate button or contact us directly via phone or email. Our team will schedule a consultation and guide you through the next steps toward your dream home." }
  ];

  return (
    <>
      <div className="pt-24 pb-12 text-center container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-neutral-400">Find answers to common questions about our services and process</p>
      </div>

      <Section className="bg-brand-black min-h-screen">
        <div className="max-w-3xl mx-auto bg-brand-panel border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
        </div>
      </Section>

      <Section className="bg-brand-dark py-20">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Still Have Questions?</h2>
              <p className="text-neutral-400 mb-8">Reach out for a personalized consultation and free estimation.</p>
              
              <div className="bg-brand-black p-8 rounded-xl border border-neutral-800 max-w-xl mx-auto">
                 <form className="space-y-4" onSubmit={handleFormSubmit}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded bg-brand-panel border border-neutral-700 text-white focus:border-brand-purple focus:outline-none" required />
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded bg-brand-panel border border-neutral-700 text-white focus:border-brand-purple focus:outline-none" required />
                     </div>
                     <input type="text" placeholder="Your Phone" className="w-full px-4 py-3 rounded bg-brand-panel border border-neutral-700 text-white focus:border-brand-purple focus:outline-none" required />
                     <textarea placeholder="Tell us about your project..." rows={3} className="w-full px-4 py-3 rounded bg-brand-panel border border-neutral-700 text-white focus:border-brand-purple focus:outline-none"></textarea>
                     <Button fullWidth type="submit">Get Estimate</Button>
                 </form>
                 <div className="flex justify-around mt-8 pt-8 border-t border-neutral-800">
                    <div className="text-center">
                        <h4 className="text-sm text-neutral-500 mb-1">Call Us</h4>
                        <a href="tel:+91" className="text-white hover:text-brand-purple font-medium">+91 [Your Number]</a>
                    </div>
                    <div className="text-center">
                        <h4 className="text-sm text-neutral-500 mb-1">Email Us</h4>
                        <a href="mailto:hello@theviraj.com" className="text-white hover:text-brand-purple font-medium">hello@theviraj.com</a>
                    </div>
                 </div>
              </div>
          </div>
      </Section>
    </>
  );
};

export default FAQ;