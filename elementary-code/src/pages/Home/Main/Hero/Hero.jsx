import Button from '../../../../components/UI/Button/Button'
import Mountain from '../../../../assets/mountain.png'
import './hero.css'
import Title from '../../../../components/UI/Title/Title'
import Paragraph from '../../../../components/UI/Paragraph/Paragraph'

function Hero() {
    return (
        <div className="hero">
            <Title text="Aprenda a programar com a Elementary Code!"/>
            <Paragraph
                text="Aprenda a programar de maneira fácil, divertida e gratuita!
                Na Elementary Code você irá aprender desde os fundamentos da
                programação até às ferramentas mais avançadas."
            />
            <Button text="Ver cursos" type="primary" link={'/courses'}/>
            <img src={Mountain} alt="Mountain" className="hero-img"/>
        </div>
    )

}

export default Hero