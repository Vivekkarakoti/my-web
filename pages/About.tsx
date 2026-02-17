import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('./home.jpg')" }}
        >
           <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Designing Spaces. Building Souls.</h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
                At The Viraj, we believe great design isn't just about how a space looks — it's about how it feels.
            </p>
            <Link to="/contact">
                <Button>Get Estimate</Button>
            </Link>
        </div>
      </div>

      {/* Our Story */}
      <Section className="bg-brand-black">
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-purple font-semibold tracking-wider text-sm uppercase mb-2 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Where Passion Meets Precision.</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                Founded with a vision to redefine Indian interiors, The Viraj began as a small studio driven by creativity, craftsmanship, and care. Over the years, we've grown into a full-service interior design company delivering exceptional spaces — from modern apartments and modular kitchens to luxury villas and commercial offices.
            </p>
            <p className="text-white font-medium text-xl italic">
                Our journey is built on a simple promise: every home deserves to have a soul.
            </p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-brand-dark">
         <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-purple rounded-tl-3xl"></div>
                 <img src="./interiors-1.jpg" alt="Design Philosophy" className="rounded-xl shadow-2xl w-full" />
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-purple rounded-br-3xl"></div>
             </div>
             <div>
                 <h2 className="text-3xl font-serif font-bold mb-6">Design with Intention.</h2>
                 <p className="text-neutral-400 mb-6 leading-relaxed">
                     We believe interior design should reflect more than trends — it should mirror your personality, habits, and aspirations. Every project we take on begins with listening — to understand your story, your rhythm, and how you want to live.
                 </p>
                 <p className="text-neutral-400 leading-relaxed">
                     Then we translate that understanding into timeless design — balanced between functionality, beauty, and emotion.
                 </p>
             </div>
         </div>
      </Section>

      {/* Process */}
      <Section className="bg-brand-black">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">From Vision to Reality.</h2>
              <p className="text-neutral-400">Our structured yet flexible process ensures every detail is thoughtfully managed.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
              {[
                  { step: "1", title: "Consultation & Concept", desc: "We discuss your needs, preferences, and budget to define the project scope." },
                  { step: "2", title: "Design Development", desc: "Our designers craft layouts, mood boards, and 3D renders." },
                  { step: "3", title: "Material & Estimation", desc: "Transparent budgeting using The Viraj Estimator ensures clarity and confidence." },
                  { step: "4", title: "Execution & Supervision", desc: "We handle on-site work, vendor coordination, and quality checks." },
                  { step: "5", title: "Handover & Aftercare", desc: "Final inspection and finishing touches, ensuring your satisfaction." }
              ].map((item, i) => (
                  <div key={i} className="relative group">
                      <div className="w-12 h-12 rounded-full bg-brand-panel border border-brand-purple flex items-center justify-center text-brand-purple font-bold text-xl mb-4 group-hover:bg-brand-purple group-hover:text-white transition-colors shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                          {item.step}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-neutral-400 text-sm">{item.desc}</p>
                      {i !== 4 && <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-neutral-800 -z-10"></div>}
                  </div>
              ))}
          </div>
      </Section>

      {/* Team */}
      <Section className="bg-brand-dark">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">The People Behind the Vision.</h2>
                  <p className="text-neutral-400 mb-6">
                      Our multidisciplinary team includes interior designers, architects, project managers, and skilled craftsmen — all united by a shared passion for design excellence.
                  </p>
                  <p className="text-neutral-400">
                      Every project is handled with hands-on attention, combining creative insight with technical precision.
                  </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <img src="./interiors-2.jpg" alt="Team member" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="./interiors-3.jpg" alt="Team member" className="rounded-lg mt-8 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
          </div>
      </Section>

      {/* Different */}
      <Section className="bg-brand-black">
          <div className="bg-gradient-to-br from-brand-panel to-neutral-900 rounded-2xl p-8 md:p-12 border border-neutral-800">
             <div className="grid md:grid-cols-2 gap-12">
                 <div>
                     <h2 className="text-3xl font-serif font-bold mb-8">Why Clients Choose The Viraj</h2>
                     <ul className="space-y-4">
                         {[
                             "Personalized design concepts — no pre-set templates",
                             "Transparent cost estimation and project timelines",
                             "High-quality materials and premium brand partnerships",
                             "End-to-end service — from design to delivery",
                             "3D visualization before execution for complete clarity",
                             "Dedicated after-service support"
                         ].map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                                 <span className="text-brand-purple mt-1">✓</span>
                                 <p className="text-neutral-300">{item}</p>
                             </li>
                         ))}
                     </ul>
                 </div>
                 <div className="relative overflow-hidden rounded-xl">
                     <img src="./interiors-4.jpg" alt="Beautifully Designed Space" className="w-full h-full object-cover" />
                 </div>
             </div>
          </div>
      </Section>

      <Section className="bg-brand-black text-center py-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Let's Build Something Beautiful Together.</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">Talk to our designers today and get a customized estimate for your space.</p>
          <Link to="/contact">
             <Button>Get Estimate</Button>
          </Link>
      </Section>
    </>
  );
};

export default About;