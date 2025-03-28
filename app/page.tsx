import { Shield, Users, Clock, Award, ChevronRight, Lock, Building, UserCheck, ArrowRight, Smile, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import consulting from '../assets/consulting.png'
import ParticleNetwork from '@/components/particles';

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
                <Link href="/contact">
                Get Started
                </Link>
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
      <section className="py-10 bg-black relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[#eb4034]/10 mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Clients Protected' },
              { number: '1000+', label: 'Security Staff' },
              { number: '24/7', label: 'Monitoring' },
              { number: '30+', label: 'Years Experience' },
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
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
      {/* <div className='absolute left-0 h-full w-full hidden md:block'>
        <ParticleNetwork/>

        </div> */}
        <div className="max-w-7xl relative z-2 mx-auto px-4 sm:px-6 lg:px-8">
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
                title: 'Guarding Services',
    link: '/services/guarding-services',

                description: 'Tech-enabled security personnel providing real-time threat detection and rapid response capabilities.',
              },
              {
                icon: Building,
                title: 'Digital/Physical Security',
    link: '/services/digital-physical-security',

                description: 'Integrated technology solutions that prevent threats and maximize operational efficiency.',
              },
              {
                icon: UserCheck,
                title: 'Protective Security & Consultation',
    link: '/services/security-consultation',

                description: 'Expert consultation and protection services to build organizational resilience and compliant.',
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
                  href={service.link}
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

      {/* services section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4 text-glow">
            Certificates and Accreditations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            DAR SAS maintains the highest standards in security services through industry-recognized certifications and accreditations that validate our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'ISO 27001', description: 'Certified for Information Security Management Systems, ensuring we maintain rigorous controls for handling sensitive client information and security protocols.' },
              {  title: 'ISO 9001:2015', description: 'Quality Management System certification demonstrating our commitment to consistent, high-quality security service delivery and continuous improvement.' },
              {  title: 'ASIS International', description: 'Our security professionals hold Certified Protection Professional (CPP) and Physical Security Professional (PSP) designations from the leading security association worldwide.' },
              { title:'National Security Accreditation', description: 'Licensed and authorized by relevant national security authorities to provide comprehensive security services across the kingdom.' },
              { title:'PSARA Compliance', description: 'Fully compliant with Private Security Agencies Regulation Act requirements for professional security services delivery.' },
              { title:'Industry Partnerships', description: 'Strategic partnerships with leading security technology providers ensuring access to the latest innovations in security solutions.' },
            ].map((service, index) => (
              <div
                key={index}
                className="group hover-lift card-gradient rounded-2xl p-8 card-border"
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#eb4034]/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <Award className="relative h-12 w-12 text-[#eb4034] animate-glow" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                {/* <Link
                  href={service.link}
                  className="inline-flex items-center text-[#eb4034] font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link> */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-6 text-glow">
                Why Choose Dar Sas Security?
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                We combine advanced technology with professional expertise to deliver unmatched security services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: Shield,
                    title: 'Strong Group Backing',
                    description: 'Leveraged by Mawarid Holding Group, providing unparalleled strength in manpower resources, cutting-edge technology, and robust financial capabilities.',
                  },
                  {
                    icon: Users,
                    title: 'Expert Human Capital',
                    description: 'Our team combines with extensive expertise in specialized security management across all disciplines, ensuring sophisticated solution delivery',
                  },
                  {
                    icon: MapPin,
                    title: 'Nationwide Coverage',
                    description: 'Strategic operational presence throughout all regions of Saudi Arabia with rapid deployment and mobilization capabilities to respond to your Digital and in person security needs.',
                  },
                  {
                    icon: Smile,
                    title: 'Client Satisfaction',
                    description: 'We define our success through exceptional client satisfaction metrics, considering your continued loyalty and partnership our greatest achievement and benchmark.',
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
                src={consulting.src}
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
              <Link href="/contact">
              Get Your Free Consultation
              </Link>
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}