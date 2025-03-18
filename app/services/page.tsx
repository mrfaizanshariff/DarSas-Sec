'use client';

import { Shield, Users, Lock, Building, UserCheck, Camera, Bell, Brain } from 'lucide-react';
import Link from 'next/link';
import { FuturisticGrid } from '@/components/futuristic-grids';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Lock,
    title: 'Guarding Services',
    description: 'Tech-enabled security personnel providing real-time threat detection and rapid response capabilities.',
    link: '/services/guarding-services',
    color: 'from-red-500/20 to-orange-500/20'
  },
  {
    icon: Building,
    title: 'Digital/Physical Security',
    description: 'Integrated technology solutions that prevent threats and maximize operational efficiency.',
    link: '/services/digital-physical-security',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    icon: UserCheck,
    title: 'Protective Security & Consultation',
    description: 'Expert consultation and protection services to build organizational resilience and compliant.',
    link: '/services/security-consultation',
    color: 'from-green-500/20 to-emerald-500/20'
  },

];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FuturisticGrid />
      
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 mb-8">
              <Shield className="h-5 w-5 text-[#eb4034]" />
              <span className="text-white text-sm font-medium">Our Services</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-8">
              Comprehensive Security
              <br />
              <span className="text-gradient animate-glow">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From Guarding Services to advanced surveillance systems, we provide end-to-end security solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group hover-lift"
              >
                <div className={`card-gradient rounded-2xl p-8 card-border h-full bg-gradient-to-br ${service.color}`}>
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#eb4034]/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <service.icon className="relative h-12 w-12 text-[#eb4034] animate-glow" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="text-[#eb4034] hover:text-white hover:bg-[#eb4034] transition-colors duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gradient rounded-3xl p-12 card-border relative overflow-hidden">
            <FuturisticGrid />
            <div className="relative z-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Enhance Your Security?
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Contact us today for a personalized security assessment and discover how we can protect what matters most to you.
                </p>
                <Button
                  size="lg"
                  className="bg-[#eb4034] hover:bg-[#d63027] text-white text-lg px-8 py-6 rounded-full hover-scale"
                >
                  <Link href="/contact">
                  Get Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}