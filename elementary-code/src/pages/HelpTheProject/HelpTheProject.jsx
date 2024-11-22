import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/UI/Button/Button'
import Paragraph from '../../components/UI/Paragraph/Paragraph'
import Title from '../../components/UI/Title/Title'
import './helptheproject.css'

function HelpTheProject() {
    return (
        <div className="help">
            <Navbar/>
            <main id='help-main' className='p-5 d-flex flex-column'>
                <section className="help-hero  d-flex flex-column align-items-center gap-5">
                    <Title
                        text="Apoie o projeto"
                    />
                    <Paragraph
                        text="A Elementary Code assumiu o compromisso, desde o começo, de oferecer um currículo de codificação de nível mundial e totalmente sem custo para qualquer indivíduo interessado em aprender. Com as suas contribuições generosas, podemos continuar a motivar milhares de candidatos a desenvolvedores, sem importar sua formação ou condição financeira."
                        alignment="center"
                    />
                    <Button
                        text="Doar agora!"
                        type="primary"
                    />
                </section>
                <section className="help-faq p-3 d-flex flex-column align-items-center">
                    <FAQ/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default HelpTheProject