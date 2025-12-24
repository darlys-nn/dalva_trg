import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Award, Brain, ShieldCheck, Baby } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto bg-stone-200">
              <img 
                src="https://res.cloudinary.com/dhluknxar/image/upload/v1766543050/PHOTO-2025-12-23-22-29-42_akbvrr.webp" 
                alt="Dalva Edite" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Background pattern */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary-200 rounded-lg z-0 hidden md:block translate-x-4 translate-y-4"></div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <SectionTitle 
              title="Quem é Dalva Edite?" 
              subtitle="Especialista em Traumas Graves"
              alignment="left"
            />
            
            <div className="space-y-6 text-stone-600 text-lg font-sans leading-relaxed">
              <p>
                Sou <strong>Terapeuta e Neuropsicopedagoga</strong>, especialista em desbloqueios emocionais profundos e traumas graves.
              </p>
              <p>
                Minha carreira foi construída observando uma limitação nas abordagens tradicionais: pacientes que passam anos "entendendo" seus problemas, mas nunca se livrando deles.
              </p>
              <p>
                Entendo que a ansiedade, o pânico e os medos são apenas sintomas de <strong>pancadas emocionais</strong> sofridas, muitas vezes, na infância. Meu trabalho é ir lá, na raiz, e desligar esse alerta de perigo, devolvendo sua vida.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Neuropsicopedagogia</h4>
                  <p className="text-sm text-stone-500">Entendendo como o cérebro funciona.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Especialista em Trauma</h4>
                  <p className="text-sm text-stone-500">Foco em casos graves e resistentes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Master Terapeuta TRG</h4>
                  <p className="text-sm text-stone-500">Especialista em transtornos graves.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                  <Baby size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">TRG Kids</h4>
                  <p className="text-sm text-stone-500">Especialista no tratamento de crianças.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};