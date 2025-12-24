import React, { useState } from 'react';
import { Button } from './Button';
import { CalendarCheck, AlertCircle } from 'lucide-react';

// SUBSTITUA PELA SUA URL DO WEBHOOK DO N8N
const N8N_WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || 'https://webhook.sendstornuttris.uk/webhook/dalvaedite';

interface AppointmentFormProps {
  onSuccess?: () => void;
  variant?: 'default' | 'modal';
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSuccess, variant = 'default' }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (digits.length > 10) {
      return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (digits.length > 5) {
      return digits.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (digits.length > 2) {
      return digits.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (digits.length > 0) {
      return digits.replace(/^(\d*)/, '($1');
    }
    return digits;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    setPhoneError(null);
  };

  const validatePhone = (phoneRaw: string) => {
    // Remove tudo que não é dígito
    const digits = phoneRaw.replace(/\D/g, '');

    // Regras de validação:
    // 10 ou 11 dígitos (DDD + Número) - Padrão BR
    // Ignoramos internacional pois o mask é BR
    const isValidLength = digits.length >= 10 && digits.length <= 11;

    if (isValidLength) {
      return digits;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Honeypot check - se o campo oculto estiver preenchido, é um bot
    const honey = formData.get('website_url'); // Campo armadilha
    if (honey) {
      console.log("Bot detected!");
      // Simulamos sucesso para o bot não saber que falhou
      setFormState('success');
      return;
    }

    setFormState('submitting');
    setPhoneError(null);

    // Usa o state 'phone' que já contém o valor formatado, ou pega do formData
    // Como é controlado, formData.get('phone') deve ser igual a 'phone'

    // Validação de Telefone
    const phoneDigits = validatePhone(phone);

    if (!phoneDigits) {
      setPhoneError('Digite um telefone válido com DDD. Ex: (86) 99999-9999');
      setFormState('idle');
      return;
    }

    const data = {
      name: formData.get('name'),
      phone: phone, // Envia formatado para leitura humana
      phone_digits: phoneDigits, // Envia normalizado para automação
      email: formData.get('email'),
      message: formData.get('message'),
      // Metadados da página
      pageUrl: window.location.href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    try {
      if (!N8N_WEBHOOK_URL) throw new Error("Webhook URL not configured");

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('success');
        if (onSuccess) {
          setTimeout(onSuccess, 3000); // Fecha o modal ou executa callback após 3s
        }
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center text-center space-y-4 ${variant === 'modal' ? 'min-h-[300px]' : 'min-h-[400px]'}`}>
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
          <CalendarCheck size={40} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-stone-800">Solicitação Recebida!</h3>
        <p className="text-stone-600">
          Seus dados foram enviados com sucesso. Entrarei em contato em breve para agendarmos sua <strong>sessão gratuita</strong>.
        </p>
        <button
          onClick={() => {
            setFormState('idle');
            setPhone('');
          }}
          className="text-primary-600 font-bold underline mt-4 hover:text-primary-800 transition-colors"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Headline de Conversão - Visível em ambos os variantes para reforçar a oferta */}
      <div className="mb-6 text-left">
        <h3 className="font-serif text-2xl font-bold text-stone-800 leading-tight">
          Primeira sessão gratuita
        </h3>
        <p className="text-stone-600 text-sm mt-1">
          Preencha seus dados e entraremos em contato o quanto antes.
        </p>
      </div>

      {/* Honeypot field - Invisível para humanos */}
      <div className="hidden">
        <label htmlFor="website_url">Não preencha este campo se você for humano</label>
        <input
          type="text"
          name="website_url"
          id="website_url"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {formState === 'error' && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3 text-red-700 text-sm">
          <AlertCircle size={20} />
          <span>Houve um erro ao enviar. Por favor, tente novamente ou chame no WhatsApp.</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Nome Completo</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all bg-stone-50 focus:bg-white"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Telefone / WhatsApp</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          value={phone}
          onChange={handlePhoneChange}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-4 outline-none transition-all bg-stone-50 focus:bg-white ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-stone-200 focus:border-primary-500 focus:ring-primary-100'}`}
          placeholder="(DDD) 99999-9999"
        />
        {phoneError && (
          <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {phoneError}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all bg-stone-50 focus:bg-white"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Mensagem (Opcional)</label>
        <textarea
          name="message"
          id="message"
          rows={2}
          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all bg-stone-50 focus:bg-white resize-none"
          placeholder="Breve resumo do que sente..."
        ></textarea>
      </div>

      <Button
        type="submit"
        fullWidth
        disabled={formState === 'submitting'}
        className={`mt-2 ${formState === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {formState === 'submitting' ? 'Enviando...' : 'Garantir Sessão Gratuita'}
      </Button>

      <div className="text-center space-y-2 mt-4">
        <p className="text-xs text-stone-500">
          Ao enviar, você concorda em ser contatado(a) por WhatsApp/E-mail. <br />
          <a href="/privacidade" className="underline hover:text-stone-800 transition-colors">Veja nossa Política de Privacidade.</a>
        </p>
      </div>
    </form>
  );
};