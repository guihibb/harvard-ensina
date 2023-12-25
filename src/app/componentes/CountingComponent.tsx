"use client"
import { useEffect, useState } from 'react';

interface CountingComponentProps {
  initialValue: number;
}

const CountingComponent: React.FC<CountingComponentProps> = ({ initialValue }) => {
  const [count, setCount] = useState<number>(initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 3000);

    // Cleanup do intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []); // O segundo argumento [] garante que o efeito é executado apenas uma vez no montar do componente

  return (
      <p className='aluno-contador'>+{count} Novos Alunos</p>
  );
};

export default CountingComponent;
