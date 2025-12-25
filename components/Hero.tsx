import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from './Button';


export const Hero: React.FC = () => {


  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-stone-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 -skew-x-12 translate-x-20 z-0 hidden lg:block"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Text Content - Centered */}
        <div className="max-w-4xl space-y-8">

          {/* Authority / Qualification */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary-100">
              <ShieldCheck size={16} className="text-primary-500" />
              <span className="text-xs font-bold tracking-wider uppercase text-primary-800">
                Terapeuta e Neuropsicopedagoga
              </span>
            </div>
          </div>

          {/* Headline of Promise */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-stone-900 font-medium">
            Atue na raiz da sua ansiedade e traumas <span className="text-primary-600 italic">sem passar anos falando</span> sobre a dor.
          </h1>

          {/* Sub-headline / Objection Handling */}
          <p className="text-lg md:text-2xl text-stone-600 font-sans leading-relaxed max-w-2xl mx-auto">
            Conheça a <strong>Terapia de Resultado Breve</strong>. Atuamos nas "pancadas emocionais" que originaram o problema, não apenas os sintomas. Muitas pessoas relatam alívio e leveza logo na <strong>primeira sessão</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="w-full sm:w-auto text-lg px-10 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Quero Agendar Minha Sessão Online
              <ArrowRight size={20} />
            </Button>
          </div>

          {/* Social Proof / Mechanism Bullets */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-stone-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary-500 shrink-0" />
              <span className="font-medium">Não é apenas ressignificação.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary-500 shrink-0" />
              <span className="font-medium">Sem narrar traumas (protocolos mudos).</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary-500 shrink-0" />
              <span className="font-medium">Atendimento 100% Online.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};