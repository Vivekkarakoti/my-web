import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Full Interior Design",
      tagline: "End-to-end transformation from flooring to ceiling.",
      description: "We manage everything — layout, materials, lighting, and furniture — while you relax and watch your vision come alive. We handle the stress; you enjoy the results.",
      features: [
        "Complete spatial planning and layout design",
        "Material selection and procurement",
        "Lighting design and installation",
        "Furniture and décor curation",
        "Project management and execution"
      ],
      img: "https://picsum.photos/seed/fullinterior/800/600",
      linkText: "Get Estimate"
    },
    {
      title: "Modular Kitchen Design",
      tagline: "Smart, ergonomic, and stylish kitchens for modern Indian homes.",
      description: "Crafted for efficiency and durability using high-moisture-resistant materials and premium hardware. Beautifully organized, perfectly functional.",
      features: [
        "Smart storage solutions and organization",
        "Premium hardware (Hettich, Hafele)",
        "High-moisture resistant materials",
        "Modern appliance integration",
        "Customized layouts for your space"
      ],
      img: "https://picsum.photos/seed/modularkitchen/800/600",
      linkText: "Request Kitchen Estimate"
    },
    {
      title: "Living Spaces Design",
      tagline: "Creating the heart of your home.",
      description: "We design inviting living rooms where aesthetics meet comfort — blending textures, tones, and light to match your lifestyle.",
      features: [
        "Custom sofa and furniture design",
        "TV unit and entertainment solutions",
        "Ambient lighting and accent design",
        "Color scheme and texture coordination",
        "Space optimization and flow"
      ],
      img: "https://picsum.photos/seed/livingroom/800/600",
      linkText: "Get Estimate"
    },
    {
      title: "Renovation & Remodeling",
      tagline: "Giving old spaces a new soul.",
      description: "We rejuvenate aging homes with modern finishes, updated plumbing, and refined design — all while preserving their original charm.",
      features: [
        "Structural assessment and planning",
        "Plumbing and electrical upgrades",
        "Modern finishes and contemporary design",
        "Heritage preservation where needed",
        "Complete project documentation"
      ],
      img: "https://picsum.photos/seed/renovation/800/600",
      linkText: "Start Your Renovation"
    },
    {
      title: "Estimation & Budget Planning",
      tagline: "Precise, itemized budgeting for total clarity.",
      description: "Using The Viraj Estimator, we provide transparent, itemized cost breakdowns so your project stays on budget and on schedule.",
      features: [
        "Detailed cost breakdown by category",
        "Material and labor estimates",
        "Timeline projections",
        "Budget optimization suggestions",
        "Transparent pricing — no hidden costs"
      ],
      img: "https://picsum.photos/seed/estimation/800/600",
      linkText: "Get Your Estimate Now"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/serviceshero/1920/1080')" }}
        >
           <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center container px-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Services</h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
                From concept to completion, we create interiors that inspire and endure.
            </p>
            <Link to="/contact"><Button>Get Estimate</Button></Link>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-brand-black">
        {services.map((service, index) => (
            <Section key={index} className={index % 2 === 0 ? 'bg-brand-black' : 'bg-brand-dark'}>
                <div className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2">
                        <div className="relative group overflow-hidden rounded-xl border border-neutral-800 shadow-2xl">
                             <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                             <img 
                                src={service.img} 
                                alt={service.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                             />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-serif font-bold mb-3">{service.title}</h2>
                        <p className="text-brand-purple font-medium mb-6">{service.tagline}</p>
                        <p className="text-neutral-400 mb-8 leading-relaxed">{service.description}</p>
                        
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Key Features</h4>
                        <ul className="space-y-3 mb-8">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                                    <Check size={16} className="text-brand-purple flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact">
                            <Button variant="outline" className="text-sm">{service.linkText} →</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        ))}
      </div>

      {/* Why Choose Section */}
      <Section className="bg-brand-black pb-24">
        <div className="bg-brand-panel border border-neutral-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                     <h2 className="text-3xl font-serif font-bold mb-8">Why Choose The Viraj</h2>
                     <ul className="space-y-6">
                        {[
                            { t: "Certified Designers & Experienced Project Managers", d: "Our team brings expertise, creativity, and precision to every project." },
                            { t: "Transparent Pricing and Timelines", d: "No surprises. We communicate clearly from concept to completion." },
                            { t: "High-Quality Materials & Eco-Friendly Practices", d: "Premium materials that last, combined with sustainable design choices." },
                            { t: "100% Customized Design Approach", d: "Your home, your style. We never compromise on personalization." },
                            { t: "End-to-End Execution & After-Service Support", d: "From planning to handover and beyond — we're with you every step." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">{item.t}</h4>
                                    <p className="text-neutral-400 text-sm">{item.d}</p>
                                </div>
                            </li>
                        ))}
                     </ul>
                </div>
                <div className="h-full min-h-[400px]">
                    <img src="https://picsum.photos/seed/whychoose/600/800" alt="Team at Work" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
      </Section>

      <Section className="bg-brand-darker text-center py-20">
            <h2 className="text-3xl font-serif font-bold mb-4">Let's Bring Your Vision to Life</h2>
            <p className="text-neutral-400 mb-8">Schedule your free consultation and get a detailed estimate today.</p>
            <div className="flex justify-center gap-4">
                <Link to="/contact"><Button>Get Estimate</Button></Link>
                <Link to="/contact"><Button variant="secondary">Contact Us</Button></Link>
            </div>
      </Section>
    </>
  );
};

export default Services;