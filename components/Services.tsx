import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Sparkles, BrainCircuit, MicOff, Lock } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-stone-50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="O Segredo: Terapia de Resultado Breve" 
          subtitle="Um Novo Mecanismo de Cura"
        />

        {/* Contrast Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 opacity-70 grayscale-[0.5]">
            <h3 className="font-serif text-2xl font-bold text-stone-400 mb-6">Terapia Tradicional</h3>
            <ul className="space-y-4 text-stone-500">
              <li className="flex gap-3">
                <span className="text-red-300 font-bold">✕</span>
                Foco na fala excessiva (reviver o trauma).
              </li>
              <li className="flex gap-3">
                <span className="text-red-300 font-bold">✕</span>
                Trata sintomas (ansiedade momentânea).
              </li>
              <li className="flex gap-3">
                <span className="text-red-300 font-bold">✕</span>
                Baseada em ressignificação (a dor pode voltar).
              </li>
              <li className="flex gap-3">
                <span className="text-red-300 font-bold">✕</span>
                Processos que duram anos.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary-500 relative transform lg:-translate-x-6 lg:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MÉTODO DALVA EDITE
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary-700 mb-6">Terapia de Resultado</h3>
            <ul className="space-y-4 text-stone-800">
              <li className="flex gap-3 items-start">
                <span className="text-primary-500 font-bold mt-1">✓</span>
                <span><strong>Sem fala:</strong> Você não precisa contar a história triste.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-500 font-bold mt-1">✓</span>
                <span><strong>Raiz do Problema:</strong> Tratamos a "pancada emocional" original (infância).</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-500 font-bold mt-1">✓</span>
                <span><strong>Não se limita à ressignificação:</strong> foco na origem emocional.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-500 font-bold mt-1">✓</span>
                <span><strong>Alívio Inicial:</strong> Muitas pessoas relatam sensação de leveza já na 1ª sessão.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How it works steps */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center font-serif text-3xl text-stone-800 mb-12">Como funcionam as sessões?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                <Sparkles size={32} />
              </div>
              <h4 className="font-bold text-lg mb-3">1. Alívio Imediato</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Na primeira consulta, já identificamos a técnica personalizada para o seu caso. É comum relatar uma sensação de leveza logo após a primeira sessão.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 relative">
              <div className="hidden md:block absolute top-8 -left-1/2 w-full h-0.5 bg-stone-200 -z-10"></div>
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-6 z-10 bg-white">
                <MicOff size={32} />
              </div>
              <h4 className="font-bold text-lg mb-3">2. Protocolos Sem Fala</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Durante os protocolos (média 50 min), você não precisa falar. Basta dar uma nota para o seu desconforto. Eu conduzo o processo.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 relative">
              <div className="hidden md:block absolute top-8 -left-1/2 w-full h-0.5 bg-stone-200 -z-10"></div>
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-6 z-10 bg-white">
                <Lock size={32} />
              </div>
              <h4 className="font-bold text-lg mb-3">3. Resultado Consistente</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Ao eliminar a carga emocional da "pancada" original, a ansiedade e o medo deixam de ter combustível. Resultado mais estável, sem ciclos repetitivos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};