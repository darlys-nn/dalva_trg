import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';
import { useBooking } from '../context/BookingContext';

const navItems: NavItem[] = [
  { label: 'O Método', href: '#metodo' },
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-semibold tracking-wide text-primary-900">
          Dalva<span className="text-primary-600">Edite</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-stone-600 hover:text-primary-700 font-sans text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={openModal}
            className="px-5 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm flex items-center gap-2"
          >
            <Phone size={16} />
            Agendar Agora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg py-6 px-6 flex flex-col gap-4 animate-fade-in">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-stone-800 text-lg font-medium py-2 border-b border-stone-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              openModal();
            }}
            className="mt-2 w-full text-center py-3 bg-primary-600 text-white rounded-lg font-medium"
          >
            Agendar Consulta
          </button>
        </div>
      )}
    </nav>
  );
};