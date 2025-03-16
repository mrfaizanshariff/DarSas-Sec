'use client';

import { useState } from 'react';
import { Shield, Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eb4034" stopOpacity="0.4">
                <animate
                  attributeName="stopOpacity"
                  values="0.2; 0.4; 0.2"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#000000" stopOpacity="0.2">
                <animate
                  attributeName="stopOpacity"
                  values="0.1; 0.3; 0.1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path
                d="M 4 0 L 0 0 0 4"
                fill="none"
                stroke="url(#grid-gradient)"
                strokeWidth="0.5"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="4 0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information */}
          <div className="flex-1 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 mb-8">
              <span className="animate-glow">
                <Shield className="h-5 w-5 text-[#eb4034]" />
              </span>
              <span className="text-white text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-8">
              Let's Discuss Your
              <br />
              <span className="text-gradient animate-glow">Security Needs</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-xl">
              Our security experts are ready to help you create a comprehensive protection plan tailored to your requirements.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+966 123 456 789',
                  href: 'tel:+966123456789'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@darsas.sa',
                  href: 'mailto:info@darsas.sa'
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  content: 'Prince Abdulaziz Ibn Musaid Ibn Jalawi St, Al Murabba, Riyadh',
                  href: 'https://www.google.com/maps?ll=24.66078,46.709772&z=15&t=m&hl=en&gl=US&mapclient=embed&q=24%C2%B039%2738.8%22N+46%C2%B042%2735.2%22E+24.660778,+46.709778@24.6607778,46.7097778'
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center space-x-4 hover-lift card-gradient rounded-2xl p-6 card-border"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#eb4034]/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <item.icon className="relative h-6 w-6 text-[#eb4034] animate-glow" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-gray-400">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="animate-fade-in card-gradient rounded-2xl p-8 card-border space-y-6"
            >
              <div className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm mb-2 block">First Name</label>
                    <Input
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">Last Name</label>
                    <Input
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Phone</label>
                  <Input
                    type="tel"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    placeholder="+966 123 456 789"
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Message</label>
                  <Textarea
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[150px]"
                    placeholder="Tell us about your security requirements..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full hover-scale z-10 relative bg-[#eb4034] hover:bg-[#d63027] text-white text-lg h-12 rounded-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="relative z-10 bg-black/50 backdrop-blur-lg py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 text-glow">
              Visit Our Office
            </h2>
            <p className="text-gray-400">
              Experience our state-of-the-art security operations center in person
            </p>
          </div>
          <div className="rounded-2xl z-10 relative overflow-hidden card-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7251.845919156838!2d46.709772!3d24.66078!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM5JzM4LjgiTiA0NsKwNDInMzUuMiJF!5e0!3m2!1sen!2sus!4v1742119885655!5m2!1sen!2sus" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='z-10 relative'
            />
          </div>
        </div>
      </section>
    </div>
  );
}