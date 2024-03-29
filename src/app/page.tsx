import Image from 'next/image'
import '../../src/app/css/body.css'
import CountdownTimer from '../app/componentes/contador'
import VideoVSL from '../app/componentes/vsl'
import LogoHarvard from '../../public/Harvard_University_logo.svg'
import Star from '../../public/star.svg'
import Aluno from '../app/componentes/aluno'
import Capa from '../../public/images/capa-curso.png'
import Link from 'next/link'
import Certificado from '../../public/images/file-file-blank.svg'
import Notas from '../../public/images/file-note.svg'
import Book from '../../public/images/interface-book-open.svg'
import LogoApple from '../../public/images/apple logo.png'
import LogoGoogle from '../../public/images/google logo.png'
import LogoUber from '../../public/images/uber logo.png'
import Profile1 from '../../public/images/perfil-1.png'
import StarProfile from '../../public/star-profile.svg'
import CapaProfile1 from '../../public/images/capa-comentario-1.png'
import CapaProfile2 from '../../public/images/capa-comentario-2.png'
import CapaProfile3 from '../../public/images/capa-comentario-3.png'
import Profile2 from '../../public/images/perfil-2.png'
import Profile3 from '../../public/images/perfil-3.png'
import ErrorIcon from '../../public/error.svg'
import LogoEnsina from '../../public/logo-ensina.svg'
import LogoG1 from "../../public/g1-icon.png"
import LogoCNN from "../../public/cnn-icon.png"
import LogoUol from "../../public/uol-icon.png"
import VerificadoIcon from "../../public/verificado-icon.svg"
import Banner1 from "../../public/harvard-image-1.png"
import Banner2 from "../../public/harvard-image-2.png"
import Banner3 from "../../public/harvard-image-3.png"
import CircleIndicator from "../app/componentes/progress"
import Logo from "../app/componentes/animationlogo"
import PopPP from './componentes/poup-up-top'


export default function Home() {
  return (
    <>
    <Logo />
    <PopPP />
    <Logo />
    <CircleIndicator />
    <section className='bar'>
        <div className="cta-capa">
          <Link style={{ textDecoration: 'inherit',}} href={'https://pay.kiwify.com.br/jpLUtOM'}>
            <div className="button-cta">
              começar agora
            </div>
          </Link>
          <p className='descri-cta'>Garanta agora mesmo seu <span className='descri-cta-red'>Certificado Gratuito!</span></p>
        </div>
    </section>
    <VideoVSL />
    <section className='app'>
      <div className="logo-score">
        <Image className='logoHarvard' src={LogoHarvard} alt={"LogoHarvard"} />
        <div className="score">
        <Aluno />
      </div>
      </div>
     <div className="section-1-1--">
        <div className="text-section-curse">
            <div className="txt-entrada">
              <h1 className='txt-h1'>Transforme seu Futuro com o Curso <span className='txt-h1-red'>CS50</span> de <span className='txt-h1-red'>Harvard!</span></h1>
              <p className='txt-p'>Introdução à Ciência da Computação de Harvard, mais conhecido como CS50.</p>
            </div>
            <div className="moulos">
              <div className="modulos-carrosel">
                sql
              </div>
              <div className="modulos-carrosel">
                python
              </div>
              <div className="modulos-carrosel">
                c#
              </div>
              <div className="modulos-carrosel">
                java
              </div>
            </div>
          </div>
          <div className="capa-curso">
            <Image className='capa' src={Capa} alt="" />
            <div className="cta-capa">
              <Link style={{ textDecoration: 'inherit' }} href={'https://pay.kiwify.com.br/jpLUtOM'}>
                <div className="button-cta">
                  Transforme Sua Carreira
                </div>
              </Link>
              <p className='descri-cta'>Inscreva-se hoje e receba um <span className='descri-cta-red'>Certificado Gratuito!</span></p>
            </div>
          </div>
      </div>
      <div className="txt-entrada">
        <h1 className='txt-h1'>Por que Escolher o <span className='txt-h1-red'>CS50</span> de <span className='txt-h1-red'>Harvard!</span></h1>
        <p className='txt-p'>Ao concluir o curso CS50 de Harvard, não apenas você adquire habilidades de programação de elite, mas também:</p>
      </div>
      <div className="beneficios">
        <div className="container-bf">
          <Image src={Certificado} alt="Certificado" />
          <p className='txt-beneficios'>Certificado <span className='txt-beneficios-red'>Gratuito</span> Incluído<br />
            <span className='txt-beneficios-descri'>- Valorize o seu <span className='txt-beneficios-descri-bold'>currículo</span></span></p>
        </div>
        <div className="container-bf">
          <Image src={Notas} alt="Certificado" />
          <p className='txt-beneficios'><span className='txt-beneficios-red'>Currículo</span> Abrangente<br />
            <span className='txt-beneficios-descri'>- Ampla Gama De <span className='txt-beneficios-descri-bold'>Tópicos</span></span></p>
        </div>
        <div className="container-bf">
          <Image src={Book} alt="Certificado" />
          <p className='txt-beneficios'><span className='txt-beneficios-red'>Flexibilidade</span> de Estudo<br />
            <span className='txt-beneficios-descri'>- Aprenda No Seu <span className='txt-beneficios-descri-bold'>Ritmo</span></span></p>
        </div>
      </div>
      <div className="txt-entrada">
        <h1 className='txt-h1'>Depoimentos <span className='txt-h1-red'>Inspiradores</span></h1>
        <p className='txt-p'>Conquiste seu Lugar nas BigTechs com o CS50 de Harvard!</p>
      </div>
      <div className="section-comentarios">
          <div className="comentarios">
            <div className="profile-stars">
              <div className="profile">
                <Image className='profile-logo' src={Profile1} alt="Profile1" />
                <div className="name">
                  <p className='txt-name'>Diego Mendes</p>
                  <div className="compania">
                    <Image className='logo-compania' src={LogoApple} alt="LogoApple" />
                    Apple
                  </div>
                </div>
              </div>
              <Image className='StarProfile' src={StarProfile} alt="StarProfile" />
            </div>
            <p className='txt-comentarios'>Consegui um emprego dos sonhos na Apple, onde aplico diariamente o conhecimento adquirido. Agradeço à Harvard por abrir as portas do meu futuro.</p>
            <Image className='CapaProfile1' src={CapaProfile1} alt="CapaProfile1" />
          </div>
          <div className="comentarios">
            <div className="profile-stars">
              <div className="profile">
                <Image className='profile-logo' src={Profile2} alt="Profile1" />
                <div className="name">
                  <p className='txt-name'>Walmyr Carvalho</p>
                  <div className="compania">
                    <Image className='logo-compania' src={LogoGoogle} alt="LogoApple" />
                    Google
                  </div>
                </div>
              </div>
              <Image className='StarProfile' src={StarProfile} alt="StarProfile" />
            </div>
            <p className='txt-comentarios'>Trabalhar na Google sempre foi meu objetivo, mas parecia distante. O CS50 de Harvard foi o catalisador que transformou minha jornada.</p>
            <Image className='CapaProfile1' src={CapaProfile2} alt="CapaProfile1" />
          </div>
          <div className="comentarios">
            <div className="profile-stars">
              <div className="profile">
                <Image className='profile-logo' src={Profile3} alt="Profile1" />
                <div className="name">
                  <p className='txt-name'>Roger Guedes</p>
                  <div className="compania">
                    <Image className='logo-compania' src={LogoUber} alt="LogoApple" />
                    Uber
                  </div>
                </div>
              </div>
              <Image className='StarProfile' src={StarProfile} alt="StarProfile" />
            </div>
            <p className='txt-comentarios'>A concorrência para ingressar na Uber é intensa, mas o CS50 de Harvard me deu a vantagem que eu precisava.</p>
            <Image className='CapaProfile1' src={CapaProfile3} alt="CapaProfile1" />
          </div>
      </div>
        <div className="txt-entrada">
          <h1 className='txt-h1'>Veja As <span className='txt-h1-red'>Consquistas </span>De Nossos <span className='txt-h1-red'>Alunos!</span></h1>
          <p className='txt-p'>Descubra como o CS50 de Harvard tem transformado vidas, abrindo portas para oportunidades incríveis.</p>
        </div>
        <div className="noticias-box-canais">
          <div className="noticias-section">
          <div className="box-noticia">
            <div className="noticia">
              <div className="canal">
                <div className="dados-canal">
                  <Image className='logog1' src={LogoG1} alt="LogoG1" />
                  <div className="nome-hora">
                    <div className="nome-box-canal">
                      <h1 className='nome-canal'>G1</h1>
                      <Image src={VerificadoIcon} alt="VerificadoIcon" />
                    </div>
                    <p className='hora-data'>8 horas atrás</p>
                  </div>
                </div>
                <div className="noticia-escrita">
                  <h1 className='txt-h1-news'>CS50: Transformando Alunos em Estrelas da Programação.</h1>
                  <p className='txt-p-news'>Leia as histórias inspiradoras de alunos do CS50 de Harvard que agora brilham...</p>
                </div>
              </div>
            </div>
            <Image className='Banner1' src={Banner1} alt="Banner1" />
          </div>
          <div className="box-noticia">
            <div className="noticia">
              <div className="canal">
                <div className="dados-canal">
                  <Image className='logog1' src={LogoCNN} alt="LogoG1" />
                  <div className="nome-hora">
                    <div className="nome-box-canal">
                      <h1 className='nome-canal'>CNN</h1>
                      <Image src={VerificadoIcon} alt="VerificadoIcon" />
                    </div>
                    <p className='hora-data'>12 horas atrás</p>
                  </div>
                </div>
                <div className="noticia-escrita">
                  <h1 className='txt-h1-news'>Transformando Carreiras em Histórias de Sucesso.</h1>
                  <p className='txt-p-news'>Descubra as incríveis transformações de carreira impulsionadas pelo CS50...</p>
                </div>
              </div>
            </div>
            <Image className='Banner1' src={Banner2} alt="Banner1" />
          </div>
          <div className="box-noticia">
            <div className="noticia">
                <div className="dados-canal">
                  <Image className='logog1' src={LogoUol} alt="LogoG1" />
                  <div className="nome-hora">
                    <div className="nome-box-canal">
                      <h1 className='nome-canal'>UOL</h1>
                      <Image src={VerificadoIcon} alt="VerificadoIcon" />
                    </div>
                    <p className='hora-data'>18 horas atrás</p>
                  </div>
                </div>
                <div className="noticia-escrita">
                  <h1 className='txt-h1-news'>CS50 de Harvard: Revolução na Educação Online.</h1>
                  <p className='txt-p-news'>Acompanhe a UOL, que trazem à tona as histórias fascinantes de alunos do CS50...</p>
                </div>
            </div>
            <Image className='Banner1' src={Banner3} alt="Banner1" />
          </div>
        </div>
        <div className="cta-news">
          <Link style={{ textDecoration: 'inherit' }} href={'https://pay.kiwify.com.br/jpLUtOM'}>
              <div className="button-cta">
                Junte-se a uma comunidade
              </div>
            </Link>
            <p className='descri-cta'>Sua história de sucesso começa com o <span className='descri-cta-red'>CS50!</span></p>
        </div>
      </div>
      <div className="txt-entrada">
        <h1 className='txt-h1'>Por Que Outras <span className='txt-h1-red'>Plataformas </span>São <span className='txt-h1-red'>Ruins</span>?</h1>
        <p className='txt-p'>Ao considerar sua jornada de aprendizado em programação, é essencial estar ciente das armadilhas que outras plataformas apresentam.</p>
      </div>
      <div className="beneficios">
        <div className="container-bf">
          <Image src={ErrorIcon} alt="Certificado" />
          <p className='txt-beneficios'>Certificado com <span className='txt-beneficios-red'>Custo Adicional</span><br />
            <span className='txt-beneficios-descri'>- Muitas plataformas cobram</span></p>
        </div>
        <div className="container-bf">
          <Image src={ErrorIcon} alt="Certificado" />
          <p className='txt-beneficios'>Restrições de <span className='txt-beneficios-red'>Acesso</span> ao <span className='txt-beneficios-red'>Material</span><br />
            <span className='txt-beneficios-descri'>- Limitam o Acesso</span></p>
        </div>
        <div className="container-bf">
          <Image src={ErrorIcon} alt="Certificado" />
          <p className='txt-beneficios'>Suporte <span className='txt-beneficios-red'>Limitado</span> da <span className='txt-beneficios-red'>Comunidade</span><br />
            <span className='txt-beneficios-descri'>- Falta de uma comunidade</span></p>
        </div>
      </div>
      <div className="error-section">
        <div className="cta-capa">
          <div className="txt-entrada">
            <h1 className='txt-h1'>Evite Esses <span className='txt-h1-red'>Erros Comuns</span></h1>
            <p className='txt-p'>CS50 de Harvard se destaca como a escolha clara para quem busca uma educação de qualidade em programação, sem surpresas desagradáveis.</p>
          </div>
          <Link style={{ textDecoration: 'inherit' }} href={'https://pay.kiwify.com.br/jpLUtOM'}>
            <div className="button-cta">
              comece agora
            </div>
          </Link>
          <p className='descri-cta'>Garanta seu <span className='descri-cta-red'>Certificado Gratuito!</span></p>
        </div>
      </div>
    </section>
    <footer className='footer'>
      <h1 className='txt-h1-footer'>Desenvolva seus conhecimentos de onde quer que esteja.</h1>
      <Image src={LogoEnsina} alt="LogoEnsina"/>
      <p className='txt-p-footer'>© 2023 Harvard Ensina Inc. Todos os direitos reservados.</p>
    </footer>
    </>
  )
}
