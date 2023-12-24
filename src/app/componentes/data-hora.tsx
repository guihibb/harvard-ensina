// Outro componente onde você deseja exibir a data e a hora
import React from 'react';
import DateTimeDisplay from '../componentes/data-hora-componente';
import "../css/payment.css"

const AnotherComponent: React.FC = () => {
  return (
    <div>
      <DateTimeDisplay />
    </div>
  );
};

export default AnotherComponent;
