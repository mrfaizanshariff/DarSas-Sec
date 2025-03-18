
'use client'
import { useLanguage } from '@/context/LanguageContext';
import { Shield } from 'lucide-react';
import Link from 'next/link';
import Logo from '../assets/Logo.png'

export function Footer() {
  const { t } = useLanguage();
// Then use it like:

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Shield className="h-8 w-8 text-[#eb4034]" /> */}
              <img className='h-14 w-14' src={Logo.src} alt="Dar Sas" />
              <span className="font-bold text-xl">Dar Sas</span>
            </div>
            <p className="text-gray-400">
              Providing professional security services and comprehensive protection solutions since 1995.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/guuarding-services" className="text-gray-400 hover:text-white">Guarding Services</Link></li>
              <li><Link href="/services/digital-physical-security" className="text-gray-400 hover:text-white">Digital/Physical Security</Link></li>
              <li><Link href="/services/security-consultation" className="text-gray-400 hover:text-white">Security Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Prince Abdulaziz Ibn Musaid Ibn Jalawi St</li>
              <li>Al Murabba, Riyadh, Saudi Arabia</li>
              <li>Phone: +966 920011308</li>
              <li>Email: info@darsas.sa</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dar Sas Security Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}