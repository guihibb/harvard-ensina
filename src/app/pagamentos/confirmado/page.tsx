import Image from 'next/image'
import '../../css/payment.css'
import Confirmado from "../../../../public/confirmado.svg"
import Comprante from '../../componentes/comprovante'



export default function Home() {
  return (
    <>
    <section className='app'>
        <Image src={Confirmado} alt="Confirmado" />
         <div className="txt-pagamento">
            <h1 className='txt-h1'>Pagamento Confirmado!</h1>
            <p className='txt-p'>Sua transação foi concluída com sucesso. <br /> Abaixo, você encontrará detalhes sobre</p>
         </div>
         <Comprante/>
    </section>
    </>
  )
}
