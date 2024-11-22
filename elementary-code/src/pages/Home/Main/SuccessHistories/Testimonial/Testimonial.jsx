import blankProfile from '../../../../../assets/Students/blank-profile.png'
import Paragraph from '../../../../../components/UI/Paragraph/Paragraph';
import './testimonial.css';

function Testimonial({photo={blankProfile}, name, text}) {
    return (
        <div className="testimonial">
            <img src={photo} alt={name} className="testimonial-photo"/>
            <div className="testimonial-content">
                <h5>{name}</h5>
                <Paragraph
                    text={text}
                    fontSize={0.9}
                    alignment="left"
                    className="testimonial-text"
                />
            </div>
        </div>
    )
}

export default Testimonial;