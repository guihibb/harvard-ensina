// Popup.tsx
import React from 'react';
import styles from '../css/Popup.module.css'; // Você pode criar um arquivo CSS para estilos
import "../css/payment.css"
import Image from 'next/image';
import Harvard from "../../../public/Harvard_University_logo.svg"
import Exit from "../../../public/exit.svg"
import DataHora from "../componentes/data-hora"
import Comprovante from "../../../public/confirm.svg"
import RandomNumberGenerator from "../componentes/number"

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <section className='comprovante--'>
          <div className="section-top">
            <Image className='havarvd-logo-comprovante' src={Harvard} alt="Harvard" />
            <Image onClick={onClose} src={Exit} alt="Exit" />
          </div>
          <div className="text--">
            <h1 className='txt-h1-comprovante'>Comprovante de <br /> Transferência</h1>
            <DataHora />
          </div>
          <div className="valor-">
            <p className='txt-p-comprovante'>Valor</p>
            <p className='txt-d-comprovante'>R$ 87,59</p>
          </div>
          <div className="valor--">
            <Image src={Comprovante} alt="Comprovante" />
            <p className='txt-p-comprovante'>Origem</p>
          </div>
          <div className="valor---">
            <p className='txt-p-comprovante'>Nome do Curso</p>
            <p className='txt-d-comprovante'>CS50</p>
          </div>
          <div className="valor---">
            <p className='txt-p-comprovante'>Número do Pedido</p>
            <RandomNumberGenerator />
          </div>
          <div className="valor---">
            <p className='txt-p-comprovante'>Instituição</p>
            <p className='txt-d-comprovante'>Harvard Ensina Online</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Popup;
