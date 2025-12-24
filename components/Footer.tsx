import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-white mb-2">Dalva Edite</h3>
          <p className="text-sm font-medium text-primary-500">Terapeuta</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};