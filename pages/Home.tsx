import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Layout, PenTool, Home as HomeIcon, Hammer, FileText } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/ui/Button';

// Local images from assets folder
const localImages = [
  { src: './interiors.jpg', alt: 'Interior Design', title: 'Interior Design' },
  { src: './living-room.jpg', alt: 'Living Room', title: 'Living Room' },
  { src: './kitchen.jpg', alt: 'Kitchen', title: 'Kitchen' },
  { src: './master-bedroom.jpg', alt: 'Master Bedroom', title: 'Master Bedroom' },
  { src: './bathroom.jpg', alt: 'Bathroom', title: 'Bathroom' },
  { src: './kids-room.jpg', alt: 'Kids Room', title: 'Kids Room' },
  { src: './wardrobe.jpg', alt: 'Wardrobe', title: 'Wardrobe' },
  { src: './renovation.jpg', alt: 'Renovation', title: 'Renovation' },
  { src: './home.jpg', alt: 'Home', title: 'Home' },
  { src: './interiors-1.jpg', alt: 'Interior 1', title: 'Modern Interior' },
  { src: './interiors-2.jpg', alt: 'Interior 2', title: 'Elegant Interior' },
  { src: './interiors-3.jpg', alt: 'Interior 3', title: 'Contemporary Design' },
  { src: './interiors-4.jpg', alt: 'Interior 4', title: 'Luxury Interior' },
  { src: './interiors-5.jpg', alt: 'Interior 5', title: 'Premium Interior' },
  { src: './interiors-6.jpg', alt: 'Interior 6', title: 'Stylish Interior' },
  { src: './interiors-7.jpg', alt: 'Interior 7', title: 'Modern Living' },
  { src: './interiors-9.jpg', alt: 'Interior 9', title: 'Elegant Living' },
  { src: './interiors-10.jpg', alt: 'Interior 10', title: 'Contemporary Living' },
  { src: './interiors-12.jpg', alt: 'Interior 12', title: 'Designer Space' },
  { src: './interiors-13.jpg', alt: 'Interior 13', title: 'Modern Space' },
  { src: './interiors-14.jpg', alt: 'Interior 14', title: 'Luxury Space' },
  { src: './interiors-15.jpg', alt: 'Interior 15', title: 'Premium Space' },
  { src: './interiors-17.jpg', alt: 'Interior 17', title: 'Classic Interior' },
  { src: './interiors-18.jpg', alt: 'Interior 18', title: 'Modern Design' },
  { src: './kitchen-modern.jpg', alt: 'Modern Kitchen', title: 'Modern Kitchen' },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./home.jpg')" }}
        >
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
           <div className="absolute inset-0 bg-brand-purple/10 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Because Every Home <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-purple-light text-glow">Deserves a Soul.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              End-to-end interior design and renovation solutions — crafted with emotion, elegance, and precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button>Get Estimate</Button>
              </Link>
              <Link to="/services">
                 <Button variant="outline">View Services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-white/70 rounded-full"></div>
            </div>
        </motion.div>
      </section>

      {/* About Intro */}
      <Section className="bg-brand-black">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Designing Dreams, <br/><span className="text-brand-purple">Building Comfort.</span></h2>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              At The Viraj, we believe great interiors are born from a deep understanding of your lifestyle. Our team of experts crafts beautiful, functional, and timeless spaces — whether you're building new, renovating, or simply refreshing your home.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              From planning to execution, we handle every detail so you can enjoy your dream space stress-free.
            </p>
            <Link to="/about" className="inline-flex items-center text-brand-purple hover:text-brand-purple-light font-semibold transition-colors group">
              Learn More About Us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-purple/20 blur-2xl rounded-xl"></div>
             <img 
                src="./living-room.jpg" 
                alt="Modern Living Room" 
                className="relative rounded-lg shadow-2xl border border-neutral-800 w-full object-cover aspect-square"
             />
          </div>
        </div>
      </Section>

      {/* Expertise Section */}
      <Section className="bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-purple/5 blur-[100px] rounded-full"></div>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Expertise — Crafted for You</h2>
          <p className="text-neutral-400">We bring design, functionality, and craftsmanship together to transform every corner of your home.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { icon: Layout, title: "Full Interior Design", desc: "End-to-end transformation from flooring to ceiling. We handle the stress; you enjoy the results.", img: localImages[0].src },
                { icon: HomeIcon, title: "Modular Kitchen", desc: "Smart, ergonomic, and stylish kitchens designed for the modern Indian home.", img: localImages[2].src },
                { icon: Star, title: "Living Spaces", desc: "Creating the heart of your home with customized furniture and lighting.", img: localImages[1].src },
                { icon: Hammer, title: "Renovation", desc: "Giving old spaces a new soul through expert upgrades.", img: localImages[7].src },
                { icon: FileText, title: "Estimation", desc: "Precise, itemized budgeting with The Viraj Estimator.", img: localImages[24].src }
            ].map((service, index) => (
                <div key={index} className="group bg-brand-panel border border-neutral-800 rounded-xl overflow-hidden hover:border-brand-purple/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute bottom-4 left-4 z-20 bg-brand-purple/90 p-2 rounded-lg text-white">
                            <service.icon size={20} />
                        </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-brand-purple transition-colors">{service.title}</h3>
                        <p className="text-neutral-400 text-sm mb-6 flex-grow">{service.desc}</p>
                        <Link to="/contact" className="text-sm font-semibold text-white flex items-center gap-2 hover:text-brand-purple transition-colors mt-auto">
                            Get Estimate <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            ))}
            
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-brand-purple-dark to-brand-purple rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                <h3 className="text-2xl font-serif font-bold mb-4">View All Services</h3>
                <p className="text-white/80 mb-6 text-sm">Discover how we can transform your space completely.</p>
                <Link to="/services">
                    <button className="px-6 py-2 bg-white text-brand-purple font-bold rounded-full hover:bg-neutral-100 transition-colors">
                        Explore Now
                    </button>
                </Link>
            </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-brand-black">
         <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                 <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-purple to-blue-600 rounded-2xl blur opacity-30"></div>
                    <img src="./interiors.jpg" alt="Design Expert" className="relative rounded-xl border border-neutral-800 shadow-2xl" />
                 </div>
             </div>
             <div className="order-1 md:order-2">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Your Vision, Our Expertise</h2>
                 <p className="text-neutral-400 mb-8">We don't just design spaces — we design experiences.</p>
                 <ul className="space-y-6">
                     {[
                         "Certified Designers & Experienced Project Managers",
                         "Transparent Pricing & Detailed Cost Estimation",
                         "Premium Materials (Hettich, Hafele, Greenply)",
                         "100% Personalized Design — No Templates",
                         "End-to-End Execution & On-Time Delivery"
                     ].map((item, idx) => (
                         <li key={idx} className="flex items-start gap-4">
                             <div className="mt-1 w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 text-brand-purple">
                                 <Check size={14} strokeWidth={3} />
                             </div>
                             <div>
                                 <p className="font-medium text-neutral-200">{item}</p>
                             </div>
                         </li>
                     ))}
                 </ul>
             </div>
         </div>
      </Section>

      {/* Portfolio Grid */}
      <Section className="bg-brand-dark" id="portfolio">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Our Work Speaks for Itself</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localImages.slice(0, 6).map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <h3 className="text-xl font-bold font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-brand-black">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { name: "Priya Sharma", loc: "Bangalore", text: "The Viraj transformed our flat into a luxury retreat — beyond expectations! Every detail was perfect." },
                { name: "Raj Patel", loc: "Mumbai", text: "Professional, punctual, and passionate about their work. They understood our vision and delivered exactly what we wanted." },
                { name: "Sarah Khan", loc: "Delhi", text: "Transparent pricing, amazing design, and incredible execution. We couldn't ask for better!" }
            ].map((t, i) => (
                <div key={i} className="bg-brand-panel p-8 rounded-xl border border-neutral-800 relative">
                    <div className="text-brand-purple text-4xl font-serif absolute top-4 right-6 opacity-20">"</div>
                    <p className="text-neutral-300 mb-6 italic relative z-10 leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-xs">📷</div>
                        <div>
                            <h4 className="font-bold text-white">{t.name}</h4>
                            <span className="text-xs text-brand-purple">{t.loc}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-24">
          <div className="absolute inset-0 bg-brand-purple-dark/20 z-0"></div>
          <div className="bg-gradient-to-r from-brand-purple-dark to-brand-purple rounded-3xl p-1 md:p-12 relative z-10 text-center max-w-4xl mx-auto shadow-[0_0_50px_rgba(124,58,237,0.3)]">
             <div className="bg-brand-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Design Your Dream Space?</h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Let's create something extraordinary — with beauty, comfort, and purpose in every detail.</p>
                
                <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" />
                        <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" />
                    </div>
                    <button type="submit" className="w-full bg-white text-brand-purple font-bold py-3 rounded-lg hover:bg-neutral-100 transition-colors">
                        Get Estimate
                    </button>
                </form>
             </div>
          </div>
      </Section>
    </>
  );
};

export default Home;
