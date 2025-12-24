import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Qual a diferença para abordagens terapêuticas tradicionais?",
    answer: "Abordagens terapêuticas tradicionais costumam focar na fala e na ressignificação, processos que podem levar anos. Eu sou Terapeuta e Neuropsicopedagoga, e meu foco é no reprocesssamento da raiz emocional (pancada emocional), sem longas conversas sobre o passado."
  },
  {
    question: "Eu preciso falar sobre o meu trauma?",
    answer: "Não. Essa é uma das maiores vantagens do meu método. Durante os protocolos, você não precisa me contar os detalhes dolorosos."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Por ser uma abordagem focada em resultado, o objetivo é promover autonomia emocional no menor tempo necessário, respeitando o seu ritmo."
  },
  {
    question: "O atendimento funciona online?",
    answer: "Sim, o atendimento é exclusivamente online e funciona perfeitamente. Os protocolos são guiados por vídeo chamada, possibilitando uma experiência terapêutica eficaz, com conforto e privacidade."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-stone-50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <SectionTitle 
          title="Perguntas Frequentes" 
          subtitle="Tire suas dúvidas sobre o método"
        />

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-stone-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-serif text-lg md:text-xl text-stone-800 font-medium pr-8">
                  {item.question}
                </span>
                <span className={`text-primary-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : '0'}`}>
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};