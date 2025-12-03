'use client';

import { useState, useEffect, useCallback } from 'react';
import { CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const cities = [
  'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Salvador, BA', 'Curitiba, PR',
  'Fortaleza, CE', 'Brasília, DF', 'Porto Alegre, RS', 'Recife, PE', 'Goiânia, GO', 'Belém, PA',
  'Florianópolis, SC', 'Vitória, ES', 'Manaus, AM', 'Natal, RN', 'João Pessoa, PB'
];

const messages = [
  () => `Alguém de ${cities[Math.floor(Math.random() * cities.length)]} acabou de comprar 🎉`,
  () => 'Nova compra realizada há 2 min 🔥',
  () => '+1 pedido confirmado agora!',
  () => 'Acabaram de garantir o acesso 👇',
  () => 'Mais uma compra feita!',
  () => 'Alguém acabou de desbloquear o conteúdo!',
];

export function RecentPurchasePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [hasScrolled, setHasScrolled] = useState(false);

  const showRandomMessage = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[randomIndex]());
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Fica visível por 4 segundos
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);


  useEffect(() => {
    if (!hasScrolled) return;

    let timeoutId: NodeJS.Timeout;

    const scheduleNextPopup = () => {
      const randomInterval = Math.random() * (18000 - 8000) + 8000; // Intervalo entre 8 e 18 segundos
      timeoutId = setTimeout(() => {
        showRandomMessage();
        scheduleNextPopup();
      }, randomInterval);
    };

    const initialDelay = setTimeout(() => {
      showRandomMessage();
      scheduleNextPopup();
    }, 5000); // Primeira notificação após 5 segundos do scroll inicial

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
    };
  }, [hasScrolled, showRandomMessage]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-4 z-50 flex items-center gap-4 rounded-lg bg-[#000000CC] p-4 shadow-2xl backdrop-blur-sm"
        >
          <CheckCircle className="h-6 w-6 shrink-0 text-[#D4AF37]" />
          <p className="text-sm font-medium text-white">{currentMessage}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
