'use client'
import { useEffect, useState } from 'react';
import moment from 'moment';
import '../css/body.css'

const CountdownTimer = () => {
  const initialTime = moment.duration({ minutes: 24, seconds: 15 });
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = moment.duration(prevTime).subtract(1, 'second');
        return newTime.asSeconds() >= 0 ? newTime : initialTime;
      });
    }, 1000);

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return (
      <p className='contador-funcional'>
        🕗 {String(Math.floor(time.asMinutes())).padStart(2, '0')}:
        {String(time.seconds()).padStart(2, '0')}
      </p>
  );
};

export default CountdownTimer;
