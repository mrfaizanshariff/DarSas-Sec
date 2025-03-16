import { Shield, Users, Clock, Award, ChevronRight, Lock, Building, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80"
            alt="Security background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="animate-slide-down">
            <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 mb-8">
              <span className="animate-glow">
                <Shield className="h-5 w-5 text-[#eb4034]" />
              </span>
              <span className="text-white text-sm font-medium">Next Generation Security</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Securing Your World <br />
              <span className="text-gradient animate-glow">With Confidence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl">
              Professional security services tailored to protect what matters most to you. Trusted by leading businesses across Saudi Arabia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="hover-scale bg-[#eb4034] hover:bg-[#d63027] text-white text-lg px-8 py-6 rounded-full"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover-scale glass-effect text-white border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-full"
              >
                <Link href="/services">
                Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[#eb4034]/10 mix-blend-overlay" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clients Protected' },
              { number: '1000+', label: 'Security Staff' },
              { number: '24/7', label: 'Monitoring' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="hover-lift card-gradient rounded-2xl p-8 card-border">
                <div className="text-4xl font-bold text-[#eb4034] mb-2 text-glow">{stat.number}</div>
                <div className="text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4 text-glow">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer a wide range of security services to meet your specific needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Physical Security',
                description: 'Professional security guards and patrol services for your premises.',
              },
              {
                icon: Building,
                title: 'Corporate Security',
                description: 'Tailored security solutions for businesses and organizations.',
              },
              {
                icon: UserCheck,
                title: 'VIP Protection',
                description: 'Personal security and close protection services.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group hover-lift card-gradient rounded-2xl p-8 card-border"
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#eb4034]/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <service.icon className="relative h-12 w-12 text-[#eb4034] animate-glow" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-[#eb4034] font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#eb4034]/10 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-6 text-glow">
                Why Choose Darsas Security?
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                We combine advanced technology with professional expertise to deliver unmatched security services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: Shield,
                    title: 'Advanced Security',
                    description: 'State-of-the-art security systems and protocols',
                  },
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Highly trained and certified security professionals',
                  },
                  {
                    icon: Clock,
                    title: '24/7 Support',
                    description: 'Round-the-clock monitoring and rapid response',
                  },
                  {
                    icon: Award,
                    title: 'Certified Quality',
                    description: 'ISO certified security services and training',
                  },
                ].map((feature, index) => (
                  <div key={index} className="hover-lift card-gradient rounded-xl p-6 card-border">
                    <feature.icon className="h-8 w-8 text-[#eb4034] mb-4 animate-glow" />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden animate-fade-in hover-scale">
              <Image
                src="https://images.pexels.com/photos/11137291/pexels-photo-11137291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Security professional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#eb4034] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-5xl font-bold text-white mb-6 text-glow">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can protect what matters most to you.
            </p>
            <Button 
              size="lg" 
              className="hover-scale bg-white text-[#eb4034] hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
            >
              Get Your Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}