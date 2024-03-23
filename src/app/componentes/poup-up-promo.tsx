"use client"
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../css/promo.css';
import Image from 'next/image';
import Promo from '../../../public/images/promo.svg';
import Harvard from '../../../public/images/harvard-pop.png';

const ScrollPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 80 && !showPopup && !popupClosed) {
        setShowPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remova o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showPopup, popupClosed]);

  const closeModal = () => {
    setShowPopup(false);
    setPopupClosed(true);
  };

  return (
    <div>
      {showPopup && (
        <Modal
          isOpen={true}
          onRequestClose={closeModal}
          contentLabel="Exemplo de Modal"
          className="custom-modal"
          overlayClassName="custom-overlay"
        >
          <div className="modal-overlay"></div>
          <div className="modal-content">
            <div className="top-content">
              Desconto Imperdível de 40% Espera Por Você!🔥🚀
            </div>
            <div className="txt">
              <h1 className='h1'>🌟 Incrível!</h1>
              <p className='p'>Você acaba de ganhar um presente especial de aprendizado! Parabéns, você foi selecionado para receber um desconto exclusivo.</p>
            </div>
            <div className="promo">
              <div className="promo-button">Promoção Exclusiva</div>
              <Image className='Promo' src={Promo} alt="Promo" />
            </div>
            <Image className='Harvard' src={Harvard} alt="Harvard" />
            <div className="matricula"><div className="btt">Matricule-se Agora</div></div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ScrollPopup;
