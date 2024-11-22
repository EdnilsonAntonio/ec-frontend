import Paragraph from '../../../../components/UI/Paragraph/Paragraph'
import Title from '../../../../components/UI/Title/Title'
import Feature from './Features/Feature'
import './howitworks.css'

function HowItWorks() {
    return (
        <div className='how'>
            <Title text="Como funciona a Elementary Code?" alignment="center" />
            <Paragraph
                text="Possuímos uma didáctica eficiente e simples que tem como público alvo uma audiência mais jovem. A nossa metodologia é tão simples que até crianças a partir dos 10 anos podem frequentar os nossos cursos!"
                alignment="center"

            />
            <div className="row">
                <div className="col-lg-4 p-0">
                    <Feature
                        icon="rr-book-alt"
                        text="Mergulhe em um currículo de alto nível repleto de tutoriais, blogs e cursos on-line cuidadosamente selecionados!"
                    />
                </div>
                <div className="col-lg-4 p-0">
                    <Feature
                        icon="rr-laptop-code"
                        text="Você poderá criar vários projetos dignos de portfólio à medida que avança, desde scripts simples até programas completos e sites implantados!"
                    />
                </div>
                <div className="col-lg-4 p-0">
                    <Feature
                        icon="rr-network-user"
                        text="Ei! Você faz parte de uma comunidade de apoio agora. Junte-se a nós e aproveite o conhecimento e a experiência de desenvolvedores novos e experientes."
                    />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks