"use client"// DateTimeDisplay.tsx""
import React, { useState, useEffect } from 'react';
import "../css/payment.css"

const DateTimeDisplay: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'short' });
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      const formattedDateTime = `${day} ${month} ${year} - ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentDateTime(formattedDateTime);
    };

    const intervalId = setInterval(updateDateTime, 1000); // Atualiza a cada segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className='data-hora'>{currentDateTime}</p>
    </div>
  );
};

export default DateTimeDisplay;
