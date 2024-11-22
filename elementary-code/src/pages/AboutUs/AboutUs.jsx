import Footer from '../../components/Footer/Footer'
import HelpUs from '../../components/HelpUs/HelpUs'
import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/UI/Button/Button'
import Paragraph from '../../components/UI/Paragraph/Paragraph'
import Title from '../../components/UI/Title/Title'
import './aboutus.css'

function AboutUs() {
    return (
        <div className="about-us">
            <Navbar />
            <main id='about-us-main' className='d-flex flex-column align-items-center p-5 gap-5'>
                <Title
                    text="Quem somos?"
                />
                <div className="about-us-paragraph d-flex flex-column align-items-center gap-3">
                    <Paragraph
                        text="O Elementary Code é um projeto educacional criado para democratizar o acesso ao aprendizado de programação. Inspirado por iniciativas renomadas no ensino online, nossa missão é proporcionar um ambiente acessível, estruturado e prático, que capacite pessoas de diferentes origens a desenvolverem habilidades técnicas essenciais para o mercado de tecnologia."
                    />
                    <Paragraph
                        text="Somos movidos pela crença de que aprender a programar deve ser uma experiência envolvente e inclusiva. Nossa equipe é composta por entusiastas da tecnologia e da educação, comprometidos em criar conteúdos de qualidade e ferramentas interativas para facilitar o aprendizado de forma progressiva e eficaz."
                    />
                    <Paragraph
                        text="No Elementary Code, acreditamos que a programação é a chave para abrir portas no mundo digital, e estamos aqui para ajudar você a dar os primeiros passos nessa jornada!"
                    />
                </div>
                <Button
                    text="Ver outros cursos"
                    link={'/courses'}
                    type="primary"
                />
            </main>
            <HelpUs/>
            <Footer/>
        </div>
    )
}

export default AboutUs