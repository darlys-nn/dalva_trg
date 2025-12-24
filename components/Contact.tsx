import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Mail, Wifi } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <SectionTitle 
              title="Dê o primeiro passo para o alívio" 
              subtitle="Agendamento Online"
              alignment="left"
            />
            <p className="text-stone-600 mb-8 text-lg font-medium">
              Você não precisa continuar convivendo com essa dor.
            </p>
            <p className="text-stone-600 mb-10 leading-relaxed">
              Minha agenda é planejada para dar total atenção a cada caso. Preencha o formulário para verificarmos a disponibilidade e iniciarmos seu processo de cuidado sem sair de casa.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100">
                <div className="p-3 bg-primary-100 rounded-full text-primary-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Email</h4>
                  <p className="text-stone-600">contato@dalvaedite.com.br</p>
                </div>
              </div>

               <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <Wifi size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Atendimento 100% Online</h4>
                  <p className="text-stone-600 text-sm">Realize sua sessão do conforto e segurança da sua casa, através de vídeo chamada.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Styled for Conversion - Using shared component */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-stone-100 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
             <AppointmentForm />
          </div>

        </div>
      </div>
    </section>
  );
};