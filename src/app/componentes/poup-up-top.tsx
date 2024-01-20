"use client"
import React, { useState, useEffect } from 'react';
import Count from '../componentes/contador';
import '../css/body.css';

const Top = () => {
  const mensagens = [
    "Gabri*** Novo Aluno Harvard",
    "Henri*** Novo Aluno Harvard",
    "Julia*** Novo Aluno Harvard",
    "Ivani*** Novo Aluno Harvard",
    "Vinic*** Novo Aluno Harvard",
    "Giova*** Novo Aluno Harvard",
    "Isabe*** Novo Aluno Harvard",
    "Marce*** Novo Aluno Harvard",
    "Caiqu*** Novo Aluno Harvard",
    "Talle*** Novo Aluno Harvard",
    // Adicione mais mensagens conforme necessário
  ];

  const [indiceMensagem, setIndiceMensagem] = useState(0);
  const [exibirConta, setExibirConta] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (exibirConta) {
        setExibirConta(false);
      } else {
        setIndiceMensagem((prevIndice) => (prevIndice + 1) % mensagens.length);
        setExibirConta(true);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [exibirConta]);

  return (
    <>
      <div className="Contador-section">
        {exibirConta ? (
          <div className='conta animated'>
            <p className='txt-contador'>Últimas Turmas! <span className='txt-contador-span'>Tempo Restante:</span></p>
            <Count />
          </div>
        ) : (
          <div className='ola animated'>
            <p className='txt-contador'>
              <span className='txt-contador-span'>{mensagens[indiceMensagem]}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Top;


