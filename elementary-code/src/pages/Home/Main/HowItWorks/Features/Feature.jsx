import Paragraph from '../../../../../components/UI/Paragraph/Paragraph'
import './feature.css'

function Feature({icon, text, fontSize}) {
    return (
        <div className="feature">
            <i className={`fi fi-${icon}`}></i>
            <Paragraph
                text={text}
                alignment="center"
                className="paragraph"
                fontSize={0.8}
            />
        </div>
    )
}

export default Feature