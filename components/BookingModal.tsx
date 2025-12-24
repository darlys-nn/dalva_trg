import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { AppointmentForm } from './AppointmentForm';

export const BookingModal: React.FC = () => {
  const { isModalOpen, closeModal } = useBooking();

  // Fecha o modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  // Bloqueia o scroll do body quando aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-fade-in-up border border-stone-100 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-1"
        >
          <X size={24} />
        </button>

        <div className="mb-2">
           {/* O título e subtítulo agora são gerenciados dentro do AppointmentForm para garantir a consistência da oferta (Sessão Gratuita) */}
        </div>

        <AppointmentForm variant="modal" onSuccess={closeModal} />
      </div>
    </div>
  );
};