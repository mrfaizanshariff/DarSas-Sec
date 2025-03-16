
import { Shield, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadarAnimation } from '@/components/radar-animation';
import { CircuitLines } from '@/components/circuit-lines';
import { notFound } from 'next/navigation';

const services = {
  'Digital-security': {
    title: 'Digital Security',
    description: 'Professional security guards and patrol services.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80',
    features: [
      'Trained security personnel',
      '24/7 patrol services',
      'Access control management',
      'Emergency response',
      'Visitor management',
      'Security audits'
    ],
    benefits: [
      'Enhanced premises security',
      'Deterrence of criminal activity',
      'Quick incident response',
      'Professional security presence'
    ]
  },
  'corporate-security': {
    title: 'Corporate Security',
    description: 'Comprehensive security solutions for businesses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    features: [
      'Risk assessment',
      'Security system integration',
      'Employee security training',
      'Crisis management',
      'Information security',
      'Asset protection'
    ],
    benefits: [
      'Protected business assets',
      'Secure work environment',
      'Regulatory compliance',
      'Business continuity'
    ]
  },
  'vip-protection': {
    title: 'VIP Protection',
    description: 'Personal security and close protection services.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
    features: [
      'Close protection officers',
      'Route planning',
      'Threat assessment',
      'Secure transportation',
      'Event security',
      'Privacy protection'
    ],
    benefits: [
      'Personal safety assurance',
      'Privacy maintenance',
      'Professional discretion',
      'Peace of mind'
    ]
  },
  'surveillance': {
    title: 'Surveillance Systems',
    description: 'Advanced CCTV and monitoring solutions.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80',
    features: [
      'HD CCTV systems',
      'Remote monitoring',
      'Video analytics',
      'Cloud storage',
      'Mobile access',
      'Intrusion detection'
    ],
    benefits: [
      '24/7 visual security',
      'Incident documentation',
      'Remote accessibility',
      'Deterrent presence'
    ]
  },
  'event-security': {
    title: 'Event Security',
    description: 'Specialized security for events and gatherings.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    features: [
      'Crowd control',
      'Access management',
      'Emergency planning',
      'VIP protection',
      'Security screening',
      'Command center'
    ],
    benefits: [
      'Safe event environment',
      'Crowd management',
      'Emergency readiness',
      'Guest safety'
    ]
  },
  'security-consulting': {
    title: 'Security Consulting',
    description: 'Expert security planning and strategy.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    features: [
      'Security assessment',
      'Strategy development',
      'Policy creation',
      'Staff training',
      'Compliance guidance',
      'Technology consulting'
    ],
    benefits: [
      'Expert guidance',
      'Risk mitigation',
      'Cost optimization',
      'Security enhancement'
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service: service,
  }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <RadarAnimation />
      <CircuitLines />

      {/* Hero Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 mb-8">
              <Shield className="h-5 w-5 text-[#eb4034]" />
              <span className="text-white text-sm font-medium">{service.title}</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-8">
              {service.title}
              <br />
              <span className="text-gradient animate-glow">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 card-gradient rounded-xl p-4 card-border hover-lift"
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#eb4034]/20 rounded-full filter blur-xl" />
                        <Check className="relative h-6 w-6 text-[#eb4034]" />
                      </div>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden hover-lift">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-gray-400 text-lg">
              Why choose our {service.title.toLowerCase()} services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl p-6 card-border hover-lift text-center"
              >
                <div className="text-[#eb4034] font-bold text-lg mb-2">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gradient rounded-3xl p-12 card-border relative overflow-hidden">
            <RadarAnimation />
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our {service.title.toLowerCase()} services and how we can help protect what matters most to you.
              </p>
              <Button
                size="lg"
                className="bg-[#eb4034] hover:bg-[#d63027] text-white text-lg px-8 py-6 rounded-full hover-scale"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}