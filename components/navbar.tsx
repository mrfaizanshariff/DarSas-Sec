'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, ChevronDown,Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/languageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
   
    { 
      name: t("nav.services"),
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: t("nav.services.1"), href: '/services/Digital-security' },
        { name: t("nav.services.2"), href: '/services/corporate-security' },
        { name: t("nav.services.3"), href: '/services/vip-protection' },
        { name: t("nav.services.4"), href: '/services/event-security' },
      ]
    },
    { name: t("nav.about"), href: '/about', hasDropdown: false },
    { name: t("nav.contact"), href: '/contact', hasDropdown: false },
  ];
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className={`h-8 w-8 ${isScrolled ? 'text-[#eb4034]' : 'text-white'}`} />
              <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                {t('nav.logo')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 ${
                      isScrolled ? 'text-gray-900' : 'text-white'
                    } hover:text-[#eb4034] px-3 py-2 text-sm font-medium transition-colors`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button 
                className={`${
                  isScrolled 
                    ? 'bg-[#eb4034] hover:bg-[#d63027] text-white' 
                    : 'bg-white text-[#eb4034] hover:bg-gray-100'
                }`}
              >
                {t('nav.getStarted')}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className={`${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } hover:text-[#eb4034]`}
              >
                <Globe className="h-5 w-5" />
                <span className="ml-2">{language.toUpperCase()}</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
          <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className={`${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:text-[#eb4034]`}
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2">{language.toUpperCase()}</span>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:text-[#eb4034]`}
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-900 hover:text-[#eb4034] block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-4">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="text-gray-600 hover:text-[#eb4034] block px-3 py-2 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="w-full bg-[#eb4034] hover:bg-[#d63027] text-white mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}