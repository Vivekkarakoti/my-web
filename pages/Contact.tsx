import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Section from '../components/Section';
import Button from '../components/ui/Button';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  
  const [state, handleSubmit] = useForm("mjgekavo");
  
  // Handle successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      // Navigate to thank you page after short delay
      const timer = setTimeout(() => {
        navigate('/thank-you');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, navigate]);

  return (
    <>
      <div className="pt-24 pb-12 text-center bg-brand-black">
         <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let's Start Your Transformation.</h1>
         <p className="text-xl text-neutral-400">Get in touch with our team</p>
      </div>

      <Section className="bg-brand-black pb-24">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-brand-panel p-8 rounded-2xl border border-neutral-800 text-center hover:border-brand-purple transition-colors group">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        <Phone size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-neutral-400"><a href="tel:+91" className="hover:text-white transition-colors">+91 [Your Number]</a></p>
                </div>

                <div className="bg-brand-panel p-8 rounded-2xl border border-neutral-800 text-center hover:border-brand-purple transition-colors group">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-neutral-400"><a href="mailto:hello@theviraj.com" className="hover:text-white transition-colors">hello@theviraj.com</a></p>
                </div>

                <div className="bg-brand-panel p-8 rounded-2xl border border-neutral-800 text-center hover:border-brand-purple transition-colors group">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Office</h3>
                    <p className="text-neutral-400">[Your City/Address]</p>
                </div>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2">
                <div className="bg-brand-panel rounded-2xl p-8 md:p-12 border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <h2 className="text-2xl font-serif font-bold mb-8 border-l-4 border-brand-purple pl-4">Send us a Message</h2>
                    
                    {/* Success Message */}
                    {state.succeeded && (
                        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
                            <CheckCircle size={20} />
                            <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                        </div>
                    )}

                    {/* Error Message */}
                    {state.errors && state.errors.length > 0 && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
                            <AlertCircle size={20} />
                            <span>Sorry, there was an error sending your message. Please try again or contact us directly.</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-neutral-300">Name *</label>
                                <input 
                                  type="text" 
                                  id="name" 
                                  name="name"
                                  className="w-full px-4 py-3 rounded-lg bg-brand-black border border-neutral-700 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" 
                                  required 
                                  disabled={state.submitting}
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-neutral-300">Phone Number *</label>
                                <input 
                                  type="tel" 
                                  id="phone" 
                                  name="phone"
                                  className="w-full px-4 py-3 rounded-lg bg-brand-black border border-neutral-700 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" 
                                  required 
                                  disabled={state.submitting}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email Address *</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email"
                              className="w-full px-4 py-3 rounded-lg bg-brand-black border border-neutral-700 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" 
                              required 
                              disabled={state.submitting}
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-neutral-300">Service Required *</label>
                            <div className="relative">
                                <select 
                                  id="service" 
                                  name="service"
                                  className="w-full px-4 py-3 rounded-lg bg-brand-black border border-neutral-700 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all appearance-none" 
                                  required
                                  disabled={state.submitting}
                                >
                                    <option value="">Select a service</option>
                                    <option value="kitchen">Modular Kitchen</option>
                                    <option value="full-interior">Full Interior</option>
                                    <option value="living-spaces">Living Spaces</option>
                                    <option value="renovation">Renovation</option>
                                    <option value="estimation">Estimation</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">▼</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="budget" className="text-sm font-medium text-neutral-300">Estimated Budget (Optional)</label>
                            <input 
                              type="text" 
                              id="budget" 
                              name="budget"
                              placeholder="e.g., Rs. 5,00,000" 
                              className="w-full px-4 py-3 rounded-lg bg-brand-black border border-neutral-700 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all"
                              disabled={state.submitting}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message (Optional)</label>
                            <textarea 
                              id="message" 
                              name="message"
                              rows={4} 
                              className="w-full px-4 py-3 rounded-lg bg-brand-black border border-neutral-700 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all"
                              disabled={state.submitting}
                            ></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <Button 
                          type="submit" 
                          fullWidth 
                          className="mt-4"
                          disabled={state.submitting}
                        >
                          {state.submitting ? 'Sending...' : 'Start Your Journey'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
