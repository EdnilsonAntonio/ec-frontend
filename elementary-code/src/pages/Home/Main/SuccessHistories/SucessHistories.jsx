import Title from '../../../../components/UI/Title/Title'
import './success.css'
import Testimonial  from './Testimonial/Testimonial'
import student1 from '../../../../assets/Students/student-1.png'
import student2 from '../../../../assets/Students/student-2.png'
import student3 from '../../../../assets/Students/student-3.png'
import student4 from '../../../../assets/Students/student-4.png'

function SuccessHistories() {
    return (
        <div className="success">
            <Title
                text="Histórias de sucesso"
                alignment="center"
            />

            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <Testimonial
                        name="Lara Silva"
                        photo={student1}
                        text="Antes de entrar para a Elementary Code, eu possuía uma experiência absolutamente nula em programação. Após quase um ano de trabalho no programa, me ofereceram ..."

                    />
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <Testimonial
                        name="João Rocha"
                        photo={student2}
                        text="Um currículo fascinante e personalizado que incorpora os recursos mais eficazes para aprender programação na web! Foi um recurso valioso na minha jornada para me tornar..."
                    />
                </div>
            </div>
            <div className="row justify-content-center mt-0">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <Testimonial
                        name="Giselle Tavares"
                        photo={student3}
                        text="Antes de encontrar a Elementary Code, eu tinha uma orientação limitada no meu aprendizado, alternando entre tópicos e tentando encaixar as peças conforme..."
                    />
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <Testimonial
                        name="Fábio Cardoso"
                        photo={student4}
                        text="TOP! Foi um ajuste ideal para o meu método de aprendizado. Não segui um projeto completo, mas sim me forcei a descobrir isso por conta própria."
                    />
                </div>
            </div>
            <a href="" className='more-testimonials'>Ver mais histórias de sucesso</a>
        </div>
    )
}

export default SuccessHistories