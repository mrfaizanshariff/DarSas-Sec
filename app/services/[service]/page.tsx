
import { Shield, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadarAnimation } from '@/components/radar-animation';
import { CircuitLines } from '@/components/circuit-lines';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import cctv from '../../../assets/cctv.png'
const services = {
  'guarding-services': {
    title: 'Guarding Services',
    description: 'Our digitized guard services represent the seamless integration of elite human expertise with state-of-the-art security technology. We deploy meticulously trained security professionals equipped with advanced digital tools that dramatically enhance monitoring capabilities, facilitate instant communication, and enable sophisticated incident response protocols tailored to your specific security requirements.',
    image: cctv.src,
    features: [
      'Trained security personnel',
      '24/7 patrol services',
      'Access control management',
      'Rapid response',
      'Digital Integration',
      'Comprehensive Reporting'
    ],
    benefits: [
      'Smart Patrol',
      'Guard Management',
      'Compliance Reporting',
      'Remote Monitoring'
    ]
  },
  'digital-physical-security': {
    title: 'Digital/Physical Security',
    description: 'Our solutions include CCTV surveillance, access control, intrusion detection, scanning systems, IoT tracking, parking management, perimeter security, and integrated fire alarm systems.',
    image: cctv.src,
    features: [
      'Risk assessment',
      'Security system integration',
      'Employee security training',
      'Crisis management',
      'Information security',
      'Asset protection'
    ],
    benefits: [
      'System Design',
      'Technology Supply',
      'Integration',
      'Monitoring'
    ]
  },

  'security-consultation': {
    title: 'Protective Security & Consultation',
    description: 'Our consulting services provide strategic expertise to address complex security challenges. We develop customized security policies, manage high-profile events, deliver specialized training, and implement tailored technology solutions.',
    image: cctv.src,
    features: [
      'Policy Development',
      'Access Control',
      'Threat Intelligence',
      'VIP Protection',
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
                <Link href="/contact">
                Contact Us
                </Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}