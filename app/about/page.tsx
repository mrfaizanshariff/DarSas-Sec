'use client';

import { Shield, Users, Award, Clock,BookCheck, BadgeCheck, BrainCircuit, Atom } from 'lucide-react';
import { InfiniteLogoSlider } from '@/components/infinite-logo-slider';

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
              <span className="text-white text-sm font-medium">About Darsas</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-8">
              Leading Security Solutions in
              <br />
              <span className="text-gradient animate-glow">Saudi Arabia</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Since 1995, we've been at the forefront of security innovation, protecting businesses and individuals across the Kingdom with unwavering dedication and expertise.
            </p>
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

      {/* Trusted By Section */}
      <section className="py-24 relative overflow-hidden bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted By Leading Organizations
            </h2>
            <p className="text-gray-400 text-lg">
              Providing security solutions to some of the most prestigious companies in Saudi Arabia
            </p>
          </div>
          <InfiniteLogoSlider />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Values</h2>
            {/* <p className="text-gray-400 text-lg">
              A timeline of our growth and achievements
            </p> */}
          </div>
          <div className="space-y-8">
            {[
              { icon: BookCheck, title: 'Integrity', description: 'Maintaining the highest ethical standards in all our operations and client relationships.' },
              { icon: BadgeCheck, title: 'Reliability', description: 'Providing dependable security services that our clients can trust at all times.' },
              { icon: BrainCircuit, title: 'Excellence', description: 'Continuously striving to exceed expectations through superior service delivery and innovative solutions.' },
              { icon: Atom, title: 'Innovation', description: 'Embracing technological advancements to enhance our security capabilities and client offerings.' },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24">
                <item.icon className="h-12 w-12 text-[#eb4034] mb-4 animate-glow" />
                </div>
                <div className="flex-grow hover-lift card-gradient rounded-2xl p-8 card-border">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}