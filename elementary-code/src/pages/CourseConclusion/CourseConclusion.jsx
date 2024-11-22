import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './courseconclusion.css'
import Title from '../../components/UI/Title/Title'
import Paragraph from '../../components/UI/Paragraph/Paragraph'
import Button from '../../components/UI/Button/Button'
import HelpUs from '../../components/HelpUs/HelpUs'
import Footer from '../../components/Footer/Footer'

function CourseConclusion() {

    // Obter o nome do curso pela URL
    const [searchParams] = useSearchParams()
    const courseName = searchParams.get('courseName')

    return (
        <div className="course-conclusion">
            <Navbar />
            <main className="course-conclusion-main d-flex flex-column py-5 px-5 align-items-center">
                <Title
                    text={courseName}
                    alignment="center"
                    fontSize={1.5}
                />
                <Title
                    text="Muitos parabéns!"
                    alignment="center"
                    fontSize={2}
                />
                <Paragraph
                    text={`Parabéns por ter concluído com sucesso o curso de ${courseName}! Essa conquista reflete o seu empenho e dedicação nos estudos, além de demonstrar o seu compromisso com o futuro na área da programação. Você deu um passo importante em direção ao desenvolvimento de novas habilidades, que são essenciais para se destacar no mercado de trabalho.`}
                />
                <Paragraph
                    text={`Mas lembre-se, essa é apenas mais uma etapa da sua jornada. Aproveite o vasto currículo de cursos disponíveis para continuar aprimorando seus conhecimentos e expandir suas competências. O caminho para o sucesso é contínuo e, com cada novo aprendizado, você estará mais preparado para enfrentar os desafios e aproveitar as oportunidades que surgirem. Não desista agora, o futuro está ao seu alcance!`}
                />
                <Button
                    text="Ver outros cursos"
                    type="secondary"
                    link='/courses'
                />
            </main>
            <HelpUs/>
            <Footer/>
        </div>
    )
}

export default CourseConclusion