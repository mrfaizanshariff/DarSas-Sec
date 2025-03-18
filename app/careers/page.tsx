'use client';

import { Shield, Users, Award, Clock,BookCheck, BadgeCheck, BrainCircuit, Atom } from 'lucide-react';
import { InfiniteLogoSlider } from '@/components/infinite-logo-slider';
import { FuturisticGrid } from '@/components/futuristic-grids';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#eb4034]/10 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 mb-8">
              <Shield className="h-5 w-5 text-[#eb4034]" />
              <span className="text-white text-sm font-medium">Jobs and Opportunities</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-8">
            Join Our Team       <br />
              <span className="text-gradient animate-glow">Protect, Serve, and Excel!     </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At Dar Sas, we are dedicated to providing top-tier security services that ensure safety and peace of mind for businesses, communities, and individuals. We are always on the lookout for dedicated professionals who share our commitment to excellence, integrity, and vigilance.            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="hover-lift card-gradient rounded-2xl p-8 card-border">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
              To safeguard our clients' people, assets, and operations by delivering customized, cutting-edge security solutions that combine human expertise with advanced technology.
              </p>
            </div>
            <div className="hover-lift card-gradient rounded-2xl p-8 card-border">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
              To be the leading integrated security solutions provider in the region, setting industry standards through innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '1000+', label: 'Security Professionals' },
              { icon: Clock, number: '24/7', label: 'Monitoring Center' },
              { icon: Shield, number: '500+', label: 'Active Clients' },
              { icon: Award, number: '30+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="hover-lift card-gradient rounded-2xl p-8 card-border text-center">
                <div className="inline-flex items-center justify-center">
                  <stat.icon className="h-12 w-12 text-[#eb4034] mb-4 animate-glow" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 text-lg">
            DAR SAS maintains the highest standards in security services through industry-recognized certifications and accreditations that validate our expertise and commitment to excellence.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { title: 'Competitive Compensation', description: ' We offer industry-leading salaries and benefits to our employees.' },
              {  title: 'Professional Growth', description: 'Continuous training and career advancement opportunities.' },
              {  title: 'Cutting-Edge Technology', description: 'Work with the latest security solutions and equipment.' },
              { title:'Supportive Team Environment', description: 'Join a team that values collaboration, respect, and professionalism.' },
              { title:'Making a Difference', description: 'Protect lives, businesses, and communities through your expertise and dedication.' },
           
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-grow hover-lift card-gradient rounded-2xl p-8 card-border">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gradient rounded-3xl p-12 card-border relative overflow-hidden">
            <FuturisticGrid />
            <div className="relative z-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to work for Dar Sas?
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
    
                </p>
                <Button
                  size="lg"
                  className="bg-[#eb4034] hover:bg-[#d63027] text-white text-lg px-8 py-6 rounded-full hover-scale"
                >
                  <Link href="/contact">
                  Talk to us
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