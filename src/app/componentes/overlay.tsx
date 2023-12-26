"use client"

import { useEffect, useState } from 'react';

const Overlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const timeoutHide = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutHide);
    };
  }, []);

  const calculateOpacity = () => {
    const currentTime = new Date().getTime();
    const startTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const opacity = 1 - Math.min(1, elapsedTime / 1000); // Opacidade diminui gradualmente

    return opacity;
  };

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: `rgba(255, 255, 255, ${calculateOpacity()})`, // Fundo branco com opacidade variável
            zIndex: 9999,
            pointerEvents: 'none', // Impede interação com a tela
            transition: 'opacity 2s linear',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        </div>
      )}
    </>
  );
};

export default Overlay;