import React from 'react';
import Icon from './Icon';

const FloatingButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5544998765432"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      aria-label="Fale conosco no WhatsApp"
    >
      <Icon name="chat" className="text-3xl" />
    </a>
  );
};

export default FloatingButton;