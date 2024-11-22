import Button from '../UI/Button/Button'
import Paragraph from '../UI/Paragraph/Paragraph'
import Title from '../UI/Title/Title'
import './help.css'

function HelpUs() {
    return (
        <div className="help-us py-5">
            <Title
                text="Apoie-nos"
                alignment="center"
            />
            <Paragraph
                text="A comunidade financia a Elementary Code. Apoie a Elementary Code para capacitar estudantes globalmente!"
                alignment="center"
            />
            <div className="buttons">
                <Button
                    text="Saber mais"
                    type="secondary"
                    link="/help-the-project"
                    icon='visible'
                />
                <Button
                    text="Doar agora"
                    type="primary"
                    link="#"
                />
            </div>
        </div>
    )
}

export default HelpUs