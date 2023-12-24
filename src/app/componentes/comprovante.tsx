"use client"// Home.tsx""
import React, { useState } from 'react';
import Popup from '../componentes/poup-up';
import "../css/payment.css"

const Home: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="button-comprovante" onClick={handleOpenPopup}>
        Ver detalhes da compra
      </div>

      {isPopupOpen && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Home;
