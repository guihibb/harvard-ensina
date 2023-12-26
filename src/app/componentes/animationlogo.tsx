// components/Image.tsx
"use client"
// components/Image.tsx

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Harvard from "../../../public/harvard-icon.svg";

const AnimatedImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [size, setSize] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [zIndex, setZIndex] = useState(9999);

  useEffect(() => {
    const timeoutShow = setTimeout(() => {
      setIsVisible(true);
      setSize(100);
    }, 100);

    const timeoutHide = setTimeout(() => {
      setIsVisible(false);
      setSize(0);
      setBackgroundOpacity(0);
    }, 3000);

    const timeoutRemoveBackground = setTimeout(() => {
      setZIndex(0);
    }, 4000); // 3 segundos da animação + 1 segundo de espera

    return () => {
      clearTimeout(timeoutShow);
      clearTimeout(timeoutHide);
      clearTimeout(timeoutRemoveBackground);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
        transition: 'background-color 1s ease-in-out',
        zIndex: zIndex,
        display: zIndex === 0 ? 'none' : 'block',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: isVisible ? '50%' : '100%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${size / 100})`,
          transition: 'top 1s ease-in-out, transform 1s ease-in-out',
          zIndex: zIndex + 1, // Um valor acima do fundo
        }}
      >
        <Image
          src={Harvard}
          alt="Imagem"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
