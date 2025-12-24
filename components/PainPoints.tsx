import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Brain, Repeat, Hourglass, Activity } from 'lucide-react';

const pains = [
  {
    icon: <Hourglass size={32} />,
    title: "Cansado de falar?",
    description: "Você já passou anos em terapias onde fala, fala, mas sente que sai do consultório com o mesmo peso que entrou?"
  },
  {
    icon: <Repeat size={32} />,
    title: "O problema sempre volta",
    description: "Você sente uma melhora momentânea, mas na primeira crise, a ansiedade e o pânico retornam com força total (Recaídas)."
  },
  {
    icon: <Brain size={32} />,
    title: "A Raiz Intocada",
    description: "Você tenta tratar os sintomas do dia a dia, mas sente que existe uma ferida antiga ou 'pancada emocional' que nunca cicatriza."
  },
  {
    icon: <Activity size={32} />,
    title: "Desconforto Físico",
    description: "Seus traumas não estão apenas na mente, você sente o aperto no peito, o nó na garganta e o corpo travado."
  }
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Por que muitas abordagens não trouxeram o resultado esperado?" 
          subtitle="Identificando o Problema"
        />

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-stone-600 leading-relaxed">
            Muitos pacientes chegam até mim frustrados. Eles acreditam que o problema são eles, porque "já tentaram de tudo". 
            A verdade é que <span className="font-bold text-stone-800">em muitos casos, falar sobre o trauma não é suficiente</span>. 
            Muitas vezes, apenas reativa a dor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-stone-50 hover:bg-primary-50 transition-colors duration-300 group border border-stone-100 hover:border-primary-100 shadow-sm"
            >
              <div className="mb-6 text-stone-400 group-hover:text-primary-500 transition-colors">
                {pain.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-stone-800">
                {pain.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-primary-50 p-8 rounded-2xl max-w-3xl mx-auto border border-primary-100">
          <p className="text-lg text-primary-900 font-medium">
            Se você se identificou, saiba que existe um caminho diferente. Um caminho onde o resultado é prioridade e o seu silêncio é respeitado.
          </p>
        </div>
      </div>
    </section>
  );
};