import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  subtitle, 
  title, 
  alignment = 'center',
  light = false
}) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-stone-900';
  const subtitleColor = light ? 'text-primary-100' : 'text-primary-600';

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {subtitle && (
        <span className={`uppercase tracking-widest text-xs font-bold mb-3 block ${subtitleColor}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight ${titleColor}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-primary-500 mt-6 rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};