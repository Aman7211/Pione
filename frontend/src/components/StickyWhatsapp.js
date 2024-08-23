import React from 'react';
import whatsappLogo from '../assets/images/whatsapp logo.png';

const StickyWhatsApp = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a
        href="https://wa.me/9810475719"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="w-12 h-12 md:w-20 md:h-20 hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default StickyWhatsApp;
