import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingProvider } from './context/BookingContext';
import { BookingModal } from './components/BookingModal';

const App: React.FC = () => {
  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <PainPoints />
          <About />
          <Services />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </BookingProvider>
  );
};

export default App;