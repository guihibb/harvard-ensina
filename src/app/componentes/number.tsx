"use client"
import React, { useState, useEffect } from 'react';
import "../css/payment.css"

const RandomNumberGenerator: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    generateRandomNumber();
  }, []); // O array vazio assegura que o useEffect será executado apenas uma vez ao montar o componente

  const generateRandomNumber = () => {
    const min = 100000; // Menor número de 6 dígitos
    const max = 999999; // Maior número de 6 dígitos

    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      <p className='txt-d-comprovante'>{randomNumber}</p>
    </div>
  );
};

export default RandomNumberGenerator;
